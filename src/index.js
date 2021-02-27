module.exports = function toReadable (number) {
    let hundred = number / 100;
    let tens = (number / 10) % 10;
    let ones = number % 10;
    let onesArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = '';
    
    if (number < 10) {
        result = onesArr[number];
    }
    
    return number;
}
