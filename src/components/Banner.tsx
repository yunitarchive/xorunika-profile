
// import { FC } from "react";
// import Image from "next/image";

// interface BannerProps {
//   imgSrc: string;             
//   fromColor: string;
//   caption:string;          
//   toColor: string;             
//   opacityStart?: number;       
//   opacityEnd?: number;        
// }

// const Banner: FC<BannerProps> = ({
//   imgSrc,
//   fromColor,
//   toColor,
//   caption,
//   opacityStart = 0.5,        
//   opacityEnd = 0.7           
// }) => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
   
//       <Image 
//         src={imgSrc} 
//         alt="Banner Image" 
//         layout="fill" 
//         objectFit="cover" 
//         className="z-0"
//       />
      
//       <div
//         className="absolute inset-0 z-10"
//         style={{
//           backgroundImage: `linear-gradient(to bottom, rgba(${fromColor}, ${opacityStart}), rgba(${toColor}, ${opacityEnd}))`,
//         }}
//       ></div>
//       <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-20 text-white text-4xl">
//         {caption}
//       </div>
//     </div>
//   );
// };

// export default Banner;
import { FC } from "react";
import Image from "next/image";

interface BannerProps {
  imgSrc: string;
  fromColor: string;
  toColor: string;
  caption: string;
  tagline?: string; // Optional tagline prop
  opacityStart?: number;
  opacityEnd?: number;
}

const Banner: FC<BannerProps> = ({
  imgSrc,
  fromColor,
  toColor,
  caption,
  tagline,
  opacityStart = 0.5,
  opacityEnd = 0.7
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image 
        src={imgSrc}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      
      {/* Overlay Gradient */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(${fromColor}, ${opacityStart}), rgba(${toColor}, ${opacityEnd}))`,
        }}
      ></div>
      
      {/* Caption with CSS Typewriter Animation */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-20 text-white text-4xl">
        <span className="typewriter">{caption}</span>
      </div>

      {/* Tagline with CSS Typewriter Animation */}
      {tagline && (
        <div className="absolute left-10 top-3/4 transform -translate-y-1/2 z-20 text-white text-2xl mt-4">
          <span className="typewriter">{tagline}</span>
        </div>
      )}
    </div>
  );
};

export default Banner;
