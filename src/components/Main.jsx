import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Main = () => {
  const { cartItems, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <div className=" flex flex-col items-center">
        <h1 className="font-bold capitalize text-4xl py-3">Your bag</h1>
        <p className="text-lg">is currently empty</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col ">
      <h1 className="font-bold capitalize text-4xl py-3 text-center">your bag</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Main;
