import { useState } from 'react';
import MenuIconOpen from 'assets/icons/icon_menu.svg';
import MenuIconClose from 'assets/icons/icon_close.svg';
import MenuItem from './MenuItem';
import { MENU_ITEMS } from './constants';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MenuIcon = isOpen ? MenuIconClose : MenuIconOpen;
  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={MenuIcon} alt="menu" />
      </div>

      {isOpen && (
        <div className="absolute right-0 min-w-[280px] z-50">
          <div className="flex flex-col">
            {MENU_ITEMS.map((item) => (
              <MenuItem key={item.label} label={item.label} path={item.path} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
