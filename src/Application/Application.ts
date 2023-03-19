import { Application as PixiApp } from "pixi.js";
import { MainScene } from "./scenes/MainScene/MainScene";
import { settings } from "./settings";

export class Application {
  private pixiApp: PixiApp;
  private mainScene: MainScene;

  constructor(containerNode: HTMLElement) {
    const { width, height } = containerNode.getBoundingClientRect();
    this.pixiApp = new PixiApp({
      width,
      height,
      antialias: true,
      backgroundColor: settings.application.backgroundColor,
      resolution: window.devicePixelRatio || 1,
    });

    containerNode.appendChild(this.pixiApp.view as HTMLCanvasElement);

    this.mainScene = new MainScene(this.pixiApp);
    this.pixiApp.stage.addChild(this.mainScene);
  }

  public destroy() {
    this.pixiApp.destroy();
  }
}
