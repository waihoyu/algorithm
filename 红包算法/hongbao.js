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
        let arr = this.average(n, precision);
        let arrResult = arr;
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            let num = Math.floor(Math.random() * item);
            let numLeft = Math.floor(Math.random() * num);
            let numRight = num - numLeft;
            arrResult[i] -= num;
            let iLeft = (i === 0) ? (arr.length - 1) : i - 1;
            let iRight = (i === arr.length - 1) ? 0 : i + 1;
            arrResult[iLeft] += numLeft;
            arrResult[iRight] += numRight;
        }
        return arrResult;
    }
    average(n, precision) {
        let avg = Math.floor(this.calcNum / n);
        let rest = this.calcNum % n;
        console.log(rest);
        let result = Array(n).fill(avg);
        let gap = Math.round((n - rest) / rest) + 1;
        let index = 0;
        while (rest > 0) {
            index = (--rest) * gap;
            result[index >= n ? (n - 1) : index]++;
        }

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
        if ((number - num) !== 0) {
            return false;
        }
        if (number === num) {
            return true;
        }
        if (typeof num === 'string') {
            return false;
        }
        return true;
    }
}

const hongbao = new RadomHongbao(200);
console.log(hongbao.split(10, 0));