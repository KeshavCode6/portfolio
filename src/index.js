const canvas = document.getElementById('background');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth; // Set canvas width to window width
canvas.height = window.innerHeight; // Set canvas height to window height

const gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2);
gradient.addColorStop(1, '#060026');
gradient.addColorStop(0, '#002640');

context.fillStyle = gradient;
context.fillRect(0, 0, canvas.width, canvas.height);

// Procedural Rain
const numDrops = 300;
const drops = [];

function createDrop() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 15 + 5,
    speed: Math.random() * 15 + 5,
  };
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  drops.forEach(drop => {
    context.fillStyle = "#4A6583"; // Set fill color
    context.fillRect(drop.x, drop.y, 0.75, drop.length); // Draw thinner raindrops

    drop.y += drop.speed;

    if (drop.y - drop.length > canvas.height) {
      drops[drops.indexOf(drop)] = createDrop();
    }
  });

  requestAnimationFrame(draw);
}

for (let i = 0; i < numDrops; i++) {
  drops.push(createDrop());
}

draw();

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth; // Set canvas width to window width
canvas.height = window.innerHeight; // Set canvas height to window height

})