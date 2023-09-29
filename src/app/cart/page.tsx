import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import "./cart.modules.css";
import CartProduct from "./components/CartProduct";
import CartFooter from "./components/CartFooter";
import CartHeader from "./components/CartHeader";
import CartAddressForm from "./components/CartAddressForm";
import CartResume from "./components/CartResume";
import Button from "@/components/Button";

export default function Modal() {
  return (
    <div className="modal-full" id="modalCarrinho">
      <div className="m-body">
        <CartHeader />
        <div className="container">
          {/* <CartProduct /> */}
          {/* <CartAddressForm /> */}
          <CartResume />
        </div>
        <CartFooter />
      </div>
    </div>
  );
}
