import cn from "classnames";
import React, { FormEvent } from "react";
import "./Select.scss";

interface SelectProps<T> {
  value: T;
  optionList: T[];
  onChange(value: T, event: FormEvent<HTMLSelectElement>): void;
  className?: string;
}

export function Select<T extends string | number | readonly string[]>({
  value,
  optionList,
  onChange,
  className,
}: SelectProps<T>) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as T, e)} className={cn("select", className)}>
      {optionList.map((option, key) => (
        <option key={key} value={option} className="select__option">
          {option}
        </option>
      ))}
    </select>
  );
}
