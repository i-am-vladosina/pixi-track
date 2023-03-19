export class CallbacksCollector {
  private callbacks: Set<VoidFunction>;

  constructor() {
    this.callbacks = new Set();
  }

  public add(cb: VoidFunction) {
    this.callbacks.add(cb);
  }

  public execute() {
    this.callbacks.forEach((cb) => cb());
    this.callbacks.clear();
  }
}
