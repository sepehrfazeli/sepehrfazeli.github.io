import { OrbitControls } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';


const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);


const controls = new OrbitControls(camera, renderer.domElement);

// add stars to the scene /////////////////////////////////////////////////

const stars = [];

function addStars() {
  const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
  const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(starGeometry, starMaterial);
  
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
  
  // Store reference to the star
  stars.push(star);
}

Array(200).fill().forEach(addStars);

scene.background = new THREE.Color('hsl(211, 28%, 12%)')
const selectedTheme = localStorage.getItem('selected-theme');

// Set background color based on theme
function updateScene() {
  const currentTheme = localStorage.getItem('selected-theme');
  console.log('Current theme:', currentTheme);
  
  if (currentTheme === 'dark') {
    // Dark theme
    scene.background = new THREE.Color('hsl(211, 28%, 12%)');
    // Update all stars to white
    stars.forEach(star => {
      star.material.color.set(0xffffff);
    });
  } else {
    // Light theme
    scene.background = new THREE.Color('hsl(211, 60%, 99%)');
    // Update all stars to blue
    stars.forEach(star => {
      star.material.color.set('hsla(211, 69%, 61%, 1.00)');
    });
  }
}

// Set initial background
updateScene();

window.addEventListener('themeChanged', (e) => {
  console.log('Theme changed event received:', e.detail.theme);
  updateScene();
});


function animate() {
  requestAnimationFrame(animate);
  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;
  camera.position.z -= 0.01;

  controls.update();
  renderer.render(scene, camera);
}

animate();


function onScroll() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = 30 + t * -0.01;
}
window.addEventListener('scroll', onScroll);