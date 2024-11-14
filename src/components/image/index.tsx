type ImageProps = {
  src: any;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
}) => {
  return (
    <img
      src={typeof src === 'string' ? src : src.src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default Image;
