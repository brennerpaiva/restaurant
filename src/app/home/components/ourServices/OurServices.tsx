import React from "react";
import Image from "next/image";
import "./ourServices.modules.css";
import TitleSection from "@/app/components/titleSection/TitleSection";

export default function OurServices() {
  return (
    <section className="services" id="services">
      <div className="background-services"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <TitleSection
              hintTitle="Serviços"
              title="Como são nossos serviços?"
            />
          </div>

          <div className="col-4 mb-5">
            <div className="card-image text-center">
              <Image src="./icone-pedido.svg" width={120} height={130} alt="" />
            </div>
            <div className="card-text text-center mt-3">
              <p>
                <strong>Fácil de Pedir</strong>
              </p>
              <span>
                Apenas alguns passos para pedir sua comida e aguarde até chegar
              </span>
            </div>
          </div>
          <div className="col-4 mb-5">
            <div className="card-image text-center">
              <Image
                src="./icone-delivery.svg"
                width={200}
                height={150}
                alt=""
              />
            </div>
            <div className="card-text text-center mt-3">
              <p>
                <strong>Entrega Rápida</strong>
              </p>
              <span>Nossa entrega é sempre pontual, rápida e segura.</span>
            </div>
          </div>

          <div className="col-4 mb-5">
            <div className="card-image text-center">
              <Image
                src="./icone-qualidade.svg"
                width={200}
                height={150}
                alt=""
              />
            </div>
            <div className="card-text text-center mt-3">
              <p>
                <strong>Melhor qualidade</strong>
              </p>
              <span>
                A qualidade é nosso diferencial. Todos os produtos de
                fresquinhos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
