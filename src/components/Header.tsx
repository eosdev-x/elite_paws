import { Menu, X, PawPrint as Paw } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="flex items-center">
                <Paw className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Elite Paws
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-4">
              <NavLinks onLinkClick={() => setIsMenuOpen(false)} mobile />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

interface NavLinksProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

function NavLinks({ mobile = false, onLinkClick }: NavLinksProps) {
  const baseStyles = "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors";
  const styles = mobile ? `${baseStyles} block py-2` : baseStyles;

  return (
    <>
      <a href="#available-puppies" onClick={onLinkClick} className={styles}>Available Puppies</a>
      <a href="#breeding-program" onClick={onLinkClick} className={styles}>Breeding Program</a>
      <a href="#parent-dogs" onClick={onLinkClick} className={styles}>Parent Dogs</a>
      <a href="#testimonials" onClick={onLinkClick} className={styles}>Testimonials</a>
      <a href="#contact" onClick={onLinkClick} className={styles}>Contact</a>
    </>
  );
}