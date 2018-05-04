# algorithm
algorithm  算法案例练习
<hr>

##  1、十进位数转换其他进制数 
###  自己实现的代码

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
 <hr>

##  2、冒泡排序 


 <hr>

##  3、选择排序





 <hr>

##  4、插入排序





 <hr>

##  5、归并排序







 <hr>

##  6、快速排序






 <hr>

##  7、KMP算法