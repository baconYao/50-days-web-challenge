const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// 滑鼠 hover 左右 split 的事件
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));