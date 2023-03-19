import { Graphics, Rectangle } from "pixi.js";
import { Vector2 } from "../../../types";

export class Background extends Graphics {
  constructor(position: Vector2, width: number, height: number, color: number, lineWidth: number) {
    super();

    this.lineStyle(lineWidth, color);
    this.drawRect(0, 0, width, height);

    this.position = position;
    this.hitArea = new Rectangle(0, 0, width, height);
  }

  public enableInteractive() {
    this.cursor = "pointer";
    this.interactive = true;
  }

  public disableInteractive() {
    this.cursor = "";
    this.interactive = false;
  }
}
