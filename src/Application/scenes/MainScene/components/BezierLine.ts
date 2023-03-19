import { Graphics } from "pixi.js";
import { Vector2 } from "src/Application/types";

export class BezierLine extends Graphics {
  constructor(
    private readonly lineWidth: number,
    private readonly color: number,
    start: Vector2,
    middle: Vector2,
    end: Vector2
  ) {
    super();
    this.draw(start, middle, end);
  }

  public draw(start: Vector2, middle: Vector2, end: Vector2) {
    this.clear();
    this.lineStyle(this.lineWidth, this.color)
      .moveTo(start.x, start.y)
      .bezierCurveTo(start.x, start.y, middle.x, middle.y, end.x, end.y);
  }

  public getPath() {
    return this.geometry.graphicsData[0].points;
  }

  public getPoints() {
    const pointsX: number[] = [];
    const pointsY: number[] = [];
    const points = this.getPath();
    for (let i = 0; i < points.length; i++) {
      (i % 2 === 0 ? pointsX : pointsY).push(points[i]);
    }

    return {
      x: pointsX,
      y: pointsY,
    };
  }
}
