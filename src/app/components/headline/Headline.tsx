import "./headline.css";
import {
  AiFillPhone,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Image from "next/image";

export default function Headline() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="d-flex text-banner">
              <h1>
                Escolha sua comida <span>favorita</span>
              </h1>
              <p>
                Aproveite o nosso cardápio. Escolha o que desejar e receba em
                sua casa de forma rápida e segura.
              </p>
              <div>
                <a href="#" className="btn btn-yellow mt-4 mr-3">
                  Ver Cardápio
                </a>
                <a href="#" className="btn btn-white btn-icon-left mt-4 mr-4">
                  <span className="icon-wrapper ">
                    <AiFillPhone className="icon" />
                  </span>
                  (17)9999-9999
                </a>
              </div>
            </div>
            <a href="#" className="btn btn-sm btn-white btn-social mt-1 mr-3">
              <AiOutlineInstagram />
            </a>
            <a href="#" className="btn btn-sm btn-white btn-social mt-1 mr-3">
              <AiOutlineFacebook />
            </a>
            <a href="#" className="btn btn-sm btn-white btn-social mt-1 mr-3">
              <AiOutlineWhatsApp />
            </a>
          </div>
          <div className="col-6">
            <div className="card-banner">
              <div className="d-flex img-banner">
                <img src="/burguer.png" alt="hamburguer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
