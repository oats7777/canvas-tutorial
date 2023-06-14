import './style.css';

function draw() {
  const canvas = document.getElementById(
    'tutorial'
  ) as HTMLCanvasElement | null;
  if (canvas?.getContext) {
    const ctx = canvas.getContext('2d');
  }
}

window.document.addEventListener('DOMContentLoaded', draw);
