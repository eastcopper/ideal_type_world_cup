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

Array.prototype.shuffle = function () {
    
<<<<<<< Updated upstream
=======
let round = files.length;
>>>>>>> Stashed changes

    while (round) {
        let index = Math.floor((round--) * Math.random());

        let temp = this[round];

        this[round] = this[index];

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

        console.log(Arr)

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
            }
            for (let i = 0; i < 8; i++) {
                console.log(files[i])
            }
            indexNum = 0;
            roundNum = 4;

            
            for (let i = 0; i < 4; i++) {
                imgs4[i] = new Image();
                imgs4[i].src = files[i];// 이미지 로딩
            }

            for (let i = 0; i < 4; i++) {
                // console.log(files[i])
            }

            files.shuffle();

            img1.src = imgs4[indexNum].src
            img2.src = imgs4[indexNum + 1].src
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

        console.log(Arr)
        indexNum += 2;


        if (indexNum >= 4) {
            for (let i = 0; i < 8; i++) {
                if (Arr[i] == 1) {
                    files[i] = Arr[i];
                }
            }
            for (let i = 0; i < 8; i++) {
                if (files[i] === 1) {
                    files.splice(i, 1); // 배열 제외
                    Arr.splice(i, 1);
                }
            }

            indexNum = 0;
            roundNum = 2;
            
            for (let i = 0; i < 2; i++) {
                imgs2[i] = new Image();
                imgs2[i].src = files[i];// 이미지 로딩
            }
            
            console.log(imgs2[0].src)
            console.log(imgs2[1].src)

            img1.src = imgs2[indexNum].src
            img2.src = imgs2[indexNum + 1].src

        }
        else if (indexNum < 4) {
            img1.src = imgs4[indexNum].src;
            img2.src = imgs4[indexNum + 1].src;
        }
    }// 4강
    else if (roundNum == 2) {
        
    }
}