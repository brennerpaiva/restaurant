import React from "react";
import "./titleSection.modules.css";

type TitleSectionProps = {
  hintTitle: string;
  title: string;
};

export default function TitleSection({ hintTitle, title }: TitleSectionProps) {
  return (
    <>
      <span className="hint-title">
        <strong>{hintTitle}</strong>
      </span>
      <h1 className="title">{title}</h1>
    </>
  );
}
