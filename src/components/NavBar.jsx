import React from 'react'
import {useSelector} from 'react-redux'
import {FaShoppingCart} from 'react-icons/fa'
const NavBar = () => {
   const {amount} =useSelector((store)=>store.cart) ;
   
  return (
    <div className="flex justify-between items-center bg-slate-500 text-white p-4">
      <h1 className="capitalize font-semibold text-2xl text-white px-7">
        redux-toolkit
      </h1>

      <div className="relative inline-flex items-center mx-6 ">
        <FaShoppingCart className="w-8 h-8 text-black" />
        <p className="absolute top-0 right-0 inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs font-bold transform translate-x-2 -translate-y-2 ">
          {amount}
        </p>
      </div>
    </div>
  );
}

export default NavBar
