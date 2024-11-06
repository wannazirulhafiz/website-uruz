// Navigation.jsx
import { Menu } from "lucide-react";
import PropTypes from 'prop-types';

export const Navigation = ({ isMenuOpen, setIsMenuOpen, navigateToPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => navigateToPage("home")}
            >
              URUZ
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <button
              onClick={() => navigateToPage("home")}
              className="transition-colors text-white/80 hover:text-nusuk-primary"
            >
              Produk
            </button>
            <button
              onClick={() => navigateToPage("pricing")}
              className="transition-colors text-white/80 hover:text-nusuk-primary"
            >
              Harga
            </button>
            
            <button
              onClick={() => navigateToPage("company")}
              className="transition-colors text-white/80 hover:text-nusuk-primary"
            >
              Syarikat
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white transition-colors hover:text-nusuk-primary"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute w-full bg-black border-t border-white/10 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => navigateToPage("home")}
              className="block w-full px-3 py-2 text-left transition-colors rounded-lg text-white/80 hover:text-nusuk-primary hover:bg-white/5"
            >
              Produk
            </button>
            <button
              onClick={() => navigateToPage("pricing")}
              className="block w-full px-3 py-2 text-left transition-colors rounded-lg text-white/80 hover:text-nusuk-primary hover:bg-white/5"
            >
              Harga
            </button>
            <button
              onClick={() => navigateToPage("company")}
              className="block w-full px-3 py-2 text-left transition-colors rounded-lg text-white/80 hover:text-nusuk-primary hover:bg-white/5"
            >
              Syarikat
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

Navigation.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  navigateToPage: PropTypes.func.isRequired
};