import { Container } from "pixi.js";
import { DinoFire } from "./DinoFire";

export class Scene extends Container {

    constructor()
    {
        super()

        const dinoWithFire: DinoFire = new DinoFire()

        dinoWithFire.scale.set(0.4, 0.4)
	    dinoWithFire.x = 90
	    dinoWithFire.y = 100

        this.addChild(dinoWithFire)
    }
}