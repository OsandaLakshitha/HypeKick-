import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
  ];

  const authItems = [
    { name: 'Sign In', href: '#signin' },
    { name: 'Login', href: '#login' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              {/* Left side navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Center Logo */}
              <div className="flex-1 flex justify-center md:flex-none">
                <a href="#" className="text-white text-2xl font-bold tracking-wide" style={{ fontFamily: 'Lobster, cursive' }}>
                  HypeKick
                </a>
              </div>

              {/* Right side navigation */}
              <div className="hidden md:flex items-center space-x-4">
                {authItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      item.name === 'Login'
                        ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white/90 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 pt-2 pb-4 space-y-2 bg-black/20 backdrop-blur-sm">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/20 space-y-2">
                {authItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      item.name === 'Login'
                        ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Google Fonts link for Lobster font */}
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
    </>
  );
};

export default Navigation;