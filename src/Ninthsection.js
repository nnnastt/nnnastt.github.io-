import React, { useState } from "react";
import image1 from "./pic/d1.webp";
import image2 from "./pic/d1.webp";

const GalleryItem = ({ image, title, subtitle }) => {
  return (
    <div className="flex items-center justify-center h-full bg-white">
      <div className="flex items-center">
        <div className="max-w-md  p-4">
          <img src={image} alt={title} className="rounded-lg shadow-lg mb-4 w-1/2 lg:w-full" />
        </div>
      </div>
      <div className="flex items-center ml-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button onClick={prevItem} className="text-gray-700 hover:text-gray-900 px-4 py-2 absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl">
          &larr;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button onClick={nextItem} className="text-gray-700 hover:text-gray-900 px-4 py-2 absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl">
          &rarr;
        </button>
      </div>
      <GalleryItem image={items[currentIndex].image} title={items[currentIndex].title} subtitle={items[currentIndex].subtitle} />
    </div>
  );
};

const NinthSection = () => {
    
  const items = [
    {
      image: image1,
      title: "Скидка 10 % при заказе от 3000 рублей!",
      subtitle: "Скидка распространяется на все меню и действует с 9.00 до 20.00 каждый день."
    },
    {
      image: image2,
      title: "Роллы Филадельфия в подарок!",
      subtitle: "В честь вашего дня рождения, в течении 10 дней,  можно получить роллы в подарок"
    },
    
  ];

  return (
    <div className=" bg-white flex justify-center items-center">
      <Gallery items={items} />
    </div>
  );
};

export default NinthSection;