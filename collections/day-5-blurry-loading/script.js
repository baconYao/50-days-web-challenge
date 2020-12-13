const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0 ;
let int = setInterval(blurring, 30);

function blurring() {
    load++;
    if(load > 99) {
        clearInterval(int);
    }
    loadText.innerHTML = `${load}%`;
    // 0-100 對應到 1-0 (因為 opacity 的作用範圍是0~1)
    // 這裡是一個讓載入的數字逐漸消失的效果
    loadText.style.opacity = scale(load, 0 , 100, 1, 0);

    // 這裡是一個讓載入的圖片從模糊逐漸清晰的效果
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// 將某範圍的數值對應到另一個範圍的數值
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}