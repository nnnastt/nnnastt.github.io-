import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThirdSection from './Thirdsection';
import { CartProvider } from './CartContext';

test('отображаем товары и добавляем их в корзину', () => {
    render(
      <CartProvider>
        <ThirdSection />
      </CartProvider>
    );

  // Проверка отображения товара
  const productName = screen.getByText('Чиз угорь');
  expect(productName).toBeInTheDocument();

  // Проверка добавления товара в корзину
  const addToCartButton = screen.getAllByText('Добавить в корзину')[0];
  fireEvent.click(addToCartButton);

  // Открытие корзины и проверка количества товаров
  const cartButton = screen.getByText('Перейти к оплате');
  fireEvent.click(cartButton);
  
  const cartItemCount = screen.getByText('Общая стоимость: ₽399.00');
  expect(cartItemCount).toBeInTheDocument();
});
