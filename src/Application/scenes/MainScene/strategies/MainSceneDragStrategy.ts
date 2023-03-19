import { FederatedPointerEvent } from "pixi.js";
import { Track } from "src/Application/scenes/MainScene/components/Track";
import { Background } from "../components/Background";
import { Checkpoint } from "../components/Checkpoint";

export class MainSceneDragStrategy {
  private dragCheckpoint: Checkpoint | null;

  constructor(private readonly track: Track, private readonly background: Background) {
    this.dragCheckpoint = null;

    // нужно избежать изменения курсора
    this.background.interactive = true;

    this.track.getCheckpointList().forEach((checkpoint: Checkpoint) => {
      checkpoint.enableInteractive();

      checkpoint
        .on("mousedown", () => this.onDragStart(checkpoint))
        .on("touchstart", () => this.onDragStart(checkpoint));
      checkpoint
        .on("mouseup", this.onDragEnd)
        .on("mouseupoutside", this.onDragEnd)
        .on("touchend", this.onDragEnd)
        .on("touchendoutside", this.onDragEnd);
    });

    this.background
      .on("mouseup", this.onDragEnd)
      .on("mouseupoutside", this.onDragEnd)
      .on("touchend", this.onDragEnd)
      .on("touchendoutside", this.onDragEnd);
  }

  public destroy() {
    this.track.getCheckpointList().forEach((checkpoint) => checkpoint.removeAllListeners());
    this.background
      .off("mouseup", this.onDragEnd)
      .off("mouseupoutside", this.onDragEnd)
      .off("touchend", this.onDragEnd)
      .off("touchendoutside", this.onDragEnd);
    this.background.interactive = false;
  }

  private onDragStart = (checkpoint: Checkpoint) => {
    this.dragCheckpoint = checkpoint;
    this.dragCheckpoint.scale.set(1.2);
    this.background.on("mousemove", this.onDragMove).on("touchmove", this.onDragMove);
  };

  private onDragMove = (event: FederatedPointerEvent) => {
    if (this.dragCheckpoint) {
      this.dragCheckpoint.position = event.global;
      this.track.updatePath();
    }
  };

  private onDragEnd = () => {
    if (this.dragCheckpoint) {
      this.background.off("mousemove", this.onDragMove).off("touchmove", this.onDragMove);
      this.dragCheckpoint.scale.set(1);
      this.dragCheckpoint = null;
    }
  };
}
