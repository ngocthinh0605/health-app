import React from 'react';
import Logo from '../logo';
import Navigation from './Navigation';
import Menu from './Menu';
type HeaderProps = {
  className?: string;
};
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={`${className} min-h-[64px] bg-[#414141] z-50`}>
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-[160px]">
        <Logo />
        <div className="flex items-center gap-4">
          <Navigation />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
