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

let round = files.length;

Array.prototype.shuffle = function () {
    let length = this.length;

    while(round) {
        let index = Math.floor((round--) * Math.random());
    
        let temp = this[round];

        this[round] = this[index];

        this[index] = temp; // 배열 랜덤
    }
    return this;
}

files.shuffle();

let imgs = new Array();
for (let i = 0; i<files.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = files[i];// 이미지 미리 로딩
}

img1.src = imgs[0];
img2.src = imgs[1];

let next = 2;

function change1(img) {
    img1.src = imgs[next].src;
    next++;
    if(next == 9) {
        next = 0;
    }
}