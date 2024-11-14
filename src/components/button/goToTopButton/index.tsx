import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const GoToTopButton: React.FC = () => {
  //   const [isVisible, setIsVisible] = useState(false);

  //   useEffect(() => {
  //     const toggleVisibility = () => {
  //       if (window.scrollY > 300) {
  //         setIsVisible(true);
  //       } else {
  //         setIsVisible(false);
  //       }
  //     };

  //     window.addEventListener('scroll', toggleVisibility);

  //     return () => {
  //       window.removeEventListener('scroll', toggleVisibility);
  //     };
  //   }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className="fixed bottom-[50%] right-[calc((100%-1280px)/2+2rem)] p-3 
                     bg-white hover:bg-gray-100 text-black rounded-full  border border-[#777777]
                     shadow-lg transition-all duration-300 z-50 cursor-pointer"
        aria-label="Go to top"
      >
        <IoIosArrowUp size={24} />
      </button>
    </>
  );
};

export default GoToTopButton;
