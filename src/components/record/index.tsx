import React from 'react';
import Typography from '../typography';
type RecordProps = {
  className?: string;
  width?: string | number;
  height?: string | number;
  image?: string;
  title?: string;
  subtitle?: string;
};
const Record: React.FC<RecordProps> = ({
  className,
  width = '240px',
  height = '240px',
  image,
  title = 'BODY RECORD',
  subtitle = '自分のカラダの記録',
}) => {
  return (
    <div
      className={`relative border-[24px] border-[#FFCC21] box-content ${className}`}
      style={{ width, height }}
    >
      <div className="absolute inset-0 bg-[#000000] opacity-[0.25px] mix-blend-luminosity" />
      <img
        src={image}
        alt="record"
        className="w-full h-full object-cover mix-blend-luminosity brightness-[0.4]"
        width={width}
        height={height}
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center gap-[10px]">
        <Typography variant="xxl" className="text-[#FFCC21]">
          {title}
        </Typography>
        <Typography
          variant="xs"
          className="mt-1 font-[300] !text-white bg-[#FF963C] min-w-[160px] text-center pt-[1px] pb-[3px]"
        >
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default Record;
