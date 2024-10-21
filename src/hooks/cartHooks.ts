import { useEffect, useState, useContext } from "react";
import { CartContext } from "../components/CartContextProvider";

// This hook is used to interact with the cart
export function useCart(productId: string | number) {
  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (cart) {
      setQuantity(cart.getProductQuantity(productId));
    }
  }, [cart, productId]);

  const updateQuantity = () => {
    if (cart) {
      setQuantity(cart.getProductQuantity(productId));
    }
  };

  const addToCart = () => {
    if (cart) {
      cart.addProductToCart(productId);
      updateQuantity();
    }
  };

  const removeFromCart = () => {
    if (cart) {
      cart.removeProductFromCart(productId);
      updateQuantity();
    }
  };

  const incrementQuantity = () => {
    if (cart) {
      cart.incrementProductQuantity(productId);
      updateQuantity();
    }
  };

  const decrementQuantity = () => {
    if (cart) {
      cart.decrementProductQuantity(productId);
      updateQuantity();
    }
  };

  return {
    quantity,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  };
}
