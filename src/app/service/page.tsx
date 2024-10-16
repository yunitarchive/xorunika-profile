
import Banner from '../../components/Banner';
import React from 'react';
import ServicePhoto from '../../../public/banner_service.jpg'

const ServicePage = () => {
  return (
    <div>
   <Banner 
        imgSrc={ServicePhoto.src}
        fromColor="36, 54, 66"  
        toColor="56, 116, 120"   
        caption="Unlock Solar Savings: Empower Your Location for a Sustainable Future"
        opacityStart={0.98}   
        opacityEnd={0.78}  
      />

    
    </div>
  );
};

export default ServicePage;
