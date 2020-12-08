const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// 有 active 類別的 circle 數量。
// 初始化的第一個 circle 必定有 active
let currentActivate = 1;

next.addEventListener('click', () => {
  currentActivate++;

  // 設定 boudary (上限)
  if(currentActivate > circles.length) {
    currentActivate = circles.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currentActivate--;

  // 設定 boudary (下限)
  if(currentActivate < 1) {
    currentActivate = 1;
  }
  update();
});

// update DOM，控制已經走到哪一個 step
function update() {
  circles.forEach((circle, idx) => {
    if(idx < currentActivate) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // 控制進度條的 % 數。
  const actives = document.querySelectorAll('.active');
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  // 控制 Prev & Next button 的 disabled 狀態。
  if(currentActivate === 1) {
    prev.disabled = true;
  } else if(currentActivate === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}