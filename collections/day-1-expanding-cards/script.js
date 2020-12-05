// 取得所有的 panels
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {

  // 監聽 click 事件
  panel.addEventListener('click', () => {
    // 移除別的 panel 的 active class
    removeActiveClasses();
    // 新增 active 到 class
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}