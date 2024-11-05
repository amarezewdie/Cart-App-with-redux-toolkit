import React from 'react'
import { FaChevronDown,FaChevronUp } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../features/cart/cartSlice';

const CartItem = ({img,price,title,id,amount}) => {
  const dispatch=useDispatch();
 
  return (
    <div className="flex  justify-between items-center gap-12 max-w-screen-lg  mx-auto flex-1 my-12">
      <img src={img} alt="" className="max-w-64" />
      <div className="gap-4 flex flex-col items-start text-3xl justify-between capitalize">
        <h1>{title}</h1>
        <h1> {price}</h1>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="text-red-400"
        >
          Remove
        </button>
      </div>
      <div className="flex gap-10 items-center  flex-col ">
        <button onClick={()=>dispatch(increase({id}))}>
          <FaChevronUp />
        </button>
        <p>{amount}</p>
        <button onClick={()=>{
          if(amount <= 1){
            dispatch(removeItem(id))
          }else{
            dispatch(decrease(id))
          }
        }}>
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
}

export default CartItem
