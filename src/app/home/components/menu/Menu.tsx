import React from "react";
import "./Menu.modules.css";
import TitleSection from "@/app/components/titleSection/TitleSection";
import { FaHamburger, FaPizzaSlice, FaIceCream } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";
import Image from "next/image";
import CardProduct from "@/app/components/cardProduct";

export default function Menu() {
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
              <FaPizzaSlice className="mr-6" />
              Pizza
            </a>

            <a href="#" className="btn btn-white btn-sm ">
              <FaBowlFood className="mr-6" />
              Petiscos
            </a>
            <a href="#" className="btn btn-white btn-sm ">
              <FaIceCream className="mr-6" />
              Sobremesas
            </a>
            <a href="#" className="btn btn-white btn-sm ">
              <BiSolidDrink className="mr-6" />
              Bebidas
            </a>
          </div>
          <div className="col-12">
            <div className="row" id="menuItems">
              <div className="col-3">
                <CardProduct />
              </div>
              <div className="col-3">
                <CardProduct />
              </div>
              <div className="col-3">
                <CardProduct />
              </div>
              <div className="col-3">
                <CardProduct />
              </div>
              <div className="col-3">
                <CardProduct />
              </div>
              <div className="col-3">
                <CardProduct />
              </div>
              <div className="col-3">
                <CardProduct />
              </div>
              <div className="col-3">
                <CardProduct />
              </div>
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
}
