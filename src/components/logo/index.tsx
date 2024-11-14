import logoSvg from 'assets/logo/logo.svg';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className, width, height }) => {
  return (
    <Link to="/">
      <img
        src={logoSvg}
        className={className}
        width={width}
        height={height}
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
