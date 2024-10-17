
import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  title: string;
  description: string;
  image: string; 
}

const CardTeamMember: React.FC<TeamMemberCardProps> = ({ name, title, description, image }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
      <div className="relative w-24 h-24 mb-4">
        <Image 
          src={image} 
          alt={name} 
          layout="fill" 
          className="rounded-full object-cover" 
        />
      </div>
      <h3 className="font-bold">{name}</h3>
      <p className="text-md text-gray-500">{title}</p>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default CardTeamMember;
