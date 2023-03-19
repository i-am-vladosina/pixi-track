import cn from "classnames";
import React, { ChangeEvent } from "react";
import "./RangeSlider.scss";

interface RangeSliderProps {
  text: string;
  min: number;
  max: number;
  value: number;
  onChange(value: number, e: ChangeEvent): void;
  step?: number;
  className?: string;
}

export function RangeSlider({ text, min, max, step, value, onChange, className }: RangeSliderProps) {
  const percentage = (100 * (value - min)) / (max - min);

  return (
    <div className={cn("range-slider", className)}>
      <p className="range-slider__text">
        {text}: {value}
      </p>
      <div className="range-slider__input-wrapper">
        <p className="range-slider__min-value">{min}</p>
        <input
          value={value}
          min={min}
          max={max}
          step={step}
          type="range"
          className="range-slider__input"
          onChange={(e) => {
            onChange(parseInt(e.target.value), e);
          }}
          style={{
            background: `linear-gradient(90deg, var(--color-primary-dark-green) ${percentage}%, var(--color-primary-soft-green) ${percentage}%)`,
          }}
        />
        <p className="range-slider__max-value">{max}</p>
      </div>
    </div>
  );
}
