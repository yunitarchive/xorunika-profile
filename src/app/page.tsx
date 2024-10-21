
import React from 'react';
//import Map from '../components/Map';
import Banner from '../components/Banner';
import ServicePage from './service/page';
import ServicePhoto from '../../public/banner_service.jpg'
const HomePage = () => {
  return (
    <div>
      <section className="bg-primary relative min-h-screen">
        <Banner 
          imgSrc={ServicePhoto.src}
          fromColor="36, 54, 66"  
          toColor="56, 116, 120"   
          caption="Unlock Solar Savings ?  Start with Xorunika"
          opacityStart={0.96}   
          opacityEnd={0.70}  
        />
    
      </section>
      <section className="relative min-h-screen">
        <ServicePage isPage={false}/>
        </section>
    </div>
  );
};

export default HomePage;
