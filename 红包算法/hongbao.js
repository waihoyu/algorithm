class RadomHongbao {
    constructor(num) {
        this.num = this.getNum(num);
        // 得到一确定的小数位的位数
        try {
            this.multiple = this.num.toString().split('.')[1].length
        } catch (e) {
            this.multiple = 0;
        }
        //将小数放大 指数倍成整数
        this.calcNum = this.num * Math.pow(10, this.multiple);
    }
    split(n, precision) {
        // this.num
        console.log(this.calcNum);
        console.log(this.calcNum % n + 'test');
        let arr = this.average(n, precision);
        console.log(arr);
    }
    average(n, precision) {
        let avg = Math.floor(this.calcNum / n);
        let result = Array(n).fill(avg);
        return result.map((item) => {
            return (item / Math.pow(10, this.multiple))
        });
    }
    getNum(num, defaultNum = 0) {
        return this.isNumber(num) ? num : defaultNum;
    }

    isNumber(num) {
        //各种可能出现问题的，排除
        let number = +num; //加号 的作用  
        console.log(number);
        if (number === num) {

        }
        if (typeof num === 'string') {
            return false;
        }
        return true;
    }
}

// 200 => 总金额
const hongbao = new RadomHongbao(100.12);
hongbao.split(26, 2);