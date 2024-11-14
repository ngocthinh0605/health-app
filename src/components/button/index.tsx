import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  width = 296,
  height = 56,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-md
        hover:opacity-90
        transition-opacity
        ${className}
      `}
      style={{
        background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
