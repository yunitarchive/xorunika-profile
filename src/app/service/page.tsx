
import Banner from '@/components/Banner';
import React from 'react';
import ServicePhoto from '../../../public/banner_service.jpg';
import Card from '@/components/Card';
import CardTestimonial from '@/components/CardTestimonial';
import { DUMMY_SERVICE } from '@/constants/listService';
import { DUMMY_TESTIMONILAS } from '@/constants/listTestimonials';

interface ServicePageProps {
  isPage?: boolean; 
}

const ServicePage: React.FC<ServicePageProps> = ({ isPage = true }) => { 
  return (
    <div>
     
      {isPage && (
        <section className="min-h-full">
          <Banner 
              imgSrc={ServicePhoto.src}
              fromColor="36, 54, 66"  
              toColor="56, 116, 120"   
              caption="Empowering Your Location for a Sustainable Future"
              opacityStart={0.96}   
              opacityEnd={0.70}  
          />
        </section>
      )}

      <section className="bg-lightGreen relative p-8">
        <h2 className="text-center text-2xl text-primary font-bold">Our Services</h2>
        <div className="my-12 mx-6 md:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {DUMMY_SERVICE.map((service, index) => (
            <Card 
              key={index}
              header={service.name}
              imgSrc={service.image.src}
              description={service.description}
              label={service.features[0]}
            />
          ))}
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-center text-2xl font-bold">What Our Clients Say</h2>
        
        <div className="my-12 mx-6 md:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_TESTIMONILAS.map((testimonial, index) => (
            <CardTestimonial
              key={index}
              name={testimonial.name}
              userType={testimonial.user_type}  
              occupation={testimonial.ocuppation}
              description={testimonial.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
