
'use client';
import React, { useEffect, useState } from 'react';
import Chip from '@/components/Chip';

interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string; 
  location: {
    city: string;
    country: string;
  };
}

const Team: React.FC = () => {
  const [operationsTeam, setOperationsTeam] = useState<RandomUser[]>([]);
  const [salesTeam, setSalesTeam] = useState<RandomUser[]>([]);
  const [techTeam, setTechTeam] = useState<RandomUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/?results=16'); 
      const data = await response.json();
      const users = data.results as RandomUser[];

      setOperationsTeam(users.slice(0, 8));  
      setSalesTeam(users.slice(8, 12));      
      setTechTeam(users.slice(12, 16));      
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen mx-auto p-8 bg-lightGreen">
      <h1 className="text-4xl text-center font-bold mb-6">Meet Our XorunikAlliance</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Operations</h2>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {operationsTeam.map((member, index) => (
            <Chip
              key={index}
              name={`${member.name.first} ${member.name.last}`}
              role="Operations" 
              imgSrc={member.picture.large}
              linkedinUrl={`mailto:${member.email}`} 
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Sales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {salesTeam.map((member, index) => (
            <Chip
              key={index}
              name={`${member.name.first} ${member.name.last}`}
              role="Sales"
              imgSrc={member.picture.large}
              linkedinUrl={`mailto:${member.email}`} 
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Tech</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techTeam.map((member, index) => (
            <Chip
              key={index}
              name={`${member.name.first} ${member.name.last}`}
              role="Tech"
              imgSrc={member.picture.large}
              linkedinUrl={`mailto:${member.email}`} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;

