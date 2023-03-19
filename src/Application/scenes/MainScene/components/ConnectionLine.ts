import { Graphics } from "pixi.js";
import { Vector2 } from "src/Application/types";

export class ConnectionLine extends Graphics {
  constructor(private readonly lineWidth: number, private readonly color: number) {
    super();
  }

  public drawFromPoints(points: Vector2[]) {
    if (points.length < 2) {
      throw new Error("LinePath:drawFromPoints: points length must be more than 2");
    }

    this.clear();
    this.lineStyle(this.lineWidth, this.color);

    for (let i = 1; i < points.length; i++) {
      this.moveTo(points[i - 1].x, points[i - 1].y);
      this.lineTo(points[i].x, points[i].y);
    }
  }
}
