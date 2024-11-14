import Typography from 'components/typography';
import moment from 'moment';

type ColumnProps = {
  className?: string;
  title?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  date?: string;
  tags?: string[];
};

const Column: React.FC<ColumnProps> = ({
  title,
  className,
  image,
  imageWidth,
  imageHeight,
  date,
  tags,
}) => {
  return (
    <div className={`${className}`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ width: imageWidth, height: imageHeight }}
        />
        <div className="absolute bottom-0 left-0 bg-[#FFCC21] px-2 flex gap-2">
          <Typography variant="body" className="text-white">
            {moment(date).format('YYYY.MM.DD')}
          </Typography>
          <Typography variant="body" className="text-white">
            {moment(date).format('HH:mm')}
          </Typography>
        </div>
      </div>
      <Typography
        variant="md"
        className="text-[#414141] font-[300] line-clamp-2"
      >
        {title}
      </Typography>
      <div className="flex gap-1">
        {tags?.map((tag) => (
          <Typography
            key={tag}
            variant="2xs"
            className="text-[#FF963C] font-[300]"
          >
            {tag}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default Column;
