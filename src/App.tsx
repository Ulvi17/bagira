import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { CTASection } from './components/CTASection';
import { VapiButton } from './components/VapiButton';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';
import { useSupabaseCallListener } from './hooks/useSupabaseCallListener';

const problemsData = [
  {
    icon: 'fas fa-user-clock',
    title: 'Задержки с ответом ведут к потере клиентов',
    body: 'Потенциальные клиенты ожидают немедленного взаимодействия. Задержки означают, что они уходят к вашим конкурентам.'
  },
  {
    icon: 'fas fa-microphone-slash',
    title: 'Безличный первый контакт не конвертирует',
    body: 'Голосовая почта и стандартные колл-центры лишены юридического контекста и не могут эффективно выстроить доверие или квалифицировать лидов.'
  },
  {
    icon: 'fas fa-folder-minus',
    title: 'Неэффективные процессы истощают ресурсы',
    body: 'Ручная проверка лидов и планирование встреч отнимают ценное время, которое можно было бы потратить на юридическую работу.'
  }
];

const featuresData = [
  {
    icon: 'fas fa-comments',
    title: 'Мгновенная квалификация лидов',
    body: 'Привлекайте посетителей сайта немедленно, задавайте квалифицирующие вопросы и выявляйте высокопотенциальных лидов 24/7.'
  },
  {
    icon: 'fas fa-calendar-check',
    title: 'Автоматическая запись на консультацию',
    body: 'Беспрепятственно записывайте квалифицированных лидов на первичные консультации прямо в календарь вашей фирмы согласно вашей доступности.'
  },
  {
    icon: 'fas fa-clock',
    title: 'Никогда не упускайте возможность',
    body: 'Собирайте лидов и оказывайте первичную поддержку даже в нерабочее время, гарантируя, что ни один потенциальный клиент не будет проигнорирован.'
  }
];

interface FormData {
  phone: string;
  email: string;
  callId: string;
}

interface PilotFormData {
  name: string;
  companyName: string;
  website: string;
}

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [callId, setCallId] = useState('');
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingPilot, setIsSubmittingPilot] = useState(false);
  const [contactFormData, setContactFormData] = useState<FormData>({
    phone: '',
    email: '',
    callId: ''
  });
  const [pilotFormData, setPilotFormData] = useState<PilotFormData>({
    name: '',
    companyName: '',
    website: ''
  });

  // Listen for call IDs from Supabase
  useSupabaseCallListener(useCallback((id: string) => {
    setCallId(id);
    setContactFormData(prev => ({ ...prev, callId: id }));
  }, []));

  const handleTriggerPhrase = () => {
    setIsContactModalOpen(true);
  };

  const handleJoinPilot = () => {
    setIsPilotModalOpen(true);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);

    try {
      const formData = new FormData();
      formData.append('phone', contactFormData.phone);
      formData.append('email', contactFormData.email);
      formData.append('callId', contactFormData.callId);

      await fetch(import.meta.env.VITE_N8N_WEBHOOK, {
        method: 'POST',
        body: formData
      });

      alert('Спасибо! Данные отправлены.');
      setIsContactModalOpen(false);
      setContactFormData({ phone: '', email: '', callId: callId });
    } catch (error) {
      console.error('Contact form submit error', error);
      alert('Ошибка отправки. Попробуйте ещё раз.');
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handlePilotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPilot(true);

    try {
      await fetch(import.meta.env.VITE_PILOT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pilotFormData)
      });

      alert('Спасибо! Мы скоро с вами свяжемся.');
      setIsPilotModalOpen(false);
      setPilotFormData({ name: '', companyName: '', website: '' });
    } catch (error) {
      console.error('Pilot form submit error', error);
      alert('Ошибка отправки. Пожалуйста, попробуйте еще раз.');
    } finally {
      setIsSubmittingPilot(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <Hero onJoinPilot={handleJoinPilot} />
      
      <InfoSection
        variant="light"
        title="Решите проблемы привлечения клиентов в вашей фирме"
        subtitle="Традиционные методы привлечения клиентов устарели. Bagira AI решает ключевые болевые точки."
        items={problemsData}
      />
      
      <InfoSection
        variant="dark"
        title="Расширьте возможности вашей фирмы с Bagira AI"
        subtitle="Оптимизируйте процесс привлечения клиентов, улучшите скорость ответа и освободите вашу команду для оплачиваемой работы."
        items={featuresData}
      />
      
      <CTASection />
      
      <Footer />
      
      <VapiButton onTriggerPhrase={handleTriggerPhrase} />

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Пожалуйста, укажите ваши данные для подтверждения записи."
      >
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Номер телефона:
            </label>
            <input
              type="tel"
              id="phone"
              value={contactFormData.phone}
              onChange={(e) => setContactFormData(prev => ({ ...prev, phone: e.target.value }))}
              required
              placeholder="+7 (XXX) XXX-XX-XX"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Электронная почта:
            </label>
            <input
              type="email"
              id="email"
              value={contactFormData.email}
              onChange={(e) => setContactFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmittingContact}
            className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accentDark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmittingContact ? 'Отправка...' : 'Отправить данные'}
          </button>
        </form>
      </Modal>

      {/* Pilot Program Modal */}
      <Modal
        isOpen={isPilotModalOpen}
        onClose={() => setIsPilotModalOpen(false)}
        title="Присоединиться к пилотной программе Bagira AI"
      >
        <form onSubmit={handlePilotSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Ваше имя:
            </label>
            <input
              type="text"
              id="name"
              value={pilotFormData.name}
              onChange={(e) => setPilotFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              placeholder="например, Иван Иванов"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
              Название компании:
            </label>
            <input
              type="text"
              id="companyName"
              value={pilotFormData.companyName}
              onChange={(e) => setPilotFormData(prev => ({ ...prev, companyName: e.target.value }))}
              required
              placeholder="например, ООО «Юридические Решения»"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
              Сайт компании:
            </label>
            <input
              type="url"
              id="website"
              value={pilotFormData.website}
              onChange={(e) => setPilotFormData(prev => ({ ...prev, website: e.target.value }))}
              required
              placeholder="https://www.examplelaw.ru"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmittingPilot}
            className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accentDark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmittingPilot ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
