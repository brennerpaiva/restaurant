import React from "react";
import "./feedbacks.modules.css";
import Feedback from "@/app/components/feedback";

import Image from "next/image";

export default function Feedbacks() {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="background-depoimentos"></div>

      <div className="container">
        <div className="row">
          <div className="col-5 text-center">
            <div className="card-depoimentos">
              <div className="d-flex img-banner-pizza">
                <Image
                  src="/pizzas.png"
                  width={540}
                  height={450}
                  alt="pizzas"
                />
              </div>
            </div>
          </div>

          <div className="col-7">
            <span className="hint-title">
              <strong>Depoimentos</strong>
            </span>
            <h1 className="title">
              <strong>O que dizem sobre nós</strong>
            </h1>
            <div className="mb-b">
              <Feedback
                img={"/joao.jpg"}
                name={"Diego Pereira"}
                feedback={
                  "Muito bom, recomendo muito! Comida muito bem feita pelo chefe,atendimento dentro dos parametros e boa comunicação com cliente."
                }
              />
            </div>
            <a href="#" className="btn btn-sm btn-white btn-social active mr-3">
              1
            </a>
            <a href="#" className="btn btn-sm btn-white btn-social mr-3">
              2
            </a>
            <a href="#" className="btn btn-sm btn-white btn-social ">
              3
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
