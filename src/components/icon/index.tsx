type IconProps = {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};
const Icon: React.FC<IconProps> = ({ className, src, alt, width, height }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Icon;
