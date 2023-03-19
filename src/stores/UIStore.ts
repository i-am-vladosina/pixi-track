import { EventEmitter } from "@pixi/utils";

export enum UIStoreEvents {
  RunStar = "RunStar",
}

export class UIStore {
  private readonly emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter();
  }

  public subscribe(event: UIStoreEvents, cb: VoidFunction) {
    this.emitter.on(event, cb);

    return () => {
      this.emitter.off(event, cb);
    };
  }

  public runStar = () => {
    this.emitter.emit(UIStoreEvents.RunStar);
  };
}

export const uiStore = new UIStore();
