import React, { useState, useEffect } from 'react';

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show arrow when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`
        fixed 
        bottom-8 
        right-8 
        z-50 
        transition-all 
        duration-300 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <button
        onClick={scrollToTop}
        className="
          group
          relative
          w-14 
          h-14 
          rounded-full 
          backdrop-blur-md 
          bg-white/20 
          border 
          border-white/30 
          shadow-lg 
          hover:bg-white/30 
          hover:border-white/50 
          transition-all 
          duration-300 
          hover:scale-110
          active:scale-95
          flex 
          items-center 
          justify-center
        "
        aria-label="Scroll to top"
      >
        {/* Glassy shine effect */}
        <div className="
          absolute 
          inset-0 
          rounded-full 
          bg-gradient-to-tr 
          from-white/10 
          to-white/30 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-300
        " />
        
        {/* Arrow Icon */}
        <svg
          className="
            w-6 
            h-6 
            text-white 
            relative 
            z-10 
            transition-transform 
            duration-300 
            group-hover:-translate-y-0.5
          "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTopArrow;