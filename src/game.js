import { Actor, Engine, Vector, Label, Color, Font } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Game extends Engine {
  constructor() {
    super({ width: window.innerWidth, height: window.innerHeight });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    const bg = new Actor();
    bg.graphics.use(Resources.BG.toSprite());
    bg.pos = new Vector(767, 370);
    bg.scale = new Vector(0.8, 0.76);
    this.add(bg);

    const bear = new Actor();
    bear.graphics.use(Resources.Bear.toSprite());
    bear.pos = new Vector(1000, 625);
    bear.vel = new Vector(-30, 0);
    bear.scale = new Vector(0.4, 0.4);
    bear.enableCapturePointer = true
    bear.pointer.useGraphicsBounds = true;
    bear.on("pointerup", (event) => {
      bear.kill()
    })
    this.add(bear);

    const lion = new Actor();
    lion.graphics.use(Resources.Lion.toSprite());
    lion.pos = new Vector(100, 630);
    lion.vel = new Vector(10, 0);
    lion.scale = new Vector(0.4, 0.4);
    lion.enableCapturePointer = true
    lion.pointer.useGraphicsBounds = true;
    lion.on("pointerup", (event) => {
      lion.kill()
    })
    this.add(lion);

  }
}

new Game();


