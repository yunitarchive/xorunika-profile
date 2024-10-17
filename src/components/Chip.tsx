
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
    <div className="flex items-center p-2 border rounded-lg shadow-md bg-white">
      <div className="relative w-16 h-16 mr-4">
        <Image 
          src={imgSrc} 
          alt={name} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-full border-2 border-gray-100" 
        />
      </div>

       <div className="flex-1 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-gray-500">{role}</span>
        </div>
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-4 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
        >
          <Linkedin size={16} className="text-lightTeal" /> 
          <span className="text-xs font-medium text-lightTeal">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Chip;
