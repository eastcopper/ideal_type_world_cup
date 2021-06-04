const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const round = document.getElementById('round');

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
let sum1 = [];

let length = files.length

Array.prototype.shuffle = function () {
    while (length) {
        let index = Math.floor((length--) * Math.random());

        let temp = this[length];

        this[length] = this[index];

        this[index] = temp; // 배열 랜덤
    }
    return this;
}


files.shuffle();

let imgs8 = new Array();
let imgs4 = new Array();
let imgs2 = new Array();

for (let i = 0; i < files.length; i++) {
    imgs8[i] = new Image();
    imgs8[i].src = files[i];// 이미지 로딩
}

let indexNum = 0;

img1.src = imgs8[indexNum].src;
img2.src = imgs8[indexNum + 1].src;

let roundNum = 8;

function change(e) {
    if (roundNum == 8) {
        if (e.id === "img1") {
            Arr[indexNum]++;
        } else {
            Arr[indexNum + 1]++;
        }
        indexNum += 2;


        if (indexNum >= 8) {
            for (let i = 0; i < 8; i++) {
                if (Arr[i] == 0) {
                    files[i] = Arr[i];
                }
            }
            for (let i = 0; i < 8; i++) {
                if (files[i] == 0) {
                    files.splice(i, 1); // 배열 제외
                    Arr.splice(i, 1);
                    i--;
                }
            }

            indexNum = 0;
            roundNum = 4;
            
            for (let i = 0; i < 4; i++) {
                sum[i] = files[i];
            }

            for (let i = 0; i < 4; i++) {
                imgs4[i] = new Image();
                imgs4[i].src = files[i];
            }

            img1.src = imgs4[indexNum].src
            img2.src = imgs4[indexNum + 1].src
            round.innerHTML = "<div>4강</div>"
        }
        else if (indexNum < 8) {
            img1.src = imgs8[indexNum].src;
            img2.src = imgs8[indexNum + 1].src;
        }
    } // 8강
    else if (roundNum == 4) {
        if (e.id === "img1") {
            Arr[indexNum]++;
        } else {
            Arr[indexNum + 1]++;
        }

        indexNum += 2;


        if (indexNum >= 4) {
            for (let i = 0; i < 4; i++) {
                if (Arr[i] == 1) {
                    sum[i] = Arr[i];
                }
            }
            for (let i = 0; i < 4; i++) {
                if (sum[i] == 1) {
                    sum.splice(i, 1);
                    Arr.splice(i, 1);
                    i--;
                }
            }

            indexNum = 0;
            roundNum = 2;

            for (let i = 0; i < 2; i++) {
                imgs2[i] = new Image();
                imgs2[i].src = sum[i];
            }

            for (let i = 0; i < 2; i++) {
                sum1[i] = sum[i];
            }

            img1.src = imgs2[indexNum].src
            img2.src = imgs2[indexNum + 1].src
            round.innerHTML = "<div>결승</div>"
        }
        else if (indexNum < 4) {
            img1.src = imgs4[indexNum].src;
            img2.src = imgs4[indexNum + 1].src;
        }
    } // 4강
    else if (roundNum == 2) {
        if (e.id === "img1") {
            img2.remove();
            round.innerHTML = "<div>우승</div>"
        } else {    
            img1.remove();
            round.innerHTML = "<div>우승</div>"
        }
    } // 결승
}