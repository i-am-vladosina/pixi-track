import { Container } from "pixi.js";
import { settings } from "src/Application/settings";
import { BezierLine } from "./BezierLine";
import { Checkpoint } from "./Checkpoint";
import { ConnectionLine } from "./ConnectionLine";

export class Track extends Container {
  private readonly checkpointsContainer: Container;
  private readonly connectionLine: ConnectionLine;
  private readonly bezierLine: BezierLine;

  constructor(private readonly checkpointList: Checkpoint[]) {
    super();

    this.connectionLine = new ConnectionLine(settings.connectionLine.width, settings.connectionLine.color);
    this.addChild(this.connectionLine);

    this.bezierLine = new BezierLine(
      settings.bezierCurve.width,
      settings.bezierCurve.color,
      checkpointList[0],
      checkpointList[1],
      checkpointList[2]
    );
    this.addChild(this.bezierLine);

    this.checkpointsContainer = new Container();
    this.addChild(this.checkpointsContainer);
  }

  public addCheckpoint(checkpoint: Checkpoint) {
    this.checkpointsContainer.addChild(checkpoint);

    this.updatePath();
  }

  public updatePath() {
    if (this.checkpointsContainer.children.length >= 2) {
      this.connectionLine.drawFromPoints(this.checkpointsContainer.children);
    }

    const cpList = this.checkpointList;

    this.bezierLine.draw(cpList[0], cpList[1], cpList[2]);
  }

  public getCheckpointList() {
    return this.checkpointsContainer.children;
  }

  public getPath() {
    return this.bezierLine.getPath();
  }

  public getPoints() {
    return this.bezierLine.getPoints();
  }
}
