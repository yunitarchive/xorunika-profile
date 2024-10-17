import React from 'react';
import Image from 'next/image';

interface CardProps {
  header: string;          
  imgSrc: string;         
  description: string;    
  label: string;          
}

const Card: React.FC<CardProps> = ({ header, imgSrc, description, label }) => {
  return (
    <div className="flex flex-row rounded-lg shadow-lg overflow-hidden bg-gray-100">
      {/* Image Section */}
      <div className="relative w-2/5">
        <Image 
          src={imgSrc} 
          alt={header} 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0"
        />
        {/* Overlay and Text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-2">
          <span className="text-white text-sm">{label}</span>   
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-3/5 p-4 bg-gray-100">
        <h2 className="text-xl font-medium mb-2 text-primary">{header}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        {/* Demo Request Button */}
        <button className="mt-auto w-2/5 bg-lightTeal text-white py-1 px-2 rounded ml-auto">
          Demo Request
        </button>
      </div>
    </div>
  );
};

export default Card;
