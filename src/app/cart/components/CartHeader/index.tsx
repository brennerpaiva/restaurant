import React from "react";
import "./cartHeader.modules.css";

export default function CartHeader() {
  return (
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
  );
}
