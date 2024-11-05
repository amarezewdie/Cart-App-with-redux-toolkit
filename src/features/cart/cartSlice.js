import {createSlice} from '@reduxjs/toolkit';
import data from '../../app/data';

const initialState={
    cartItems:data,
    amount:4,
    total:0,
    isLoading:true
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
       clearCart:(state)=>{
        state.cartItems=[]
       },
       removeItem:(state,action)=>{
        state.cartItems=state.cartItems.filter(item =>item.id!==action.payload);
       },
       increase:(state,action)=>{
         const cartItem=state.cartItems.find(item=>item.id===action.payload.id);
         cartItem.amount=cartItem.amount+1;
       },
       decrease:(state,action)=>{
        const cartItem=state.cartItems.find(item=>item.id===action.payload)
        cartItem.amount=cartItem.amount-1;

       },
       calculateTotal:(state)=>{
         let amount=0;
         let total=0;
         state.cartItems.forEach((item)=>{
             amount+=item.amount;
             total+=item.amount*item.price;
         })
         state.amount=amount;
         state.total=total;
       }
    },
    
})

export default cartSlice.reducer;
export const {clearCart,removeItem,increase,decrease,calculateTotal} =cartSlice.actions;