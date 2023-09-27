import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import "./modal.modules.css";
import CartUnits from "../cartUnits";
import CartProduct from "../cartProduct";
import CartFooter from "../cartFooter";

export default function Modal() {
  return (
    <div className="modal-full" id="modalCarrinho">
      <div className="m-header">
        <div className="container">
          {/* <a href="" className="btn btn-white btn-sm float-right">
            Fechar
          </a> */}
          <div className="etapas">
            <div className="etapa etapa1 active">1</div>
            <div className="etapa etapa1 ">2</div>
            <div className="etapa etapa1 ">3</div>
          </div>
          <p className="title-carrinho mt-4">
            <strong>Seu carrinho</strong>
          </p>
        </div>
      </div>

      <div className="m-body">
        <div className="container">
          <CartProduct />
          <CartProduct />
          <CartProduct />

          <CartProduct />
          <CartProduct />
          <CartProduct />

          <div id="localEntrega" className="row mr-0 ml-0"></div>

          <div id="resumoCarrinho" className="row mr-0 ml-0"></div>

          <CartFooter />
        </div>
      </div>
    </div>
  );
}
