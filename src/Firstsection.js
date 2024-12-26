import React from 'react';
import pic1 from './pic/pic1.webp';

const Firstsection = () => {
  return (
    <div id="gl" className="flex flex-col lg:flex-row items-center justify-between bg-white px-4 md:px-12 lg:px-24 pt-36 pb-24">
      {/* Left Section */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#9F2042' }}>
          Ювелирная среда
        </h1>
        <p className="text-black text-sm md:text-base lg:text-lg py-4 mb-2">
          Комфортная среда для творчества, как для искушенных ценителей, так и абсолютных новичков.
        </p>
        <a href='' className="inline-block">
          <button className="text-white py-2 px-4 md:px-6 rounded-lg shadow hover:bg-gray-500 transition" style={{ backgroundColor: '#9F2042' }}>
            Подробнее
          </button>
        </a>
      </div>

      {/* Right Section */}
      <div className="mt-8 py-2 lg:mt-0 lg:w-1/2 flex justify-center">
        <div className="relative w-4/5 md:w-3/5 lg:w-3/4 max-w-lg">
          {/* Background Shapes */}
          <div
            className="absolute -inset-4 md:-inset-6 lg:-inset-8 bg-blue-100 rounded-full -z-10"
            style={{ filter: 'blur(50px)' }}
          ></div>

          {/* Illustration */}
          <img
            src={pic1}
            alt="pic1"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Firstsection;