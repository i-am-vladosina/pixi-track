export enum Colors {
  Violet = 0x5f0f40,
  Red = 0xea5455,
  Yellow = 0xfb8b24,
  Orange = 0xe36414,
  Blue = 0x0f4c5c,
}

// the dublicate from variables.scss
export enum PrimaryColor {
  White = 0xffffff,
  DarkGreen = 0x071e22,
  Green = 0x1d7874,
  SoftGreen = 0x679289,
  Peach = 0xf4c095,
  Red = 0xee2e31,
}

// https://easings.net/ru
export enum Easing {
  EaseInSine = "easeInSine",
  EaseInCubic = "easeInCubic",
  EaseInQuint = "easeInQuint",
  EaseInCirc = "easeInCirc",
  EaseInElastic = "easeInElastic",
  EaseOutSine = "easeOutSine",
  EaseOutCubic = "easeOutCubic",
  EaseOutQuint = "easeOutQuint",
  EaseOutCirc = "easeOutCirc",
  EaseOutElastic = "easeOutElastic",
  EaseInOutSine = "easeInOutSine",
  EaseInOutCubic = "easeInOutCubic",
  EaseInOutQuint = "easeInOutQuint",
  EaseInOutCirc = "easeInOutCirc",
  EaseInOutElastic = "easeInOutElastic",
  EaseInQuad = "easeInQuad",
  EaseInQuart = "easeInQuart",
  EaseInExpo = "easeInExpo",
  EaseInBack = "easeInBack",
  EaseInBounce = "easeInBounce",
  EaseOutQuad = "easeOutQuad",
  EaseOutQuart = "easeOutQuart",
  EaseOutExpo = "easeOutExpo",
  EaseOutBack = "easeOutBack",
  EaseOutBounce = "easeOutBounce",
  EaseInOutQuad = "easeInOutQuad",
  EaseInOutQuart = "easeInOutQuart",
  EaseInOutExpo = "easeInOutExpo",
  EaseInOutBack = "easeInOutBack",
  EaseInOutBounce = "easeInOutBounce",
}

export const settings = {
  application: {
    backgroundColor: Colors.Blue,
  },
  checkpoints: {
    text: {
      fillColor: 0xffffff,
      fontFamily: "BalooRegular",
      fontSize: 13,
    },
    begin: {
      position: (width: number, height: number) => ({
        x: width * 0.3,
        y: height * 0.15,
      }),
      radius: 12,
      color: Colors.Red,
      id: 1,
    },

    middle: {
      position: (width: number, height: number) => ({
        x: width * 0.4,
        y: height * 0.95,
      }),
      radius: 12,
      color: Colors.Yellow,
      id: 2,
    },
    end: {
      position: (width: number, height: number) => ({
        x: width * 0.75,
        y: height * 0.75,
      }),
      radius: 12,
      color: Colors.Red,
      id: 3,
    },
  },
  background: {
    color: 0x79aee0,
    lineWidth: 8,
  },
  targetAnimation: {
    duration: 800,
    delay: 200,
    easing: Easing.EaseInSine,
    hideDelay: 800,
  },
  durationRange: {
    maxDuration: 3000,
    minDuration: 50,
    step: 50,
  },
  connectionLine: {
    color: Colors.Yellow,
    width: 3,
  },
  bezierCurve: {
    color: Colors.Orange,
    width: 3,
  },
  star: {
    lineWidth: 2,
    strokeColor: PrimaryColor.White,
    fillColor: PrimaryColor.Green,
  },
};
