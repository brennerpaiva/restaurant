import React from "react";
import "./cartResume.modules.css";
import CartResumeProduct from "../CartResumeProduct";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function CartResume() {
  return (
    <div id="resumoCarrinho" className="row mr-0 ml-0">
      <div className="col-12">
        <p className="title-carrinho mt-3">
          <strong>Itens do pedido</strong>
        </p>
      </div>
      <CartResumeProduct />
      <CartResumeProduct />

      <div className="col-12">
        <p className="title-carrinho mt-3">
          <strong>Local da entrega:</strong>
        </p>
      </div>

      <div className="col-12 item-carrinho resumo">
        <div className="img-map">
          <FaMapMarkedAlt />
        </div>
        <div className="dados-produto">
          <p className="texto-endereco">
            <strong id="resumoEndereco">Rua Lassance Cunha, Quinzinho</strong>
          </p>
          <p className="cidade-endereco" id="cidade">
            Cidade-MG / 35570-214
          </p>
        </div>
      </div>
    </div>
  );
}
