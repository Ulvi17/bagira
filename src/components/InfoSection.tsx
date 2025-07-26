interface InfoItem {
  icon: string;
  title: string;
  body: string;
}

interface InfoSectionProps {
  variant: 'light' | 'dark';
  title: string;
  subtitle: string;
  items: InfoItem[];
}

export const InfoSection = ({ variant, title, subtitle, items }: InfoSectionProps) => {
  const sectionClasses = variant === 'dark' 
    ? 'bg-black text-white rounded-t-xlTop' 
    : 'bg-white text-gray900 rounded-t-xlTop';
    
  const titleColor = variant === 'dark' ? 'text-white' : 'text-gray900';
  const subtitleColor = variant === 'dark' ? 'text-gray500' : 'text-gray500';
  
  const cardClasses = variant === 'dark'
    ? 'bg-white/10 backdrop-blur-sm border-l-4 border-accent text-white'
    : 'bg-white border-l-4 border-accent shadow-md';
    
  const cardTitleColor = variant === 'dark' ? 'text-white' : 'text-gray900';
  const cardBodyColor = variant === 'dark' ? 'text-gray500' : 'text-gray500';

  return (
    <section className={`${sectionClasses} section-pad text-center`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className={`${titleColor} text-2xl md:text-3xl font-bold mb-4`}>
          {title}
        </h2>
        <p className={`${subtitleColor} text-lg mb-10 max-w-3xl mx-auto`}>
          {subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`${cardClasses} p-6 rounded-xl transition-all duration-300 hover:transform hover:translate-y-1 hover:shadow-lg`}
            >
              <div className="text-accent text-3xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className={`${cardTitleColor} text-xl font-semibold mb-3`}>
                {item.title}
              </h3>
              <p className={`${cardBodyColor} text-sm leading-relaxed`}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 