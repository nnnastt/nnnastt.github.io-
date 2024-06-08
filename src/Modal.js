import React, { useState } from 'react';
import { useCart } from './CartContext';

const Modal = ({ isOpen, onClose }) => {
  const { cartItems, setCartItems } = useCart(); // Используйте данные корзины из контекста
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCart, setShowCart] = useState(true);
  const [phone, setPhone] = useState('+7');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleIncrease = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const handleDecrease = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    } else {
      // Если количество товара равно 1, удаляем товар из корзины
      const filteredCartItems = updatedCartItems.filter((_, i) => i !== index);
      setCartItems(filteredCartItems);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
    setShowCart(false);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
    setShowCart(true);
  };

  const handleInputChange = (setter) => (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setter(value);
      setError('');
    } else {
      setError('Пожалуйста, введите только цифры');
    }
  };

  const handlePhoneChange = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы

    // Если пользователь начинает вводить номер, добавляем +7
    if (value.startsWith('7') || value.startsWith('8')) {
      value = value.substring(1);
    }

    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    let formattedPhone = '+7';
    if (value.length > 0) {
      formattedPhone += `(${value.substring(0, 3)}`;
    }
    if (value.length >= 4) {
      formattedPhone += `) ${value.substring(3, 5)}`;
    }
    if (value.length >= 6) {
      formattedPhone += ` ${value.substring(5, 7)}`;
    }
    if (value.length >= 8) {
      formattedPhone += ` ${value.substring(7, 9)}`;
    }
    if (value.length >= 10) {
      formattedPhone += ` ${value.substring(9, 10)}`;
    }

    setPhone(formattedPhone);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    setShowSuccessModal(true);
    setCartItems([]); // Очистить корзину после успешной оплаты
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full h-4/5 max-w-md mx-auto p-4 relative h-full overflow-auto">
        <button onClick={onClose} className="absolute top-8 right-2 text-gray-700">
          X
        </button>
        {showCheckout ? (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Оплата</h2>
            <form onSubmit={handlePayment}>
              <div className="mb-4">
                <label className="block text-gray-700 m-3">Номер телефона</label>
                <input
                  type="text"
                  className="w-full p-2 border"
                  placeholder="+7(999) 999 99 99"
                  value={phone}
                   onChange={handlePhoneChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 m-3">Адрес доставки</label>
                <input
                  type="text"
                  className="w-full p-2 border"
                  placeholder="Г. Г, ул. М, д.1, кв. 2"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 m-3">Данные карты для оплаты</label>
                <input
                  type="text"
                  className="w-full p-2 border"
                  placeholder="Номер карты"
                  value={cardNumber}
                  onChange={handleInputChange(setCardNumber)}
                />
                <input
                  type="text"
                  className="w-full p-2 border mt-2"
                  placeholder="Срок действия"
                  value={expiryDate}
                  onChange={handleInputChange(setExpiryDate)}
                />
                <input
                  type="text"
                  className="w-full p-2 border mt-2"
                  placeholder="CVC"
                  value={cvc}
                  onChange={handleInputChange(setCvc)}
                />
              </div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              <button type="submit" className="w-full bg-orange-500 text-white p-2">Оплатить сейчас</button>
              <button onClick={handleBackToCart} className="w-full bg-gray-500 text-white p-2 mt-2">Назад к корзине</button>
            </form>
          </div>
        ) : (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Корзина</h2>
            {cartItems.map((item, index) => (
              <div key={index} className="mb-4 flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div className="flex-grow">
                  <div className="flex justify-between ">
                    <span>{item.name}</span>
                    <span className="absolute left-80 text-red-500">₽{item.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between w-1/3 mt-2">
                    <button onClick={() => handleDecrease(index)} className="bg-gray-200 p-1">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(index)} className="bg-gray-200 p-1">+</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <h3 className="text-lg font-bold">Общая стоимость: ₽{calculateTotal()}</h3>
            </div>
            <button onClick={handleCheckout} className="w-full bg-orange-500 text-white p-2 mt-4">Перейти к оплате</button>
          </div>
        )}
      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md mx-auto p-4 text-center">
            <h2 className="text-lg font-bold mb-4">Успех!</h2>
            <p>Товар успешно оплачен. Подробная информация отправлена на ваш номер телефона.</p>
            <button onClick={handleCloseSuccessModal} className="w-full bg-orange-500 text-white p-2 mt-4">Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
