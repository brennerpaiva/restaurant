import React from "react";
import "./CardProduct.modules.css";
import UnitsButtons from "@/components/UnitsButton";
import { Products } from "@prisma/client";

interface ProductItemProps {
  product: Products;
}

export default function CardProduct({ product }: ProductItemProps) {
  return (
    <div>
      <div className="card card-item">
        <div className="img-produto">
          <img src={`${product.coverImage}`} alt={`${product.name}`} />
        </div>
        <div className="info-produto">
          <p className="title-produto">{product.name}</p>
          <p className="description-produto just-mobile">
            {product.description} ...
          </p>
          <p className="price-produto">
            <strong>R${product.price.toString()}</strong>
          </p>
        </div>
        <div className="no-mobile">
          <UnitsButtons />
        </div>
      </div>
    </div>
  );
}
