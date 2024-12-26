import './App.css';
import './index.css';
import React from 'react';
import Header from './Header';
import Firstsection from './Firstsection';
import Secondsection from './Secondsection';
import Thirdsection from './Thirdsection';
import Fourthsection from './Fourthsection';
import Fifthsection from './Fifthsection';
import Sixthsection from './Sixthsection';

import Footer from './Footer';

import { CartProvider } from './CartContext';


function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Firstsection />
        <Secondsection />
        <Thirdsection />
        <Fourthsection />
        <Fifthsection />
        <Sixthsection />
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
