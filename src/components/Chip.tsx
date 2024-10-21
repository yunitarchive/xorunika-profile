
import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

interface ChipProps {
  name: string;
  role: string;
  imgSrc: string; 
  linkedinUrl: string; 
}

const Chip: React.FC<ChipProps> = ({ name, role, imgSrc, linkedinUrl }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-4 border rounded-lg shadow-md bg-white w-full max-w-xs sm:max-w-full mx-auto">
   
      <div className="relative w-20 h-20 sm:w-16 sm:h-16 mb-4 sm:mb-0 sm:mr-4">
        <Image 
          src={imgSrc} 
          alt={name} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-full border-2 border-gray-100" 
        />
      </div>

    
      <div className="flex-1 flex justify-between items-center w-full">
        <div className="flex flex-col text-center sm:text-left">
          <span className="font-semibold text-base sm:text-lg">{name}</span>
          <span className="text-sm text-gray-500">{role}</span>
        </div>

     
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-0 sm:ml-4 mt-4 sm:mt-0 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
        >
          <Linkedin size={16} className="text-lightTeal" /> 
          <span className="text-xs font-medium text-lightTeal">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Chip;
