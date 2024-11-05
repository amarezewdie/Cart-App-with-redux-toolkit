import React from 'react'
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modelSlice';

const Model = () => {
  const dispatch =useDispatch();
  return (
    <div className="fixed  left-[35%] top-[40%] translate-x-[-50] translate-y-[-50%] bg-white text-black min-w-80 border-2">
      <h1 className="text-2xl font-semibold p-3 capitalize">
        Remove all the item from the shaping cart ?
      </h1>
      <div className="flex justify-between p-5 items-center">
        <button onClick={()=>{
          dispatch(clearCart())
          dispatch(closeModal())
          
        }} className="px-3 border-2 border-red-400" >confirm</button>
        <button onClick={()=>{
          dispatch(closeModal())
        }} className="border-2 border-indigo-950 px-3">cancel</button>
      </div>
    </div>
  );
}

export default Model
