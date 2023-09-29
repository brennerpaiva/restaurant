import React from "react";
import "./cartResumeProduct.modules.css";

export default function CartResumeProduct() {
  return (
    <div className="col-12">
      <div id="listaItensResumo" className="row mr-0 ml-0">
        <div className="col-12 itens-carrinho resumo">
          <div className="img-produto-resumo">
            <img
              src="/cardapio/burguers/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg"
              alt="produto"
            />
          </div>
          <div className="dados-produto">
            <p className="title-produto-resumo">
              <strong>Nome do produto</strong>
            </p>
            <p className="prince-produto-resumo">
              <strong>R$ 149,99</strong>
            </p>
          </div>
          <p className="quantidade-produto-resumo">
            x<b>3</b>
          </p>
        </div>
      </div>
    </div>
  );
}
