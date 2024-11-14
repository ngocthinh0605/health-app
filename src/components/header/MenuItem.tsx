import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../typography';
interface MenuItemProps {
  label: string;
  onClick?: () => void;
  path?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick, path = '/' }) => {
  return (
    <Link
      to={path}
      className="w-full pl-8 py-6 text-left text-white hover:bg-gray-100 hover:text-black bg-[#777777] border-b border-gray-400"
      onClick={onClick}
    >
      <Typography variant="lg">{label}</Typography>
    </Link>
  );
};

export default MenuItem;
