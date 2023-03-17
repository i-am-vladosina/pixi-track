import React from "react";
import "./MainPage.scss";
import logo from "./images/react-logo.svg";

const content = ["React", "Typescript", "SCSS", "React Router", "Prettier", "ESLinter", "StyleLinter", "Local Server"];

export function MainPage() {
  return (
    <div className="page-wrapper">
      <section className="page">
        <h1 className="page__title">React Template</h1>
        <ul className="page__list">
          {content.map((item, key) => {
            return (
              <li key={key} className="page__item">
                {item}
              </li>
            );
          })}
        </ul>
        <img src={logo} alt="react-logo" className="page__logo" />
      </section>
    </div>
  );
}
