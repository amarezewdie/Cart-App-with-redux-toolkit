import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModel } from "../features/modal/modelSlice";

function Footer() {
  const dispatch = useDispatch();
  const { total } = useSelector((store) => store.cart);
  return (
    <div className="mx-auto capitalize w-full text-center absolute bottom-0">
      <hr className="w-full bg-gray-700 h-[2px]" />
      <div className="flex justify-between items-center px-7 py-3">
        <span>total</span>
        <button
          onClick={() => dispatch(openModel())}
          className="border-red-500 p-2  rounded-lg capitalize text-2xl  border"
        >
          clear cart
        </button>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Footer;
