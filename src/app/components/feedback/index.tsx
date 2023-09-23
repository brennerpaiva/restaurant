import React from "react";
import "./feedback.modules.css";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

type TypeFeedbackProps = {
  img: string;
  name: string;
  feedback: string;
};

export default function Feedback({ img, name, feedback }: TypeFeedbackProps) {
  return (
    <>
      <div className="depoimento" id="depoimento-1">
        <div className="container-dados-depoimento">
          <Image
            src="/joao.jpg"
            width={100}
            height={100}
            className="imagem-depoimento"
            alt="joao"
          />

          <div>
            <p className="nome-depoimento">
              <strong>{name}</strong>
            </p>
            <p className="nota-depoimento">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              &nbsp;
              <span>5</span>
            </p>
          </div>
        </div>
        <p className="texto-depoimento">
          <BiSolidQuoteAltLeft className="icon-quote" />
          <span>
            Muito bom, recomendo muito! Comida muito bem feita pelo chefe,
            atendimento dentro dos parametros e boa comunicação com cliente.
          </span>
          <BiSolidQuoteAltRight className="icon-quote" />
        </p>
      </div>
    </>
  );
}
