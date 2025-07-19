import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload
            const existItem=state.cartItems.find(i=>i.id===item.id)
            if(existItem){
                
            }else{
                state.cartItems.push(item)
            }
        },
        removeFromCart:(state,action)=>{
            state.cartItems=state.cartItems.filter(i=>i.id!==action.payload)
        }
    }
})
export const {addToCart,removeFromCart}=cartSlice.actions
export default cartSlice.reducer
