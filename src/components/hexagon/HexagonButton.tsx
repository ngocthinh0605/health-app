import React from 'react';
import './HexagonButton.css';
import hexagon from 'assets/hexagon-img.svg';
interface HexagonButtonProps {
  text: string;
  icon: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const HexagonButton: React.FC<HexagonButtonProps> = ({
  text,
  icon,
  width = 134,
  height = 134,
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img src={hexagon} alt="background" className="w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img src={icon} alt={text} />
        <span className="text-white">{text}</span>
      </div>
    </div>
  );
};

export default HexagonButton;
