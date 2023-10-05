import React from "react";
import "./Menu.modules.css";
import TitleSection from "@/components/TitleSection";
import { FaHamburger, FaPizzaSlice, FaIceCream } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";
import Image from "next/image";
import CardProduct from "./CardProduct";
import Button from "@/components/Button";
import { prisma } from "@/lib/prisma";
import { Products } from "@prisma/client";

async function getProducts() {
  const product = await prisma.products.findMany({});

  return product;
}

const Menu = async () => {
  const data = await getProducts();

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="background-menu"></div>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <TitleSection hintTitle="Cardápio" title="Conheça nosso cardápio" />
          </div>
          <div className="col-12 container-menu">
            <a href="#" className="btn btn-white btn-sm active">
              <FaHamburger className="mr-6 icon" />
              Burguer
            </a>
            <a href="#" className="btn btn-white btn-sm ">
              <FaPizzaSlice className="mr-6 icon" />
              Pizza
            </a>

            <a href="#" className="btn btn-white btn-sm ">
              <FaBowlFood className="mr-6 icon" />
              Petiscos
            </a>
            <a href="#" className="btn btn-white btn-sm ">
              <FaIceCream className="mr-6 icon" />
              Sobremesas
            </a>
            <a href="#" className="btn btn-white btn-sm ">
              <BiSolidDrink className="mr-6 icon" />
              Bebidas
            </a>
          </div>
          <div className="col-12 col-one">
            <div className="row" id="menuItems">
              {data.map((product: Products) => (
                <div
                  className="col-12 col-lg-3 col-md-3 col-sm-6"
                  key={product.id}
                >
                  <CardProduct product={product} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 text-center">
            <a href="" className="btn btn-white btn-sm">
              Ver mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
