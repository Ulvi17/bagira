export const Header = () => {
  return (
    <header className="bg-white py-5 text-center sticky top-0 z-40 border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-1">
          <span className="text-4xl mr-2">🐾</span>
          <h1 className="text-gray900 text-2xl md:text-3xl font-bold tracking-tight">
            BAGIRA AI
          </h1>
        </div>
        <p className="text-gray500 text-sm md:text-base">
          Интеллектуальная автоматизация для современных юридических фирм
        </p>
      </div>
    </header>
  );
}; 