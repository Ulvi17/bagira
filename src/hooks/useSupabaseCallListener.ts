import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export const useSupabaseCallListener = (onCallId: (id: string) => void) => {
  useEffect(() => {
    const channel = sb.channel('bagheera:new-call')
      .on('broadcast', { event: 'call-created' }, ({ payload }) => {
        console.log('🔔 new callId', payload.callId);
        onCallId(payload.callId);
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log('✅ listening for callId broadcasts');
        }
      });

    return () => {
      sb.removeChannel(channel);
    };
  }, [onCallId]);
}; 