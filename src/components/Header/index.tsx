import "./Header.modules.css";
import { Container, Nav, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { BsFillBagFill } from "react-icons/bs";

export default function Header() {
  return (
    <section className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <Image
              src="/logo.png"
              className="img-logo"
              width={160}
              height={160}
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" collapse navbar-collapse mx-auto"
            id="navbarDropdown"
          >
            <ul className=" navbar-nav ms-auto mx-auto">
              <li className="nav-item">
                <a href="#reservas" className="nav-link">
                  Reserva
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Cardápio
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Depoimentos
                </a>
              </li>
            </ul>
            <a className="btn btn-white btn-icon">
              Meu Carrinho
              <span className="icon-wrapper-header">
                <BsFillBagFill className="icon" />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
