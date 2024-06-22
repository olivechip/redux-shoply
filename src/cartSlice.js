import { createSlice } from '@reduxjs/toolkit';

const initialState = { cart: [], totalPrice: '0.00' };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state, action) => {
            const { id, price } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.cart.push({ id, price, qty: 1 });
            }
            state.totalPrice = (parseFloat(state.totalPrice) + price).toFixed(2);
        },
        removeFromCart:(state, action) => {
            const { id, price } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);

            if (existingItem){
                if (existingItem.qty > 0){
                    existingItem.qty--;
                } else if (existingItem.qty === 0){
                    state.cart = state.cart.filter(item => item.id !== id);
                }
                state.totalPrice = (existingItem.qty * price).toFixed(2);
            }
        },
        clearCart:() => {
            return initialState;
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
