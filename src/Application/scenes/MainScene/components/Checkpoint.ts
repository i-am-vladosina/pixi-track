import { Container, Graphics, Text } from "pixi.js";
import { settings } from "src/Application/settings";
import { Vector2 } from "../../../types";

export class Checkpoint extends Container {
  private readonly circle: Graphics;
  private readonly idText: Text;

  constructor(position: Vector2, radius: number, color: number, id: number) {
    super();

    this.position = position;

    this.circle = new Graphics();
    this.circle.position = { x: 0, y: 0 };
    this.circle.beginFill(color).drawCircle(0, 0, radius).endFill();

    this.addChild(this.circle);

    this.idText = new Text(id, {
      fontSize: settings.checkpoints.text.fontSize,
      fill: settings.checkpoints.text.fillColor,
      fontFamily: settings.checkpoints.text.fontFamily,
    });
    this.idText.x = -this.idText.width / 2;
    this.idText.y = -this.idText.height / 2;

    this.addChild(this.idText);
  }

  public getCircle() {
    return this.circle;
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
