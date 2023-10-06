import React from "react";
import "./CartUnits.modules.css";
import { BsFillBagFill } from "react-icons/bs";

export default function UnitsButtons() {
  return (
    <div className="add-carrinho">
      <span className="btn-menos">-</span>
      <span className="add-numero-itens">0</span>
      <span className="btn-mais">+</span>
      <span className="btn-add no-mobile">
        <BsFillBagFill className="icon" />
      </span>
    </div>
  );
}
