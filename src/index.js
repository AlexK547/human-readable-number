module.exports = function toReadable (number) {
    let hundred = Math.floor(number / 100) - 1;
    let tens;
    let ones = number % 10;
    let onesArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tensArr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundredArr = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    
    let result = '';
    
    if (number < 100 && number > 10) {tens = Math.floor(number / 10) - 1;}
    if (number > 99) {tens = (Math.floor(number / 10)) % 10 - 1;}
    
    if (number < 10) {
        result = onesArr[number];
    } else if (number < 100) {
        result = `${tensArr[tens]} ${onesArr[ones]}`;
    } else {
        result = `${hundredArr[hundred]} ${tensArr[tens]} ${onesArr[ones]}`;
    }
    
    if (number < 100 && number > 10 && (number % 10 === 0)) {
        tens = Math.floor(number / 10) - 1;
        result = tensArr[tens];
    }
    
    if (number > 100 && (number % 10 === 0)) {
        result = `${hundredArr[hundred]} ${tensArr[tens]}`;
    }
    
    if (hundred !== 0 && tens === -1) {
        result = `${hundredArr[hundred]} ${onesArr[ones]}`;
    }
    
    if (number % 100 === 0) {
        result = hundredArr[hundred];
    }
    
    if (number === 100) {result = 'one hundred';}
    
    return result;
}
