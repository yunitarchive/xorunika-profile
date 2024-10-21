

// import React from 'react';

// interface TestimonialCardProps {
//   name: string;
//   userType: string; 
//   occupation: string;
//   description: string;
// }

// const CardTestimonial: React.FC<TestimonialCardProps> = ({ name, userType, occupation, description }) => {

//   const cardClasses = userType === 'organizational' 
//     ? "col-span-2 row-span-2 h-52 bg-gradient-to-b from-lightGreen to-lightTeal" 
//     : "h-52 bg-white"; 
  
//     const cardClassesDesc = userType === 'organizational' 
//     ? "mt-3 text-2xl" 
//     : "mt-2 text-md"; 
  
//   return (
//     <div className={`flex flex-col p-4 border rounded-lg shadow-md ${cardClasses}`}>
//       <h3 className="font-bold text-lg">{name}</h3>
//       <p className="text-md text-gray-600">{occupation}</p>
//       <p className= {cardClassesDesc}>{description}</p>
//     </div>
//   );
// };

// export default CardTestimonial;
import React from 'react';

interface TestimonialCardProps {
  name: string;
  userType: string; 
  occupation: string;
  description: string;
}

const CardTestimonial: React.FC<TestimonialCardProps> = ({ name, userType, occupation, description }) => {

  const cardClasses = userType === 'organizational'
    ? 'bg-gradient-to-b from-primary to-lightTeal text-white' 
    : ' bg-gradient-to-b from-lightGreen to-lightTeal  text-black'; 

  return (
    <div className={`flex flex-col p-4 border rounded-lg shadow-md ${cardClasses}`}>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-md">{occupation}</p>
      <p className="mt-2 text-md">{description}</p>
    </div>
  );
};

export default CardTestimonial;
