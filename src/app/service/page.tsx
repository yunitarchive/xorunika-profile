
import Banner from '../../components/Banner';
import React from 'react';
import ServicePhoto from '../../../public/banner_service.jpg'
//import CardServices from '@/components/CardServices';
import Card from'@/components/Card';
import { DUMMY_SERVICE } from '../../constants/listService';
//import CardTestimonial from '@/components/CartdTestimonial';
import Footer from '@/components/Footer';

const ServicePage = () => {
  return (
    <div>
      <section className="min-h-full">
        <Banner 
            imgSrc={ServicePhoto.src}
            fromColor="36, 54, 66"  
            toColor="56, 116, 120"   
            caption="Unlock Solar Savings by Empowering Your Location for a Sustainable Future"
            opacityStart={0.96}   
            opacityEnd={0.70}  
          />
      </section> 
      <section className="bg-lightGreen relative p-8">
      <h2 className="text-center text-2xl text-primary font-bold">Our Services</h2>
        <div className="my-12 mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
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
       {/* <CardServices/> */}
      </section>
      <section className="bg-primary relative">
      <Footer />
      </section>


    
    </div>
  );
};

export default ServicePage;
