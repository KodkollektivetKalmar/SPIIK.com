"use client";

import { createContext, useState, useEffect } from "react";
import { ShoppingCart } from "@svz1234/shopping-cart";

// Global context for the shopping cart

interface CartContextType {
  cart: ShoppingCart | null;
}

export const CartContext = createContext<CartContextType>({
  cart: null,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  // The shopping cart is null until the component mounts and then the cart is created
  const [cart, setCart] = useState<ShoppingCart | null>(null);

  useEffect(() => {
    const newCart = new ShoppingCart();
    setCart(newCart);
  }, []);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}
