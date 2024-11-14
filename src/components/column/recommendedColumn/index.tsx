import Typography from '../../typography';

type RecommendedColumnProps = {
  className?: string;
  title?: string;
  description?: string;
};

const RecommendedColumn: React.FC<RecommendedColumnProps> = ({
  className,
  title,
  description,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-dark-600 px-2 py-6 ${className}`}
    >
      <Typography
        variant="custom"
        className="!text-[#FFCC21] text-center text-[22px] font-[400] leading-[27px] max-w-[200px]"
      >
        {title}
      </Typography>
      <div className="w-14 h-[1px] bg-white mt-[10px] mb-2"></div>
      <Typography variant="lg" className="text-white">
        {description}
      </Typography>
    </div>
  );
};

export default RecommendedColumn;
