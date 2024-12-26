import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import q from './pic/q.webp';
import w from './pic/w.webp';
import e from './pic/e.webp';

const Fifthsection = () => {
  return (
    <div id='reaction' className="max-w-5xl mx-auto px-4 py-8 relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true} // Включаем стандартную навигацию Swiper
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}" style="background-color: #9F2042;"></span>`,
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="flex items-center justify-center"
      >
        {/* Первый слайд */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Отзывы о наших работах</h3>
            <img
              src={e}
              alt="e"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-medium">Ирина С.</h4>
            <p className="text-sm text-gray-500 mb-4">
              Как приятно было получить этот товар. Конверт с сертификатом и камнем упакован в пакет. Доставлен без повреждений, заломов.
            </p>
          </div>
        </SwiperSlide>

        {/* Второй слайд */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Отзывы о наших работах</h3>
            <img
              src={q}
              alt="q"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-medium">Морозова Е.А.</h4>
            <p className="text-sm text-gray-500 mb-4">
              Продавец всегда подробно рассказывает об особенностях каждого камня по телефону, высылает дополнительные фото и видео.
            </p>
          </div>
        </SwiperSlide>

        {/* Третий слайд */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Отзывы о наших работах</h3>
            <img
              src={w}
              alt="w"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-lg font-medium">Дима</h4>
            <p className="text-sm text-gray-500 mb-4">
              Сайту доверяю, заказываю здесь на все праздники подарки жене и друзьям советую. Всегда что-то новенькое предлагают.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Кастомные стили для стрелок */}
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #9F2042; /* Цвет стрелок */
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 20px; /* Размер стрелок */
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Fifthsection;
