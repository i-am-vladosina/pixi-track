import React, { useState } from "react";
import { Easing, settings } from "src/Application/settings";
import { uiStore } from "src/stores/UIStore";
import { hexadecimalNumberToHex } from "src/utils/hexadecimalNumberToHex";
import { Button } from "../kit/Button/Button";
import { RangeSlider } from "../kit/RangeSlider/RangeSlider";
import { Select } from "../kit/Select/Select";
import "./Menu.scss";
import { MenuLegend } from "./MenuLegend";

export function Menu() {
  const [duration, setDuration] = useState(settings.targetAnimation.duration);
  const [easing, setEasing] = useState(settings.targetAnimation.easing);

  const handleChangeEasing = (value: Easing) => {
    settings.targetAnimation.easing = value;
    setEasing(value);
  };
  const handleChangeDuration = (duration: number) => {
    settings.targetAnimation.duration = duration;
    setDuration(duration);
  };

  return (
    <div className="menu">
      <h3 className="menu__title">Settings</h3>
      <RangeSlider
        value={duration}
        min={settings.durationRange.minDuration}
        max={settings.durationRange.maxDuration}
        step={settings.durationRange.step}
        text="Duration"
        onChange={handleChangeDuration}
        className="menu__duration"
      />

      <Select
        value={easing}
        optionList={Object.values(Easing)}
        onChange={handleChangeEasing}
        className="menu__easing"
      />

      <MenuLegend
        color={hexadecimalNumberToHex(settings.connectionLine.color)}
        title="Connection line"
        className="menu__legend"
      />
      <MenuLegend
        color={hexadecimalNumberToHex(settings.bezierCurve.color)}
        title="Bezier curve"
        className="menu__legend"
      />

      <div className="menu__submit">
        <Button size="middle" onClick={uiStore.runStar} text="Run" />
      </div>
    </div>
  );
}
