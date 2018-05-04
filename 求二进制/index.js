/**
 *求二进制
 */

// function Binary() {
//     console.log('进入转化');
//     var a = 100;
//     var arr = [];
//     // console.log(Math.floor(a / 2));

//     while (a != 0 && a != 1) {
//         // console.log(a);
//         b = a % 2;
//         //c = a / 2;
//         console.log(b)
//         arr.unshift(b);
//         a = Math.floor(a / 2)
//     }
//     arr.unshift(a)
//     console.log(arr);
// }
// Binary();


function Hexade(bin, number) {
    var tmpNum = number;
    var arr = [];
    var str = '';
    var bin = bin || 10;
    while (tmpNum != 0 && tmpNum != 1) {
        b = tmpNum % bin;
        if (bin > 10 && bin <= 16 && b > 9) {
            b = String.fromCharCode(b - 10 + 65);
            arr.unshift(b);
        } else
            arr.unshift(b);
        tmpNum = Math.floor(tmpNum / bin)
    }
    arr.unshift(tmpNum)
    console.log(arr);
}
Hexade(15, 44444445);