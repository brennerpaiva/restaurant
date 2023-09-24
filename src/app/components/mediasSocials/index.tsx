import React from "react";
import "./mediasSocials-modules.css";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function MediasSocials() {
  return (
    <>
      <a href="#" className="btn btn-sm btn-white btn-social mt-1 mr-3">
        <AiOutlineInstagram />
      </a>
      <a href="#" className="btn btn-sm btn-white btn-social mt-1 mr-3">
        <AiOutlineFacebook />
      </a>
      <a href="#" className="btn btn-sm btn-white btn-social mt-1 mr-3">
        <AiOutlineWhatsApp />
      </a>
    </>
  );
}
