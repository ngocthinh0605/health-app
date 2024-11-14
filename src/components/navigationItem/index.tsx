import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../typography';
import Icon from '../icon';
import { twMerge } from 'tailwind-merge';
type NavigationItemProps = {
  label: string;
  path: string;
  icon: string;
  count?: number;
  active?: boolean;
};
const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  path,
  icon,
  count,
  active,
}) => {
  const countText = count ? count.toString() : '';

  return (
    <Link className="flex items-center gap-2 py-2 pl-2 pr-4" to={path}>
      <div className="relative">
        <Icon src={icon} alt={label} />
        {countText ? (
          <span className="absolute -top-[0] -right-[8px] bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            <Typography variant="4xs" className="text-white">
              {countText}
            </Typography>
          </span>
        ) : null}
      </div>
      <Typography
        variant="body"
        className={twMerge(
          'min-w-[96px]',
          active ? 'text-[#FF963C]' : 'text-white'
        )}
      >
        {label}
      </Typography>
    </Link>
  );
};

export default NavigationItem;
