import React from "react";
import "./Button.modules.css";

interface ButtonProps {
  variant?: "bnt-white" | "btn-yellow";
  size?: "bnt-regular" | "btn-sm";
  onClick?: () => void; // Evento onClick opcional
  children: React.ReactNode; // Conteúdo do botão
}

const Button: React.FC<ButtonProps> = ({
  variant = "btn-white",
  size = "btn-regular",
  onClick,
  children,
}) => {
  return (
    <a className={`${variant}  ${size}`} onClick={onClick}>
      {children}
    </a>
  );
};

export default Button;
