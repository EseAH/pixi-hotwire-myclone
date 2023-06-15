import { Container, Sprite } from "pixi.js";


export class DinoFire extends Container {

    constructor(){
        super()

        const dino: Sprite = Sprite.from("myDino");
        const fire: Sprite = Sprite.from("myFire");
        
        dino.scale.set(0.5,0.5)
        fire.scale.set(0.3,0.3)
        fire.angle = 10
        fire.position.set(570, 110)

        this.addChild(dino);
	    this.addChild(fire);
    }
}