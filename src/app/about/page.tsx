'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Timeline from '../../components/Timeline';
//import CardTeamMember from '../../components/CardTeamMember';
import Chip from '../../components/Chip';
import ServicePhoto from '../../../public/banner_service.jpg'
import { User, Calendar, CheckCircle, Star } from 'lucide-react';
import Avatar1 from '../../../public/avatar1.jpg';
import Avatar2 from '../../../public/avatar2.jpg';
interface AnimatedWordsProps {
  words: string[];
  interval?: number;
  className?: string;
}


const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      image: Avatar1, 
      linkedinUrl: "https://www.linkedin.com/in/john-doe"
    },
    {
      name: "Alice Smith",
      role: "CTO",
      image: Avatar2,
      linkedinUrl: "https://www.linkedin.com/in/alice-smith"
    },
    
  ];
const AnimatedWords: React.FC<AnimatedWordsProps> = ({ 
  words = ['Robust', 'Unity', 'Nurture'],
  interval = 3000,
  className = ''
}) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
  
    const fadeTimeout = setInterval(() => {
      setFadeState('fade-out');
      
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setFadeState('fade-in');
      }, 500); 
      
    }, interval);

    return () => {
      clearInterval(fadeTimeout);
    };
  }, [words, interval]);

  return (
    <div className="h-16 relative flex items-center justify-center">
      <div
        className={`transition-all duration-500 absolute
          ${fadeState === 'fade-in' ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
          ${className}`}
      >
        {words[currentWord]}
      </div>
    </div>
  );
};

const events = [
  {
    year: '2020',
    main_event: 'Foundation of Xorunika',
    description: 'Xorunika was founded with a vision to promote renewable energy solutions.',
    icon: <User />,
  },
  {
    year: '2021',
    main_event: 'Launch of XorunInsight',
    description: 'Launched our first product, XorunInsight, to assess solar energy potential.',
    icon: <Calendar />,
  },
  {
    year: '2022',
    main_event: 'Expansion of Services',
    description: 'Expanded our services to include XorunikaFlex, offering flexible solar device rentals.',
    icon: <CheckCircle />,
  },
  {
    year: '2023',
    main_event: 'Customer Milestone',
    description: 'Reached hundreds of satisfied customers, demonstrating our commitment to sustainability.',
    icon: <Star />,
  },
];



const AboutPage = () => {
  const rotatingWords = ['We cultivate robust technology adaptability to enviromental change ', 'We believe in the power of our communities and team collaboration ', 'We are committed to nurturing innovation and professional growth'];
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="relative md:w-1/2 min-h-full overflow-hidden">
        <Image 
          src={ServicePhoto}
          alt="Culture Background" 
          fill
          className="object-cover opacity-90" 
        />
        <div className="absolute inset-0 flex flex-col items-right justify-center bg-gradient-to-b from-primary to-lightTeal z-10 opacity-80">
          <h1 className="text-white mx-4 text-6xl font-normal mb-4 typewriter">
            Xorunnika Alliance
          </h1>
          <AnimatedWords 
            words={rotatingWords}
            interval={2000}
            className="text-white  items-right text-2xl font-light"
          />
        </div>
      </div>
      
      <div className="md:w-1/2 p-2  bg-lightGreen">
        <section className="mx-8">
          <h2 className="text-3xl font-semibold py-2">Company History</h2>
          <Timeline events={events} />
        </section>

        <section className="mx-8">
        <h2 className="text-3xl font-semibold">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {teamMembers.map((member, index) => (
            <Chip
              key={index}
              name={member.name}
              role={member.role}
              imgSrc={member.image.src}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutPage;