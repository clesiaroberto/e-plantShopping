import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
    ], // Initialize items as an empty array
    cartItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; // product info passed in

    state.items.push({
    name: newItem.name,
    cost: newItem.cost,
    image: newItem.image,
    quantity: 1
  });
  },
    removeItem: (state, action) => {
      const index = state.items.findIndex(i => i.name === action.payload.name)
      
    
      if(index !== -1){
        const itemQuantity = state.items[index].quantity;
        state.cartItems -= itemQuantity;
        state.items.splice(index, 1);
        
      }

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
      if (cartItem) {
      cartItem.quantity -= 1;
      state.cartItems -=1;
      }

    },
    cartItemsIncrement:(state, action) => { //change the quantity in the cartItem

       state.cartItems +=1

    }
  },
});

export const { addItem, removeItem, updateQuantity, decrementQuantity, cartItemsIncrement} = CartSlice.actions;

export default CartSlice.reducer;
