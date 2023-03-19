import anime from "animejs";
import { Container } from "pixi.js";
import { Application as PixiApp } from "pixi.js";
import { Track } from "src/Application/scenes/MainScene/components/Track";
import { settings } from "src/Application/settings";
import { UIStoreEvents, uiStore } from "src/stores/UIStore";
import { CallbacksCollector } from "src/utils/CallbacksCollector";
import { Background } from "./components/Background";
import { Checkpoint } from "./components/Checkpoint";
import { Star } from "./components/Star";
import { MainSceneDragStrategy } from "./strategies/MainSceneDragStrategy";

export class MainScene extends Container {
  private readonly background: Background;
  private readonly callbacksCollector: CallbacksCollector;
  private readonly track: Track;

  private strategy: MainSceneDragStrategy;
  private checkpoints: {
    begin: Checkpoint;
    middle: Checkpoint;
    end: Checkpoint;
  };
  private target: Star;
  private hideDelayTimeoutId: number;

  constructor(private readonly app: PixiApp) {
    super();
    const width = this.app.view.width;
    const height = this.app.view.height;

    this.background = new Background(
      { x: 0, y: 0 },
      this.app.view.width,
      this.app.view.height,
      settings.background.color,
      settings.background.lineWidth
    );
    this.addChild(this.background);

    this.checkpoints = {
      begin: new Checkpoint(
        settings.checkpoints.begin.position(width, height),
        settings.checkpoints.begin.radius,
        settings.checkpoints.begin.color,
        settings.checkpoints.begin.id
      ),
      middle: new Checkpoint(
        settings.checkpoints.middle.position(width, height),
        settings.checkpoints.middle.radius,
        settings.checkpoints.middle.color,
        settings.checkpoints.middle.id
      ),
      end: new Checkpoint(
        settings.checkpoints.end.position(width, height),
        settings.checkpoints.end.radius,
        settings.checkpoints.end.color,
        settings.checkpoints.end.id
      ),
    };

    this.track = new Track(Object.values(this.checkpoints));
    this.addChild(this.track);

    Object.values(this.checkpoints).forEach((cp) => this.track.addCheckpoint(cp));

    this.target = new Star();
    this.setTargetToInitalState();
    this.addChild(this.target);

    this.strategy = new MainSceneDragStrategy(this.track, this.background);

    this.callbacksCollector = new CallbacksCollector();
    this.callbacksCollector.add(uiStore.subscribe(UIStoreEvents.RunStar, () => this.animateStar()));

    this.hideDelayTimeoutId = -1;
  }

  public destroy() {
    super.destroy();
    this.callbacksCollector.execute();
    window.clearTimeout(this.hideDelayTimeoutId);
  }

  private animateStar() {
    this.target.show();

    window.clearTimeout(this.hideDelayTimeoutId);

    const { x, y } = this.track.getPoints();

    const { duration, easing, hideDelay, delay } = settings.targetAnimation;

    anime({
      targets: this.target,
      x: x.map((pX) => ({ value: pX, duration: duration / x.length })),
      y: y.map((pY) => ({ value: pY, duration: duration / y.length })),
      easing,
      delay,
      complete: () => {
        this.hideDelayTimeoutId = window.setTimeout(this.setTargetToInitalState, hideDelay);
      },
    });
  }

  private setTargetToInitalState = () => {
    this.target.hide();
    this.target.position = this.checkpoints.begin.position;
  };
}
