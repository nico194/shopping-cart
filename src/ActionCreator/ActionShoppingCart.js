const removeFromCart = product => {
  return {
      type: "REMOVE_FROM_CART",
      product
  }
};

export { removeFromCart }
