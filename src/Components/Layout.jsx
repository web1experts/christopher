// src/components/Layout.jsx
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col main__wrapper">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;