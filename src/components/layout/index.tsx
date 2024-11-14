import Header from '../header';
import Footer from '../footer';
import GoToTopButton from 'components/button/goToTopButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <Header className="sticky top-0 z-50" />
      <div className="flex-1 overflow-auto max-w-[1280px] mx-auto relative">
        {children}
        <GoToTopButton />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
