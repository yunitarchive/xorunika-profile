"use-client";

import { FC, useState } from "react";
// import Image from "next/image"; 


// Declare specific type of props that must be passed
interface HeaderProps {
  // Set background color for the navbar
  bgColor: string;
  // Set storing menu/navbar that will appear, defaulted from 'katalogMenus' if not provided
  menus?: Menu[];
}

// Declare specify of the interface for object type menu array
interface Menu {
  name_menu: string;
  path_menu: string;
}

const katalogMenus: Menu[] = [
  { name_menu: "About", path_menu: "/about" }, 
  { name_menu: "Services", path_menu: "/service" },
  { name_menu: "Team", path_menu: "/team" }
];

// Header Component
const Header: FC<HeaderProps> = ({ bgColor, menus = katalogMenus }) => {
  // State for mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Toggle function for mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <nav className={`flex justify-between items-center h-16 p-4 lg:px-8 ${bgColor}`}>
  
      <div className="flex items-center">
        <a href="/" className="ml-20">
       
          {/* <Image 
            src=
            alt="Logo" 
            width={75} 
            height={50} 
         
          /> */}
        </a>
      </div>

    
      <div className="hidden lg:flex lg:gap-x-10 mr-20">
        {menus.map((menu, index) => (
          <a
            key={index}
            href={menu.path_menu}
            className="text-md ubuntu-reguler text-lightGreen hover:font-bold"
          >
            {menu.name_menu}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="bg-lightGreen text-white px-4 py-2 rounded">
          Menu
        </button>
      </div>

      {/* Mobile Menu Display */}
      <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} mt-2`}>
        <div className="flex flex-col bg-white shadow-lg rounded">
          {menus.map((menu, index) => (
            <a
              key={index}
              href={menu.path_menu}
              className="text-md text-lightGreen hover:font-bold py-2 px-4"
            >
              {menu.name_menu}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
