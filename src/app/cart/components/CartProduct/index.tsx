import React from "react";
import "./cartProduct.modules.css";
import UnitsButtons from "../../../../components/UnitsButton";

export default function CartProduct() {
  return (
    <>
      <div id="intensCarrinho" className="row mr-0 ml-0">
        <div className="col-12 item-carrinho">
          <div className="img-produto">
            <img
              src="/cardapio/burguers/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg"
              alt="produto"
            />
          </div>
          <div className="dados-produto">
            <p className="title-produto">
              <strong>Nome do produto</strong>
            </p>
            <p className="price-produto">
              <strong>R$149,99</strong>
            </p>
          </div>
          <div className="wrapper-button">
            <UnitsButtons />
          </div>
        </div>
      </div>
    </>
  );
}
