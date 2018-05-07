class RadomHongbao {
    constructor(num) {
        this.num = this.getNum(num);

        // 得到一确定的小数位的位数
        console.log(this.num);
        console.log(this.num.toString().split('.')[1].length)

    }

    split(n, precision) {

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
const hongbao = new RadomHongbao(100.1211111111111111111111111111111111111111111111111111111);
hongbao.split(26, 2);
hongbao.isNumber('ss');