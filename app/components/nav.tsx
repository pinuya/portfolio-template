import { useState } from "react";
import { Link } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/#skills" },
  { name: "Projetos", href: "/#projects" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-neutral-950">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-gray-900 sm:hidden"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden space-x-6 sm:flex">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href}>
                  <span className="group relative cursor-pointer">
                    {item.name}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="https://github.com/pinuya"
            target="_blank"
            className={`cursor-pointer ${
              isMenuOpen ? "hidden sm:block" : "block"
            }`}
          >
            <FaGithub className="h-5 w-5 hover:text-purple-500" />
          </Link>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden">
            <ul className="space-y-3 pb-3 pt-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={toggleMenu}
                    className="block px-2 py-1 text-neutral-400 hover:text-gray-900"
                  >
                    <span className="group relative cursor-pointer">
                      {item.name}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
