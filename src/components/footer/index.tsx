import { Link } from 'react-router-dom';
import Typography from '../typography';
import { FOOTER_ITEMS } from './constants';

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div
      className={`${className} bg-dark-500 min-h-[128px] flex flex-col justify-center`}
    >
      <div className="w-[1280px] mx-auto flex items-center justify-start gap-[46px] px-[160px]">
        {FOOTER_ITEMS.map((item) => (
          <Link key={item.label} to={item.path}>
            <Typography variant="3xs" className="text-white">
              {item.label}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
