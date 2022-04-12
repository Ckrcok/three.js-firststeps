
  // Our Javascript will go here.

/* part 1 */
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  //
  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // document.body.appendChild( renderer.domElement );
  //
  // const geometry = new THREE.BoxGeometry();
  // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );
  //
  // camera.position.z = 5;
  //
  //
  //
  // function animate() {
  //   cube.rotation.x += 0.001;
  //   cube.rotation.y += 0.001;
  //   requestAnimationFrame( animate );
  //   renderer.render( scene, camera );
  // }
  //
  // animate();



/* Part 2 */
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
//
// const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );
//
// const scene = new THREE.Scene();
//
// //create a blue LineBasicMaterial
// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
//
//
// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 20, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );
//
// const geometry = new THREE.BufferGeometry().setFromPoints( points );
//
// const line = new THREE.Line( geometry, material );
//
// scene.add( line );
// renderer.render( scene, camera );



/* part 3 */

improt * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

//scene
const scene = new THREE.scene();
scene.background = new THREE.Color(0xffffff);

// camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// init camera
camera.position.set(3,20,45);

//render
const renderer = new THREE.WebGLRenderer({antialias:true});
renderrer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enable = true;

// controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.target = THREE.Vector3(0,0,-40);
controls.update();

// plane

const plane = new THREE.Mesh(new THREE.PlaneGeometry(200,200), new THREE.MeshPhongMaterial({color:0x0a7d15}));
plane.rotation.x =  -Math.PI / 2 ;
plane.reciveShadow = true;
scene.add(plane);

scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// POINT LIGHT
const light1 = new THREE.PointLight(0xff6666, 1, 100);
light1.castShadow = true;
light1.shadow.mapSize.width = 4096;
light1.shadow.mapSize.height = 4096;
scene.add(light1);

const light2 = new THREE.PointLight(0x33ff33, 1, 100);
light2.castShadow = true;
light2.shadow.mapSize.width = 4096;
light2.shadow.mapSize.height = 4096;
scene.add(light2);

// ANIMATE
function animate() {
    const now = Date.now() / 1000;
    light1.position.y = 15;
    light1.position.x = Math.cos(now) * 20;
    light1.position.z = Math.sin(now) * 20;

    light2.position.y = 15;
    light2.position.x = Math.sin(now) * 20;
    light2.position.z = Math.cos(now) * 20;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
