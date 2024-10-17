"use client";

import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  bgColor: string;
  menus?: Menu[];
}

interface Menu {
  name_menu: string;
  path_menu: string;
}

const katalogMenus: Menu[] = [
  { name_menu: "Home", path_menu: "/" },
  { name_menu: "About", path_menu: "/about" },
  { name_menu: "Services", path_menu: "/service" },
  { name_menu: "Team", path_menu: "/team" }
];

const Header: FC<HeaderProps> = ({ bgColor, menus = katalogMenus }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <nav className={`relative ${bgColor}`}>
      <div className="flex justify-between items-center h-16 p-4 lg:px-8">
    
        <div className="flex items-center">
          {/* <a href="/" className="ml-4 lg:ml-20">
          
            <div className="w-[75px] h-[50px] bg-gray-200 rounded" />
          </a> */}
        </div>

   
        <div className="hidden lg:flex lg:gap-x-10 mr-20">
          {menus.map((menu, index) => (
            <a
              key={index}
              href={menu.path_menu}
              className={`text-md ubuntu-reguler transition-colors duration-200
                ${pathname === menu.path_menu 
                  ? "text-lightTeal font-bold" 
                  : "text-lightGreen hover:font-bold"
                }`}
            >
              {menu.name_menu}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="lg:hidden mr-4 p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-lightGreen" />
          ) : (
            <Menu className="w-6 h-6 text-lightGreen" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex flex-col py-2">
            {menus.map((menu, index) => (
              <a
                key={index}
                href={menu.path_menu}
                className={`px-6 py-3 text-md transition-colors duration-200
                  ${pathname === menu.path_menu 
                    ? "text-blue-600 font-bold bg-gray-50" 
                    : "text-lightGreen hover:bg-gray-50"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {menu.name_menu}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;