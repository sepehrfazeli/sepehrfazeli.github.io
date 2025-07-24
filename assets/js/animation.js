// Lazy load only the Three.js modules we need
async function loadThreeJS() {
  const [
    { Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry, MeshBasicMaterial, Mesh, Color, MathUtils },
    { OrbitControls }
  ] = await Promise.all([
    import('three'),
    import('three/examples/jsm/controls/OrbitControls.js')
  ]);
  
  return { 
    Scene, 
    PerspectiveCamera, 
    WebGLRenderer, 
    SphereGeometry, 
    MeshBasicMaterial, 
    Mesh, 
    Color, 
    MathUtils,
    OrbitControls 
  };
}

// Initialize animation only when canvas is visible
async function initAnimation() {
  const { Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry, MeshBasicMaterial, Mesh, Color, MathUtils, OrbitControls } = await loadThreeJS();

  const scene = new Scene(); 
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new WebGLRenderer({ canvas: document.getElementById('canvas') });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);

  renderer.render(scene, camera);

  const controls = new OrbitControls(camera, renderer.domElement);

  // add stars to the scene /////////////////////////////////////////////////

  const stars = [];

  function addStars() {
    const starGeometry = new SphereGeometry(0.25, 24, 24);
    const starMaterial = new MeshBasicMaterial({ color: 0xffffff });
    const star = new Mesh(starGeometry, starMaterial);
    
    const [x, y, z] = Array(3).fill().map(() => MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
    
    // Store reference to the star
    stars.push(star);
  }

  Array(200).fill().forEach(addStars);

  // Set background color based on theme
  function updateScene() {
    const currentTheme = localStorage.getItem('selected-theme');
    console.log('Current theme:', currentTheme);
    
    // Default to dark theme if no theme is set
    if (currentTheme === 'light') {
      // Light theme
      scene.background = new Color('hsl(211, 60%, 99%)');
      // Update all stars to blue
      stars.forEach(star => {
        star.material.color.set('hsla(211, 69%, 61%, 1.00)');
      });
    } else {
      // Dark theme (default)
      scene.background = new Color('hsl(211, 28%, 12%)');
      // Update all stars to white
      stars.forEach(star => {
        star.material.color.set(0xffffff);
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
}

// Start animation when page loads
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  if (canvas) {
    initAnimation();
  }
});