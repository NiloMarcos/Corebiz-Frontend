import React, { createContext, useContext, useEffect, useState } from "react";

interface CartContextProps {
  cartCount: number;
  incrementCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState<number>(() => {
    const storedCartCount = localStorage.getItem("cartCount");
    return storedCartCount ? Number(storedCartCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cartCount", String(cartCount));
  }, [cartCount]);

  const incrementCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, incrementCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
