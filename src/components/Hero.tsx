interface HeroProps {
  onJoinPilot: () => void;
}

export const Hero = ({ onJoinPilot }: HeroProps) => {
  return (
    <section className="bg-black text-white rounded-t-xlTop section-pad text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-5 max-w-4xl leading-tight tracking-tight">
            Bagira AI: революционная возможность для вашей юридической фирмы
          </h1>
          <p className="text-gray500 text-lg md:text-xl mb-8 max-w-3xl">
            Наш интеллектуальный ассистент круглосуточно обрабатывает запросы, квалифицирует потенциальных клиентов и назначает консультации, освобождая ваше время для юридической практики.
          </p>
          <button 
            onClick={onJoinPilot}
            className="btn btn-primary mb-10"
          >
            Присоединиться к пилотной программе
          </button>
          
          <div className="relative overflow-hidden w-full max-w-3xl aspect-video mb-10 rounded-xl shadow-2xl">
            <iframe 
              src="https://www.youtube.com/embed/U-Ko2DSn3q4?autoplay=0&rel=0" 
              title="Видео о Bagira AI" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 