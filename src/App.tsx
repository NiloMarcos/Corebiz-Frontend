import { Home } from './pages/Home';

import { CartProvider } from "./context/CartContext";

import './global.css';

export function App() {
  return (
    <CartProvider>
      <Home /> 
    </CartProvider>
  );
}
