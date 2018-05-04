# Algorithm  算法
## Algorithm  算法案例练习
<hr>

##  1、十进位数转换其他进制数 
###  自己实现的代码
    /**
    * 题目：给定一个十进制数M，以及需要转换的进制数N。将十进制数M转化为N进制数。
    */
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


<hr>

##  8、输入一个正整数n,求n!(即阶乘)末尾有多少个0？ 
    /**
    * 题目：输入一个正整数n,求n!(即阶乘)末尾有多少个0？ 比如: n = 10; n! = 3628800,所以答案为2 。
    */
    /**
    * 算法思路：
    */
    