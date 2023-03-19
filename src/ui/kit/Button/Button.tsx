import cn from "classnames";
import React, { MouseEvent } from "react";
import "./Button.scss";

interface ButtonProps {
  size: "small" | "middle" | "big";
  text: string;
  onClick(e: MouseEvent<HTMLButtonElement>): void;
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button({ text, onClick, size, disabled, isLoading }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn("button", `button--size-${size}`, { ["button--loading"]: isLoading })}
    >
      {text}
    </button>
  );
}
