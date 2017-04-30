# webvr-webpack2-boilerplate

> A webvr multi-pages project for three.js, es6/7, webpack2 and postcss.

![](http://upload-images.jianshu.io/upload_images/1939855-bc93667d702feed0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Features

* webvr: a webvr boilerplate supporting scenes changing
* three.js: use as the global varriable
* es6/7: by babel and it's presets and plugins
* postcss: by postcss-loader
* webpack2 provides faster compilation

## Installation

    $ npm install
    # or
    $ yarn install

## Configuration

You can custom your local environment port(default 9000) via `webpack/webpack.dev.js`.

## Run in development

    $ npm start

## Build for production

    $ npm run build

This will generator minified scripts to `dist/`.

## Create webvr page

See the homepage in `src/index.js` and other pages in `src/page`

| API | type | description |
|:-----------|------------:|:------------:|
| WebVR.Scene       |        THREE.Scene |     global webvr scene     
| WebVR.Camera     |      THREE.PerspectiveCamera |    global webvr eyes    
| WebVR.Renderer       |        THREE.Renderer |     global webvr renderer     
| start         |          function |      excute before the first rendering      
| loaded       |       function |    excute after all the textures,3d models and audio are loaded    
| update    |     function |   excute during each rendering

Here comes the basic script for webvr page.

```
import VRPage from 'common/js/VRPage';

import ASSET_TEXTURE_BOX from '../assets/texture/box.jpg';
class Index extends VRPage {
	constructor() {
		super({domContainer:document.querySelector('.main-page')});
	}
	start() {
		let geometry = new THREE.CubeGeometry(5,5,5);
		let material = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load(ASSET_TEXTURE_BOX) } );
		this.box = new THREE.Mesh(geometry,material);
        this.box.position.set(3,-2,-3);
        // add gaze eventLisenter
        this.box.on('gaze',mesh => { // gazeIn trigger
            mesh.scale.set(1.2,1.2,1.2);
        },mesh => { // gazeOut trigger
            mesh.scale.set(1,1,1);
        });
		WebVR.Scene.add(box);
	}
	loaded() {
        console.log(`${ASSET_TEXTURE_BOX} has been loaded.`);
	}
	update(delta) {
		this.box.rotation.y += 0.05;
	}
}
export default (() => {
	return new Index();
})();
```
## Forward Pages
It is no need to fetch more html,just fetch the script of page when you need to go forward other pages.
```
WebVR.cleanPage(); // clear object3d and events in current page
require('bundle-loader!page/page.js'); // fetch and load the next page
```
and the page code style is like `index.js`
## Need Help?

Ask questions [here](https://github.com/yorkchan94/webvr-webpack2-boilerplate/issues).

## Any advise?

PR welcome [here](https://github.com/yorkchan94/webvr-webpack2-boilerplate/pulls).

## Contributors

YorkChan <yorkchan94@gmail.com>

And thanks to Micooz's project [es6-webpack2-boilerplate](https://github.com/micooz/es6-webpack2-boilerplate)

## License

MIT
