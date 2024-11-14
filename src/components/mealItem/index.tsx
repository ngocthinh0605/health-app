import React from 'react';
import Typography from '../typography';
import moment from 'moment';

interface MealItemProps {
  image?: string;
  date?: string;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: string;
}

const MealItem: React.FC<MealItemProps> = ({
  image,
  date,
  className = '',
  imageWidth = 234,
  imageHeight = 234,
  type = 'Morning',
}) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={image}
        alt={`${date} ${type}`}
        className="w-full h-full object-cover"
        style={{ width: imageWidth, height: imageHeight }}
      />
      <div className="absolute bottom-0 left-0 bg-[#FFCC21] p-2">
        <Typography variant="body" className="text-white">
          {moment(date).format('MM.DD')}.{type}
        </Typography>
      </div>
    </div>
  );
};

export default MealItem;
