import './style.css';

function drawSquare() {
  // fillRect(x, y, width, height) - 색칠된 직사각형을 그립니다.
  // strokeRect(x, y, width, height) - 직사각형 윤곽선을 그립니다.
  // clearRect(x, y, width, height) - 특정 부분을 지우는 직사각형을 그립니다. 이 지워진 부분은 완전히 투명해집니다.

  const canvas = document.getElementById(
    'tutorial'
  ) as HTMLCanvasElement | null;
  if (canvas?.getContext) {
    const ctx = canvas.getContext('2d')!;

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

function drewTriangle() {
  // beginPath() - 새로운 경로를 만듭니다. 경로를 만들면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용됩니다.
  // closePath() - 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
  // stroke() - 윤곽선을 이용하여 도형을 그립니다.
  // fill() - 경로의 내부를 채워서 내부가 채워진 도형을 그립니다.
  const canvas = document.getElementById(
    'tutorial'
  ) as HTMLCanvasElement | null;
  if (canvas?.getContext) {
    const ctx = canvas.getContext('2d')!;

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}

window.document.addEventListener('DOMContentLoaded', () => {
  // drawSquare();
  drewTriangle();
});
