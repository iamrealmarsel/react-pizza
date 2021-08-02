export const addPizzaToCart = (payload) => ({
  type: 'ADD_PIZZA_CART',
  payload,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCartPizza = (id) => ({
  type: 'REMOVE_CART_PIZZA',
  payload: id,
});

export const plusCartPizza = (id) => ({
  type: 'PLUS_CART_PIZZA',
  payload: id,
});

export const minusCartPizza = (id) => ({
  type: 'MINUS_CART_PIZZA',
  payload: id,
});
