import cn from "classnames";
import React from "react";
import "./MenuLegend.scss";

interface MenuLegendProps {
  title: string;
  color: string;
  className?: string;
}

export function MenuLegend({ title, color, className }: MenuLegendProps) {
  return (
    <div className={cn("menu-legend", className)}>
      <div className="menu-legend__color" style={{ backgroundColor: color }}></div>
      <p className="menu-legend__text">{title}</p>
    </div>
  );
}
