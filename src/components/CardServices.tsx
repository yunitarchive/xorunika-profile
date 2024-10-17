import React from 'react';
import Image from 'next/image';
import tes from '../../public/banner_service.jpg';

const CardServices: React.FC = () => {
  return (
    <div className="relative flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-lg">
      {/* Left Side - Image */}
      <div className="lg:w-1/2 w-full relative">
        <Image
          src={tes}
          alt="Containers"
          layout="responsive"
          width={500}
          height={300}
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute bottom-6 left-6 bg-orange-600 text-white p-4 rounded-md flex items-center">
          <span className="mr-2 text-2xl">🚛</span> {/* Icon */}
          <p className="font-bold">Moving your products across borders</p>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="lg:w-1/2 w-full p-8">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-gray-500 mb-6">
          Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
        </p>

        {/* Bullet Points */}
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-orange-600 text-white p-2 rounded-full mr-4">
              📦
            </div>
            <div>
              <h3 className="font-bold">Safe Package</h3>
              <p className="text-gray-500">
                With a proven track record in port development, project cargo handling, and multimillion-dollar contracts, we bring unparalleled expertise to every shipment.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-orange-600 text-white p-2 rounded-full mr-4">
              ⚡
            </div>
            <div>
              <h3 className="font-bold">Reliability</h3>
              <p className="text-gray-500">
                Your cargo’s safety and timely delivery are our top priorities. Trust in our meticulous planning and execution.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-orange-600 text-white p-2 rounded-full mr-4">
              🌍
            </div>
            <div>
              <h3 className="font-bold">Global Reach</h3>
              <p className="text-gray-500">
                Our discreet and professional approach empowers your business to thrive in the competitive global shipping market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
