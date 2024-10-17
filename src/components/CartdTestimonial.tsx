import React from 'react';

// Define an interface for the testimonials
interface Testimonial {
  text: string;
  color: string;
}

const testimonials: Testimonial[] = [
  { text: 'Great service!', color: 'bg-blue-500' },
  { text: 'Awesome quality!', color: 'bg-yellow-500' },
  { text: 'Highly recommend.', color: 'bg-green-500' },
  { text: 'Very satisfied.', color: 'bg-red-500' },
  { text: 'Fantastic experience!', color: 'bg-purple-500' },
  { text: 'Will use again.', color: 'bg-pink-500' },
];

const CardTestimonial: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
      <div className="col-span-2 sm:col-span-1">
        <div className={`h-full p-6 ${testimonials[0].color} flex items-center justify-center text-white`}>
          <p className="text-center text-lg font-bold">{testimonials[0].text}</p>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-2">
        <div className={`h-full p-6 ${testimonials[1].color} flex items-center justify-center text-white`}>
          <p className="text-center text-lg font-bold">{testimonials[1].text}</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className={`h-full p-6 ${testimonials[2].color} flex items-center justify-center text-white`}>
          <p className="text-center text-lg font-bold">{testimonials[2].text}</p>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-1">
        <div className={`h-full p-6 ${testimonials[3].color} flex items-center justify-center text-white`}>
          <p className="text-center text-lg font-bold">{testimonials[3].text}</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className={`h-full p-6 ${testimonials[4].color} flex items-center justify-center text-white`}>
          <p className="text-center text-lg font-bold">{testimonials[4].text}</p>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-2">
        <div className={`h-full p-6 ${testimonials[5].color} flex items-center justify-center text-white`}>
          <p className="text-center text-lg font-bold">{testimonials[5].text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;
