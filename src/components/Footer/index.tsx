import React from "react";
import "./Footer.modules.css";
import MediasSocials from "../MediasSocials";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-3 container-logo-footer">
            <img src="/logo.png" alt="logo" className="logo-footer" />
          </div>
          <div className="col-6 container-texto-footer">
            <p className="mb-0">
              <strong>Restaurante</strong> Todos os direitos reservados
            </p>
          </div>

          <div className="col-3 container-redes-footer">
            <MediasSocials />
          </div>
        </div>
      </div>
      ;
    </footer>
  );
}
