const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

let files = ["./asset/1.png",
    "./asset/2.png",
    "./asset/3.png",
    "./asset/4.png",
    "./asset/5.png",
    "./asset/6.png",
    "./asset/7.png",
    "./asset/8.png"]; // 사진 배열


let Arr = new Array();
for (var i = 0; i < 8; i++) {
    Arr.push(0);
}
// [0,0,0....0]

let AnyArr = [];

let sum = [];

for (let i = 0; i < files.length; i++) {
    sum[i] = files[i];
}

let round = files.length;

Array.prototype.shuffle = function () {
    let length = this.length;

    while (round) {
        let index = Math.floor((round--) * Math.random());

        let temp = this[round];

        this[round] = this[index];

        this[index] = temp; // 배열 랜덤
    }
    return this;
}

files.shuffle();

let imgs = new Array();
for (let i = 0; i < files.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = files[i];// 이미지 미리 로딩
}


img1.src = imgs[0].src;
img2.src = imgs[1].src;

let next1 = 2;
let next2 = 3;

function change() {
    img1.src = imgs[next1].src;
    img2.src = imgs[next2].src;
    next1 += 2;
    next2 += 2;

    if (next1 >= 9 && next2 >= 9) {
        next1 = 0;
        next2 = 0;
    }
}
for (let i = 0; i < files.length; i++) {

}