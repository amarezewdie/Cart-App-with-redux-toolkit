import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Main from './components/main';
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './features/cart/cartSlice';
import Model from './components/Model';

const App = () => {

const {cartItems} =useSelector((store)=>store.cart);
const {isOpen}=useSelector((store)=>store.modal);
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(calculateTotal())
  },[cartItems])
  return (
    <div className="flex flex-col min-h-screen relative bg-gray-400 text-white">
      {isOpen && <Model />}

      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App
