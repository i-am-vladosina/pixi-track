import cn from "classnames";
import React, { ChangeEvent } from "react";
import "./Radio.scss";

interface RadioProps {
  /**
   * Атрибут группы
   */
  name: string;
  /**
   *  Значение радиокнопки
   */
  value: string;
  /**
   * Текст после иконки
   */
  text: string;
  /**
   * Активна ли радокнопка
   */
  checked: boolean;
  /**
   * Обработчик события изменения значения checked у радиокнопки
   * @param e Событие на элементе radio
   * @param value значение checked радиокнопки
   */
  onChange(e: ChangeEvent<HTMLInputElement>, value: boolean): void;
}

/**
 *  Основной UI Kit компонент радиокнопки
 */
export function Radio({ value, text, name, checked, onChange }: RadioProps) {
  return (
    <label className="radio">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        className={"radio__default"}
        onChange={(e) => onChange(e, !checked)}
      />
      <div className={getInputClassNames(checked)}></div>
      <p className={"radio__label"}>{text}</p>
    </label>
  );
}

function getInputClassNames(checked: boolean): string {
  const baseClassName = "radio__input";
  return cn(baseClassName, { [`${baseClassName}--checked`]: checked, [`${baseClassName}--not-checked`]: !checked });
}
