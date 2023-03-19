import React from "react";
import "./App.scss";
import { Menu } from "./ui/Menu/Menu";
import { Stage } from "./ui/Stage/Stage";

export function App() {
  return (
    <div className="page">
      <h1 className="page__title">Pixi.js Object Track</h1>
      <div className="page__container">
        <Stage />
        <Menu />
      </div>
    </div>
  );
}
