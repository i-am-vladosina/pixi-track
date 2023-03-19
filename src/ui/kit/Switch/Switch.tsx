import cn from "classnames";
import React from "react";
import "./Switch.scss";

interface SwitchProps {
  text: string;
  checked: boolean;
}

export function Switch({ text, checked }: SwitchProps) {
  return (
    <div className="switch">
      <input type="switch" className="switch__default" />
      <div className={cn("switch__toggler", { ["switch__toggler--checked"]: checked })}>
        <div className={cn("switch__dot", { ["switch__dot--checked"]: checked })}></div>
      </div>
      <p className="switch__text">{text}</p>
    </div>
  );
}
