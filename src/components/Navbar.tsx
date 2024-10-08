import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  title: string;
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ title, items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();

  return (
    <nav className={`bg-${theme.palette.background} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className={`text-xl font-semibold text-${theme.palette.text}`}>{title}</h1>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-${theme.palette.text} hover:border-${theme.palette.primary} hover:text-${theme.palette.primary} transition-colors duration-200`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md text-${theme.palette.text} hover:text-${theme.palette.primary} hover:bg-${theme.palette.action.hover} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${theme.palette.primary}`}
              style={{ borderRadius: `${theme.shape.borderRadius}px` }}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-${theme.palette.text} hover:bg-${theme.palette.action.hover} hover:border-${theme.palette.primary} hover:text-${theme.palette.primary} transition duration-150 ease-in-out`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
