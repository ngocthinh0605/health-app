import React from 'react';
import NavigationItem from '../navigationItem';
import { NAVIGATION_ITEMS } from '../navigationItem/constants';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const pathname = useLocation().pathname;
  console.log({ pathname });
  return (
    <div className="flex items-center">
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationItem
          key={item.label}
          {...item}
          active={item.path === pathname}
        />
      ))}
    </div>
  );
};

export default Navigation;
