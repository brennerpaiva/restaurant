import React from "react";
import "./Reserve.modules.css";

export default function Reserve() {
  return (
    <section className="reservas" id="reservas">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card-secondary">
              <div className="row">
                <div className="col-7">
                  <span className="hint-title">
                    <strong>Reserva</strong>
                  </span>
                  <h1 className="title">
                    <strong>Quer reservar um horário?</strong>
                  </h1>
                  <p className="pr-5">
                    Mande uma mensagem clicando no botã abaixo
                    <br />
                    Reserve sua data e horário de forma simples e rápida
                  </p>
                  <a href="#" className="btn btn-yellow mt-4">
                    Fazer Reserva
                  </a>
                </div>

                <div className="col-5 image-wrapper">
                  <div className="card-reserva"></div>
                  <div className="d-flex img-banner">
                    <img src="/icone-reserva.svg" alt="reserva" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
