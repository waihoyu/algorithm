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

/**
 * 算法思路，利用了求余、求模运算
 * 把每次的模unshift到一个数组里面
 * 缺点：自己实现的，方法笨拙
 */
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