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


let indexNum = 0;

img1.src = imgs[indexNum].src;
img2.src = imgs[indexNum + 1].src; 

let roundNum = 8;

function change(e) {
    if (roundNum == 8) {
        if (e.id === "img1") {
            Arr[indexNum]++;
        } else {
            Arr[indexNum + 1]++;
        }
        if (indexNum >= 8) {
            // console.log(Arr);
        }

        
        indexNum += 2;


        if (indexNum >= 8) {
            for (let i = 0; i < 8; i++) {
                if (Arr[i] == 0) {
                    files[i] = Arr[i];
                }
            }
            for (let i = 0; i < 8; i++) {
                if (files[i] === 0) {
                    files.splice(i, 1); // 배열 제외
                }
                // console.log(files[i])
            }
            indexNum = 0;
            roundNum = 4; 
        }
        img1.src = imgs[indexNum].src;
        img2.src = imgs[indexNum + 1].src;
    } // 8강
    else if (roundNum == 4) {
        if (e.id === "img1") {
            Arr[indexNum]++;
        } else {
            Arr[indexNum + 1]++;
        }
        img1.src = imgs[indexNum].src;
        img2.src = imgs[indexNum + 1].src;
    }
}