
import { FC } from "react";
import Image from "next/image";

interface BannerProps {
  imgSrc: string;             
  fromColor: string;
  caption:string;          
  toColor: string;             
  opacityStart?: number;       
  opacityEnd?: number;        
}

const Banner: FC<BannerProps> = ({
  imgSrc,
  fromColor,
  toColor,
  caption,
  opacityStart = 0.5,        
  opacityEnd = 0.7           
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
   
      <Image 
        src={imgSrc} 
        alt="Banner Image" 
        layout="fill" 
        objectFit="cover" 
        className="z-0"
      />
      
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(${fromColor}, ${opacityStart}), rgba(${toColor}, ${opacityEnd}))`,
        }}
      ></div>
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl">
        {caption}
      </div>
    </div>
  );
};

export default Banner;
