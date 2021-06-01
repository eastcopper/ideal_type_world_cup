let round = 8;

Array.prototype.shuffle = function () {
    let length = this.length;

    while(round) {
        let index = Math.floor((round--) * Math.random());
    
        let temp = this[round];

        this[round] = this[index];

        this[index] = temp;
    }
    round /= 2;
    return this;
}

let array = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']

console.log(array)

for(let i = 0; i < round / 2; i++) {
    console.log(array[i])
}