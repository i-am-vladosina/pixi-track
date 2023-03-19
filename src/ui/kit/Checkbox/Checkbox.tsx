import cn from "classnames";
import React, { ChangeEvent } from "react";
import { Check } from "../Icons/Check";
import "./Checkbox.scss";

interface CheckboxProps {
  /**
   * Выбран ли чекбокс
   */
  checked: boolean;
  /**
   * Название группы чекбоксов
   */
  name: string;
  /**
   * Текст чекбокса
   */
  text: string;
  /**
   * Значение чекбокса
   */
  value: string;
  /**
   * Обработчик события изменения значения checked у радиокнопки
   * @param e Событие на элементе radio
   * @param value значение checked радиокнопки
   */
  onChange(e: ChangeEvent<HTMLInputElement>, value: boolean): void;
}

/**
 * Основной UI Kit элемент для чекбокса
 */
export function Checkbox({ value, text, name, checked, onChange }: CheckboxProps) {
  return (
    <label htmlFor={value} className="checkbox">
      <input
        type="checkbox"
        id={value}
        value={value}
        checked={checked}
        name={name}
        className="checkbox__default"
        onChange={(e) => onChange(e, !checked)}
      />
      {checked && <Check className="checkbox__icon" />}
      <div className={getInputClassNames(checked)}></div>
      <p className="checkbox__label">{text}</p>
    </label>
  );
}

function getInputClassNames(checked: boolean): string {
  const baseClassName = "checkbox__input";
  return cn(baseClassName, { [`${baseClassName}--checked`]: checked, [`${baseClassName}--not-checked`]: !checked });
}
