
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
import * as THREE from 'three';

function main() {
 const canvas = document.querySelector('#c');
 const renderer = new THREE.WebGLRenderer({canvas});

 const fov = 75;
 const aspect = 2;  // the canvas default
 const near = 0.1;
 const far = 5;
 const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
 camera.position.z = 2;

 const scene = new THREE.Scene();

 const boxWidth = 1;
 const boxHeight = 1;
 const boxDepth = 1;
 const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

 const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue

 const cube = new THREE.Mesh(geometry, material);
 scene.add(cube);

 renderer.render(scene, camera);
}

main();
