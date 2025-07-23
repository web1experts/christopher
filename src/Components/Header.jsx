// src/components/Header.jsx
const Header = () => {
  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">SBA Loan Applications</h2>
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-gray-500">
        <span className="font-medium text-white">TW</span>
      </span>
    </header>
  );
};

export default Header;