import React from "react";
import "./cartResum.modules.css";

export default function CartResume() {
  return (
    <div id="resumoCarrinho" className="row mr-0 ml-0">
      <div className="col-12">
        <p className="title-carrinho mt-4">
          <strong>Itens do pedido:</strong>
        </p>
      </div>
    </div>
  );
}
