
import React from 'react';
import { FC } from 'react'; 

interface TimelineEvent {
  year: string;
  description: string;
  main_event: string; 
  icon: React.ReactNode; 
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative border-l-2 border-gray-300 pl-10">
      {events.map((event, index) => (
        <div key={index} className="mb-8 flex items-start">
        
          <div className="w-6 h-6 text-primary mr-2">
            {event.icon} 
          </div>
          <div>
            <p className="text-sm font-bold text-primary">{event.year}</p>
            <p className="text-md font-semibold">{event.main_event}</p>
            <p className="text-md text-gray-700">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
