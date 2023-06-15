import { Application, Container, Loader, Point, Sprite } from 'pixi.js'
import { assets } from './assets';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


window.addEventListener('resize', ()=>{
	console.log('resized!');
	const scaleX = window.innerHeight / app.screen.width
	const scaleY = window.innerWidth / app.screen.height
	const scale = Math.min(scaleX, scaleY)

	const gameWidth = Math.round(app.screen.width * scale)
	const gameHeight = Math.round(app.screen.height * scale)

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2)
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2)

	app.view.style.width = gameWidth + 'px'
	app.view.style.height = gameHeight + 'px'

	app.view.style.marginLeft = marginHorizontal + 'px'
	app.view.style.marginRight = marginHorizontal + 'px'

	app.view.style.marginTop = marginVertical + 'px'
	app.view.style.marginBottom = marginVertical + 'px'
})
window.dispatchEvent(new Event('resize'))

Loader.shared.add(assets)

Loader.shared.onComplete.add(()=>{
	const dino: Sprite = Sprite.from("myDino");
	const fire: Sprite = Sprite.from("myFire");
	
	dino.scale.set(0.5,0.5)
	fire.scale.set(0.3,0.3)
	fire.angle = 10
	fire.position.set(570, 110)

	//app.stage.addChild(dino); // de este modo se agregaria directamente a la pantalla

//--Declaramos un container para pegar dino y fire en el container y no directo a la pantalla--
	const dinoWithFire: Container = new Container()

	dinoWithFire.addChild(dino);
	dinoWithFire.addChild(fire);
//--Se modifica todo el container junto que contiene a dino y fire
	dinoWithFire.scale.set(0.4, 0.4)
	dinoWithFire.x = 90
	dinoWithFire.y = 100
	//Como pedir la posicion en pantalla del elemento fire
	console.log(fire.toGlobal(new Point()));
	console.log(fire.parent.toGlobal(fire.position));
	//Mover a un punto dado de la pantalla
	// const aux = fire.parent.toLocal(new Point(0,0))
	// fire.position.x = aux.x
	// fire.position.y = aux.y
	
	app.stage.addChild(dinoWithFire) //se agrega el padre(container) a pantalla
})
Loader.shared.load();