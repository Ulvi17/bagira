export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray900 text-gray-400 py-8 text-center text-sm">
      <div className="container mx-auto px-4 max-w-4xl">
        <p>
          © {currentYear} Bagira AI. Все права защищены.
        </p>
      </div>
    </footer>
  );
}; 