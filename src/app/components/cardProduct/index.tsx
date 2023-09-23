import React from "react";
import "./cardProduct.modules.css";
import { BsFillBagFill } from "react-icons/bs";

export default function CardProduct() {
  return (
    <div>
      <div className="card card-item">
        <div className="img-produto">
          <img src="/cardapio/burguers/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg" />
        </div>
        <p className="title-produto text-center">
          <>Nome do produto muito grandesssssssss</>
        </p>
        <p className="price-produto text-center">
          <strong>R$140,90</strong>
        </p>
        <div className="add-carrinho">
          <span className="btn-menos">-</span>
          <span className="add-numero-itens">0</span>
          <span className="btn-mais">+</span>
          <span className="btn-add">
            <BsFillBagFill className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
}
