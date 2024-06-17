import React from 'react';
import { render, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';

const TestComponent = () => {
  const { cartItems, addToCart } = useCart();
  
  return (
    <div>
      <button onClick={() => addToCart({ id: 1, name: 'Чиз угорь', price: 399 })}>
       Добавить в корзину
      </button>
      <div data-testid="cart-count">{cartItems.length}</div>
    </div>
  );
};

test('добавить товар в корзину', () => {
  const { getByText, getByTestId } = render(
    <CartProvider>
      <TestComponent />
    </CartProvider>
  );

  act(() => {
    getByText('Добавить в корзину').click();
  });

  expect(getByTestId('cart-count').textContent).toBe('1');
});
