import { FederatedPointerEvent } from "pixi.js";
import { Track } from "src/Application/scenes/MainScene/components/Track";
import { Background } from "../components/Background";
import { Checkpoint } from "../components/Checkpoint";

export class MainSceneAddStrategy {
  constructor(private readonly track: Track, private readonly background: Background) {
    this.background.enableInteractive();
    this.background.on("click", this.handleStageClick);
  }

  public destroy() {
    this.background.disableInteractive();
    this.background.removeAllListeners();
  }

  private handleStageClick = (e: FederatedPointerEvent) => {
    this.track.addCheckpoint(new Checkpoint(e.global, 8, 0xff0000, 0));
  };
}
