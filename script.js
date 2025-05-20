
const canvas = document.getElementById('balloons');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balloons = [];

for (let i = 0; i < 50; i++) {
  balloons.push({
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 100,
    radius: Math.random() * 20 + 10,
    color: `hsl(${Math.random() * 360}, 70%, 70%)`,
    speed: Math.random() * 2 + 1
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let b of balloons) {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.fill();
    b.y -= b.speed;
    if (b.y < -b.radius) {
      b.y = canvas.height + b.radius;
      b.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(draw);
}
draw();


const playButton = document.getElementById('playButton');
const birthdaySong = document.getElementById('birthdaySong');

playButton.addEventListener('click', () => {
  birthdaySong.play();
  playButton.style.display = 'none'; 
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
