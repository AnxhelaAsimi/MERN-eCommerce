
export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

export const updateCart = (state) => {
      //calculating item price
      state.itemPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

      //shipping , over 100 free shipping else 10
      state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);

      //tax
      state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2)));

      //total
      state.totalPrice = (Number(state.itemPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));

      return state;
}