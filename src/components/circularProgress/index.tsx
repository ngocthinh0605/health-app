import React from 'react';
import './CircularProgress.css';
import moment from 'moment';

interface CircularProgressProps {
  image: string;
  date: string;
  percentage: number;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  image,
  date,
  percentage,
  className,
}) => {
  return (
    <div className={`circular-progress-container ${className}`}>
      <img
        src={image}
        alt="background"
        className="!w-full !h-full object-cover"
        width={540}
        height={316}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(225deg, #FFCC21 0%, #FF963C 100%)',
          opacity: 0.7,
          mixBlendMode: 'overlay',
        }}
      />
      <div className="progress-overlay !w-[181px] !h-[181px]">
        <svg className="progress-ring" viewBox="0 0 100 100">
          <path
            d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${percentage * 2.827}, 282.7`}
            transform="rotate(0 50 50)"
            style={{
              filter: 'drop-shadow(0px 0px 6px 0px rgba(252, 116, 0, 1))',
            }}
          />
        </svg>
        <div className="progress-text flex items-end gap-1">
          <div className="date">{moment(date).format('MM/DD')}</div>
          <div className="percentage">{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
