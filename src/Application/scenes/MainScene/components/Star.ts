import { Graphics } from "pixi.js";
import { settings } from "src/Application/settings";
import { Vector2 } from "src/Application/types";

export class Star extends Graphics {
  constructor(position?: Vector2) {
    super();

    if (position) {
      this.position = position;
    }

    const { lineWidth, strokeColor, fillColor } = settings.star;
    this.lineStyle(lineWidth, strokeColor);
    this.beginFill(fillColor);
    this.drawStar(0, 0, 5, 10, 15, 90);
    this.endFill();
  }

  public hide() {
    this.visible = false;
  }

  public show() {
    this.visible = true;
  }

  private drawStar(x: number, y: number, points: number, innerRadius: number, outerRadius: number, angle: number) {
    const step = (Math.PI * 2) / points;
    const halfStep = step / 2;
    const start = (angle / 180) * Math.PI;

    this.moveTo(x + Math.cos(start) * outerRadius, y - Math.sin(start) * outerRadius);

    for (let n = 1; n <= points; n++) {
      let dx = x + Math.cos(start + step * n - halfStep) * innerRadius;
      let dy = y - Math.sin(start + step * n - halfStep) * innerRadius;
      this.lineTo(dx, dy);
      dx = x + Math.cos(start + step * n) * outerRadius;
      dy = y - Math.sin(start + step * n) * outerRadius;
      this.lineTo(dx, dy);
    }
  }
}
