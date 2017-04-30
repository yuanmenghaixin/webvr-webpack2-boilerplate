webpackJsonp([0],{316:function(e,t,a){"use strict";(function(e,r){function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),l=a(87),u=i(l),d=a(89),c=i(d),p=a(322),f=i(p),m=a(88),v=i(m),g=a(321),b=i(g),x=a(320),w=i(x);a(319),a(318);var y=function(t){function a(){return s(this,a),n(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return o(a,t),h(a,[{key:"start",value:function(){this.addEnvAudio(v.default),this.addPanorama(1e3,f.default),this.addBallon(),this.addDirectLight()}},{key:"loaded",value:function(){this.envSound.play()}},{key:"addPanorama",value:function(t,a){var i=new e.SphereGeometry(t,50,50),s=new e.MeshBasicMaterial({map:(new e.TextureLoader).load(a),side:e.BackSide}),n=new e.Mesh(i,s);return r.Scene.add(n),n}},{key:"addEnvAudio",value:function(t){var a=this;this.envSound=new e.Audio(r.AudioListener),r.Scene.add(this.envSound);var i=new e.AudioLoader;i.load(t,function(e){a.envSound.setBuffer(e),a.envSound.setLoop(!0)})}},{key:"addDirectLight",value:function(){r.Scene.add(new e.AmbientLight(14540253));var t=new e.DirectionalLight(14540236,.3);return t.position.set(100,100,100),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=512,t.shadow.camera.near=50,t.shadow.camera.far=500,t.shadow.camera.left=-500,t.shadow.camera.right=500,t.shadow.camera.top=150,t.shadow.camera.bottom=-150,r.Scene.add(t),t}},{key:"addBallon",value:function(){var t=new e.MTLLoader;t.load(w.default,function(t){t.preload();var a=new e.OBJLoader;a.setMaterials(t),a.load(b.default,function(e){e.position.set(20,20,-100),e.scale.set(.1,.1,.1);var t=e.position,a=t.x,i=t.y,s=t.z,n=new c.default.Tween(e.position).to({x:a-20,y:i+150,z:s-80},1e4).easing(c.default.Easing.Sinusoidal.InOut);e.on("gaze",function(e){n.start()}),r.Scene.add(e)})})}},{key:"update",value:function(){c.default.update()}}]),a}(u.default);t.default=function(){return new y}()}).call(t,a(28),a(60))},318:function(e,t,a){"use strict";(function(e){e.MTLLoader=function(t){this.manager=void 0!==t?t:e.DefaultLoadingManager},Object.assign(e.MTLLoader.prototype,e.EventDispatcher.prototype,{load:function(t,a,r,i){var s=this,n=new e.XHRLoader(this.manager);n.setPath(this.path),n.load(t,function(e){a(s.parse(e))},r,i)},setPath:function(e){this.path=e},setTexturePath:function(e){this.texturePath=e},setBaseUrl:function(e){console.warn("THREE.MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead."),this.setTexturePath(e)},setCrossOrigin:function(e){this.crossOrigin=e},setMaterialOptions:function(e){this.materialOptions=e},parse:function(t){for(var a=t.split("\n"),r={},i=/\s+/,s={},n=0;n<a.length;n++){var o=a[n];if(o=o.trim(),0!==o.length&&"#"!==o.charAt(0)){var h=o.indexOf(" "),l=h>=0?o.substring(0,h):o;l=l.toLowerCase();var u=h>=0?o.substring(h+1):"";if(u=u.trim(),"newmtl"===l)r={name:u},s[u]=r;else if(r)if("ka"===l||"kd"===l||"ks"===l){var d=u.split(i,3);r[l]=[parseFloat(d[0]),parseFloat(d[1]),parseFloat(d[2])]}else r[l]=u}}var c=new e.MTLLoader.MaterialCreator(this.texturePath||this.path,this.materialOptions);return c.setCrossOrigin(this.crossOrigin),c.setManager(this.manager),c.setMaterials(s),c}}),e.MTLLoader.MaterialCreator=function(t,a){this.baseUrl=t||"",this.options=a,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.side=this.options&&this.options.side?this.options.side:e.FrontSide,this.wrap=this.options&&this.options.wrap?this.options.wrap:e.RepeatWrapping},e.MTLLoader.MaterialCreator.prototype={constructor:e.MTLLoader.MaterialCreator,setCrossOrigin:function(e){this.crossOrigin=e},setManager:function(e){this.manager=e},setMaterials:function(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}},convert:function(e){if(!this.options)return e;var t={};for(var a in e){var r=e[a],i={};t[a]=i;for(var s in r){var n=!0,o=r[s],h=s.toLowerCase();switch(h){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(o=[o[0]/255,o[1]/255,o[2]/255]),this.options&&this.options.ignoreZeroRGBs&&0===o[0]&&0===o[1]&&0===o[2]&&(n=!1)}n&&(i[h]=o)}}return t},preload:function(){for(var e in this.materialsInfo)this.create(e)},getIndex:function(e){return this.nameLookup[e]},getAsArray:function(){var e=0;for(var t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray},create:function(e){return void 0===this.materials[e]&&this.createMaterial_(e),this.materials[e]},createMaterial_:function(t){function a(e,t){if(!s[e]){var a=r.getTextureParams(t,s),i=r.loadTexture(n(r.baseUrl,a.url));i.repeat.copy(a.scale),i.offset.copy(a.offset),i.wrapS=r.wrap,i.wrapT=r.wrap,s[e]=i}}var r=this,i=this.materialsInfo[t],s={name:t,side:this.side},n=function(e,t){return"string"!=typeof t||""===t?"":/^https?:\/\//i.test(t)?t:e+t};for(var o in i){var h=i[o];if(""!==h)switch(o.toLowerCase()){case"kd":s.color=(new e.Color).fromArray(h);break;case"ks":s.specular=(new e.Color).fromArray(h);break;case"map_kd":a("map",h);break;case"map_ks":a("specularMap",h);break;case"map_bump":case"bump":a("bumpMap",h);break;case"ns":s.shininess=parseFloat(h);break;case"d":h<1&&(s.opacity=h,s.transparent=!0);break;case"Tr":h>0&&(s.opacity=1-h,s.transparent=!0)}}return this.materials[t]=new e.MeshPhongMaterial(s),this.materials[t]},getTextureParams:function(t,a){var r,i={scale:new e.Vector2(1,1),offset:new e.Vector2(0,0)},s=t.split(/\s+/);return r=s.indexOf("-bm"),r>=0&&(a.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-s"),r>=0&&(i.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(i.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),i.url=s.join(" ").trim(),i},loadTexture:function(t,a,r,i,s){var n,o=e.Loader.Handlers.get(t),h=void 0!==this.manager?this.manager:e.DefaultLoadingManager;return null===o&&(o=new e.TextureLoader(h)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin),n=o.load(t,r,i,s),void 0!==a&&(n.mapping=a),n}}}).call(t,a(28))},319:function(e,t,a){"use strict";(function(e){e.OBJLoader=function(t){this.manager=void 0!==t?t:e.DefaultLoadingManager,this.materials=null,this.regexp={vertex_pattern:/^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,normal_pattern:/^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,uv_pattern:/^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,face_vertex:/^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,face_vertex_uv:/^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,face_vertex_uv_normal:/^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,face_vertex_normal:/^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,object_pattern:/^[og]\s*(.+)?/,smoothing_pattern:/^s\s+(\d+|on|off)/,material_library_pattern:/^mtllib /,material_use_pattern:/^usemtl /}},e.OBJLoader.prototype={constructor:e.OBJLoader,load:function(t,a,r,i){var s=this,n=new e.XHRLoader(s.manager);n.setPath(this.path),n.load(t,function(e){a(s.parse(e))},r,i)},setPath:function(e){this.path=e},setMaterials:function(e){this.materials=e},_createParserState:function(){var e={objects:[],object:{},vertices:[],normals:[],uvs:[],materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1)return this.object.name=e,void(this.object.fromDeclaration=t!==!1);var a=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],uvs:[]},materials:[],smooth:!0,startMaterial:function(e,t){var a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);var r={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==a?a.smooth:this.smooth,groupStart:void 0!==a?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){var t={index:"number"==typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(r),r},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){var t=this.currentMaterial();if(t&&t.groupEnd===-1&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(var a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},a&&a.name&&"function"==typeof a.clone){var r=a.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){var a=parseInt(e,10);return 3*(a>=0?a-1:a+t/3)},parseNormalIndex:function(e,t){var a=parseInt(e,10);return 3*(a>=0?a-1:a+t/3)},parseUVIndex:function(e,t){var a=parseInt(e,10);return 2*(a>=0?a-1:a+t/2)},addVertex:function(e,t,a){var r=this.vertices,i=this.object.geometry.vertices;i.push(r[e+0]),i.push(r[e+1]),i.push(r[e+2]),i.push(r[t+0]),i.push(r[t+1]),i.push(r[t+2]),i.push(r[a+0]),i.push(r[a+1]),i.push(r[a+2])},addVertexLine:function(e){var t=this.vertices,a=this.object.geometry.vertices;a.push(t[e+0]),a.push(t[e+1]),a.push(t[e+2])},addNormal:function(e,t,a){var r=this.normals,i=this.object.geometry.normals;i.push(r[e+0]),i.push(r[e+1]),i.push(r[e+2]),i.push(r[t+0]),i.push(r[t+1]),i.push(r[t+2]),i.push(r[a+0]),i.push(r[a+1]),i.push(r[a+2])},addUV:function(e,t,a){var r=this.uvs,i=this.object.geometry.uvs;i.push(r[e+0]),i.push(r[e+1]),i.push(r[t+0]),i.push(r[t+1]),i.push(r[a+0]),i.push(r[a+1])},addUVLine:function(e){var t=this.uvs,a=this.object.geometry.uvs;a.push(t[e+0]),a.push(t[e+1])},addFace:function(e,t,a,r,i,s,n,o,h,l,u,d){var c,p=this.vertices.length,f=this.parseVertexIndex(e,p),m=this.parseVertexIndex(t,p),v=this.parseVertexIndex(a,p);if(void 0===r?this.addVertex(f,m,v):(c=this.parseVertexIndex(r,p),this.addVertex(f,m,c),this.addVertex(m,v,c)),void 0!==i){var g=this.uvs.length;f=this.parseUVIndex(i,g),m=this.parseUVIndex(s,g),v=this.parseUVIndex(n,g),void 0===r?this.addUV(f,m,v):(c=this.parseUVIndex(o,g),this.addUV(f,m,c),this.addUV(m,v,c))}if(void 0!==h){var b=this.normals.length;f=this.parseNormalIndex(h,b),m=h===l?f:this.parseNormalIndex(l,b),v=h===u?f:this.parseNormalIndex(u,b),void 0===r?this.addNormal(f,m,v):(c=this.parseNormalIndex(d,b),this.addNormal(f,m,c),this.addNormal(m,v,c))}},addLineGeometry:function(e,t){this.object.geometry.type="Line";for(var a=this.vertices.length,r=this.uvs.length,i=0,s=e.length;i<s;i++)this.addVertexLine(this.parseVertexIndex(e[i],a));for(var n=0,s=t.length;n<s;n++)this.addUVLine(this.parseUVIndex(t[n],r))}};return e.startObject("",!1),e},parse:function(t){console.time("OBJLoader");var a=this._createParserState();t.indexOf("\r\n")!==-1&&(t=t.replace(/\r\n/g,"\n")),t.indexOf("\\\n")!==-1&&(t=t.replace(/\\\n/g,""));for(var r=t.split("\n"),i="",s="",n="",o=0,h=[],l="function"==typeof"".trimLeft,u=0,d=r.length;u<d;u++)if(i=r[u],i=l?i.trimLeft():i.trim(),o=i.length,0!==o&&(s=i.charAt(0),"#"!==s))if("v"===s)if(n=i.charAt(1)," "===n&&null!==(h=this.regexp.vertex_pattern.exec(i)))a.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));else if("n"===n&&null!==(h=this.regexp.normal_pattern.exec(i)))a.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));else{if("t"!==n||null===(h=this.regexp.uv_pattern.exec(i)))throw new Error("Unexpected vertex/normal/uv line: '"+i+"'");a.uvs.push(parseFloat(h[1]),parseFloat(h[2]))}else if("f"===s)if(null!==(h=this.regexp.face_vertex_uv_normal.exec(i)))a.addFace(h[1],h[4],h[7],h[10],h[2],h[5],h[8],h[11],h[3],h[6],h[9],h[12]);else if(null!==(h=this.regexp.face_vertex_uv.exec(i)))a.addFace(h[1],h[3],h[5],h[7],h[2],h[4],h[6],h[8]);else if(null!==(h=this.regexp.face_vertex_normal.exec(i)))a.addFace(h[1],h[3],h[5],h[7],void 0,void 0,void 0,void 0,h[2],h[4],h[6],h[8]);else{if(null===(h=this.regexp.face_vertex.exec(i)))throw new Error("Unexpected face line: '"+i+"'");a.addFace(h[1],h[2],h[3],h[4])}else if("l"===s){var c=i.substring(1).trim().split(" "),p=[],f=[];if(i.indexOf("/")===-1)p=c;else for(var m=0,v=c.length;m<v;m++){var g=c[m].split("/");""!==g[0]&&p.push(g[0]),""!==g[1]&&f.push(g[1])}a.addLineGeometry(p,f)}else if(null!==(h=this.regexp.object_pattern.exec(i))){var b=(" "+h[0].substr(1).trim()).substr(1);a.startObject(b)}else if(this.regexp.material_use_pattern.test(i))a.object.startMaterial(i.substring(7).trim(),a.materialLibraries);else if(this.regexp.material_library_pattern.test(i))a.materialLibraries.push(i.substring(7).trim());else{if(null===(h=this.regexp.smoothing_pattern.exec(i))){if("\0"===i)continue;throw new Error("Unexpected line: '"+i+"'")}var x=h[1].trim().toLowerCase();a.object.smooth="1"===x||"on"===x;var w=a.object.currentMaterial();w&&(w.smooth=a.object.smooth)}a.finalize();var y=new e.Group;y.materialLibraries=[].concat(a.materialLibraries);for(var u=0,d=a.objects.length;u<d;u++){var L=a.objects[u],_=L.geometry,M=L.materials,j="Line"===_.type;if(0!==_.vertices.length){var O=new e.BufferGeometry;O.addAttribute("position",new e.BufferAttribute(new Float32Array(_.vertices),3)),_.normals.length>0?O.addAttribute("normal",new e.BufferAttribute(new Float32Array(_.normals),3)):O.computeVertexNormals(),_.uvs.length>0&&O.addAttribute("uv",new e.BufferAttribute(new Float32Array(_.uvs),2));for(var k=[],S=0,A=M.length;S<A;S++){var E=M[S],w=void 0;if(null!==this.materials&&(w=this.materials.create(E.name),j&&w&&!(w instanceof e.LineBasicMaterial))){var F=new e.LineBasicMaterial;F.copy(w),w=F}w||(w=j?new e.LineBasicMaterial:new e.MeshPhongMaterial,w.name=E.name),w.shading=E.smooth?e.SmoothShading:e.FlatShading,k.push(w)}var I;if(k.length>1){for(var S=0,A=M.length;S<A;S++){var E=M[S];O.addGroup(E.groupStart,E.groupCount,S)}var V=new e.MultiMaterial(k);I=j?new e.LineSegments(O,V):new e.Mesh(O,V)}else I=j?new e.LineSegments(O,k[0]):new e.Mesh(O,k[0]);I.name=L.name,y.add(I)}}return console.timeEnd("OBJLoader"),y}}}).call(t,a(28))},320:function(e,t,a){e.exports=a.p+"d2258f8915435dc461cab78efb10fbe6.mtl"},321:function(e,t,a){e.exports=a.p+"e0a62b5153bfe26332cb1568584086ef.obj"},322:function(e,t,a){e.exports=a.p+"85f02261ff6efd802e7348db41842fe2.jpg"}});