import React, { useState } from 'react';
import { useCart } from './CartContext';
import image1 from './pic/r4.webp';
import image2 from './pic/r2.webp';
import image3 from './pic/r3.webp';

const Card = ({ product, onCardClick, onAddToCart }) => {
  return (
    <div className="w-1/3 p-4" onClick={() => onCardClick(product)}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-50 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">₽{product.price}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            style={{ backgroundColor: '#ff6047' }}
            className="text-white px-4 py-2 rounded-md"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white w-full max-w-lg p-8 rounded-lg overflow-hidden relative">
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-600">&times;</button>
        <div className="flex">
          <img src={product.image} alt={product.name} className="w-1/2 h-auto object-cover" />
          <div className="w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.ingredients}</p>
            <p className="text-red-500 mb-2">₽{product.price}</p>
            <button
              onClick={() => onAddToCart(product)}
              style={{ backgroundColor: '#ff6047' }}
              className="text-white px-4 py-2 rounded-md"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdSection = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Чиз угорь',
      price: 399,
      image: image1,
      ingredients: 'Лосось, авокадо, майонез, огурец и тобико, 6 шт.',
    },
    {
      id: 2,
      name: 'Яки хамачи',
      price: 299,
      image: image2,
      ingredients: 'Тунец, латук, огурец, мягкий сыр, 6 шт.',
    },
    {
      id: 3,
      name: 'Окинава ролл',
      price: 299,
      image: image3,
      ingredients: 'Креветка темпура, огурец, мягкий сыр, кунжут, 4 шт.',
    },
  ];

  const handleCardClick = (product) => {
    setModalProduct(product);
  };

  const handleCloseModal = () => {
    setModalProduct(null);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <Card key={product.id} product={product} onCardClick={handleCardClick} onAddToCart={addToCart} />
        ))}
      </div>
      {modalProduct && (
        <Modal product={modalProduct} onClose={handleCloseModal} onAddToCart={addToCart} />
      )}
      <div
        style={{ borderColor: '#ff6047', borderWidth: '2px', backgroundColor: 'transparent' }}
        className="inline-block text-black text-xl px-4 py-1 rounded-md mt-10"
      >
        Перейти в каталог ⟶
      </div>
    </div>
  );
};

export default ThirdSection;
