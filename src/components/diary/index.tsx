import React from 'react';
import Typography from '../typography';
type DiaryProps = {
  className?: string;
  day?: string;
  time?: string;
  shortText?: string;
  longText?: string;
};
const Diary: React.FC<DiaryProps> = ({
  className,
  day,
  time,
  shortText,
  longText,
}) => {
  return (
    <div
      className={`${className} w-[231px] h-[231px] border-2 border-gray-400 px-4 pt-4 pb-6 !text-[#414141] `}
    >
      <Typography variant="lg">{day}</Typography>
      <Typography variant="lg">{time}</Typography>
      <div className="h-[132px] overflow-hidden mt-2">
        <Typography variant="2xs">{shortText}</Typography>
        <Typography variant="2xs" className="line-clamp-5">
          {longText}
        </Typography>
      </div>
    </div>
  );
};

export default Diary;
