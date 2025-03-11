import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
      <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/home" className="font-mono text-xl font-bold text-white">
              Fav<span className="text-blue-500">.tech</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <div
                className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                  to="/home"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
              >
                <b>Home</b>
              </Link>
              <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
              >
                <b>About</b>
              </Link>
              <Link
                  to="/projects"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
              >
                <b>Projects</b>
              </Link>
              <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
              >
                <b>Contact</b>
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
};
