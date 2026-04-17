import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
    ], // Initialize items as an empty array
    cartItems: 0,
    totalCost:0
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; // product info passed in

      const strPrice = newItem.cost;


    state.items.push({
    name: newItem.name,
    cost: newItem.cost,
    image: newItem.image,
    quantity: 1,
    totalPrice: parseInt(strPrice.replace("$", ""), 10)
  });

      state. totalCost =  state.items.reduce((sum, item) => {
      return sum + (item.totalPrice || 0);
      }, 0);
       console.log(state.totalCost)
  },
    removeItem: (state, action) => {
      const index = state.items.findIndex(i => i.name === action.payload.name)
      
    
      if(index !== -1){
        const itemQuantity = state.items[index].quantity;
        state.cartItems -= itemQuantity;
        state.items.splice(index, 1);
      }
        state. totalCost =  state.items.reduce((sum, item) => {
      return sum + (item.totalPrice || 0);
      }, 0);

       console.log(state.totalCost)

    },

    updateQuantity: (state, action) => {
      const { name } = action.payload;
      const cartItem = state.items.find(i => i.name === name);
      if (cartItem) {
      cartItem.quantity += 1;
      state.cartItems +=1;
      
      }
      
    },
    decrementQuantity: (state, action) =>{
      const { name } = action.payload;
      const cartItem = state.items.find(i => i.name === name);
      const price = parseInt(cartItem.cost.replace("$", ""), 10);
      if (cartItem && cartItem.quantity >= 1) {
      cartItem.quantity -= 1;
      state.cartItems -=1;
      cartItem.totalPrice = cartItem.totalPrice - price;
      }
       state. totalCost =  state.items.reduce((sum, item) => {
      return sum + (item.totalPrice || 0);
      }, 0);

       console.log(state.totalCost)

    },
    updateTotalPrice:(state, action) =>{

      const { name } = action.payload;
      const cartItem = state.items.find(i => i.name === name);
      const price = parseInt(cartItem.cost.replace("$", ""), 10);

      if (cartItem && cartItem.quantity >= 1) {
      cartItem.totalPrice = cartItem.quantity * price;
      }
      state. totalCost =  state.items.reduce((sum, item) => {
      return sum + (item.totalPrice || 0);
      }, 0);

       console.log(state.totalCost)


    },

    cartItemsIncrement:(state, action) => { //change the quantity in the cartItem

       state.cartItems +=1

    }
  },
});

export const { addItem, removeItem, updateQuantity, decrementQuantity, cartItemsIncrement, updateTotalPrice, updateTotalAmount} = CartSlice.actions;

export default CartSlice.reducer;
