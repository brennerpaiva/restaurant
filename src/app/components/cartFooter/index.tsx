import React from "react";
import "./cartFooter.modules.css";
import { MdDeliveryDining } from "react-icons/md";

export default function CartProduct() {
  return (
    <div className="m-footer">
      <div className="container">
        <div className="container-total text-right">
          <p className="mb-0">
            <span>Subtotal</span>
            <span id="lblSubTotal">R$95,00</span>
          </p>
          <p className="mb-0 texto-entrega">
            <span>
              <MdDeliveryDining /> Entrega:
            </span>
            <span id="lblValorEntrega">+ R$5,00</span>
          </p>
          <p className="mb-0 texto-total">
            <span>Total: </span>
            <span id="lblSubTotal" className="valor-total">
              <b>R$100,00</b>
            </span>
          </p>
        </div>

        <a href="" className="btn btn-yellow float-right">
          Continuar
        </a>
      </div>
    </div>
  );
}
