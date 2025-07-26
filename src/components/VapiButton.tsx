import { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';

interface VapiButtonProps {
  onTriggerPhrase: () => void;
}

interface VapiMessage {
  type: string;
  role: string;
  transcriptType: string;
  transcript: string;
}

const vapi = new Vapi(import.meta.env.VITE_VAPI_PUBLIC);
const TRIGGER_PHRASE = "please type your phone number below to confirm.";

export const VapiButton = ({ onTriggerPhrase }: VapiButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMessage = (msg: VapiMessage) => {
      if (
        msg.type === "transcript" &&
        msg.role === "assistant" &&
        msg.transcriptType === "final" &&
        typeof msg.transcript === "string" &&
        msg.transcript.toLowerCase().includes(TRIGGER_PHRASE)
      ) {
        onTriggerPhrase();
      }
    };

    const handleCallStart = () => setIsActive(true);
    const handleCallEnd = () => setIsActive(false);

    vapi.on("message", handleMessage);
    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);

    return () => {
      vapi.off("message", handleMessage);
      vapi.off("call-start", handleCallStart);
      vapi.off("call-end", handleCallEnd);
    };
  }, [onTriggerPhrase]);

  const handleClick = () => {
    if (isActive) {
      vapi.stop();
    } else {
      vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center
        text-white text-2xl shadow-lg transition-all duration-300 z-50
        hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent/30
        ${isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-accent hover:bg-accentDark'}
      `}
      aria-label={isActive ? "Stop Voice Assistant" : "Start Voice Assistant"}
    >
      {isActive ? (
        <i className="fas fa-phone-slash"></i>
      ) : (
        <i className="fas fa-microphone"></i>
      )}
    </button>
  );
}; 