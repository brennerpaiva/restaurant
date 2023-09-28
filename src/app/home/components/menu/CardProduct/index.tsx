import React from "react";
import "./CardProduct.modules.css";
import UnitsButtons from "@/components/UnitsButton";

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
        <UnitsButtons />
      </div>
    </div>
  );
}
