import React from 'react';
import Typography from '../typography';

interface ExerciseItemProps {
  name: string;
  duration: number; // in minutes
  calories: number;
  className?: string;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({
  name,
  duration,
  calories,
  className,
}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex gap-2">
        <div className="text-[6px] leading-[7px] text-white flex justify-start pt-2">
          ●
        </div>
        <div className="flex flex-col">
          <Typography variant="md" className="text-white">
            {name}
          </Typography>
          <Typography
            variant="custom"
            className="text-[#FFCC21] text-[15px] leading-[18px]  font-normal"
          >
            {calories}kcal
          </Typography>
        </div>
      </div>
      <Typography variant="md" className="text-[#FFCC21]">
        {duration} min
      </Typography>
    </div>
  );
};

export default ExerciseItem;
