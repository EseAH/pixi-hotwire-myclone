import { Application, Loader, Sprite } from 'pixi.js'

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

Loader.shared.add({url: "./kiss.png", name: "myDino"})
Loader.shared.add({url: "./clampy.png", name: "myClampy"});
//const clampy: Sprite = Sprite.from("myDino");

Loader.shared.onComplete.add(()=>{
	const clampy: Sprite = Sprite.from("myClampy");
	//clampy.anchor.set(0.5);
	console.log("Hola mundo!", clampy.width, clampy.height);
	clampy.x = 100;
	clampy.y = 100;

	clampy.scale.x = 0.5
	clampy.scale.y = 0.5

app.stage.addChild(clampy);
})
Loader.shared.load();