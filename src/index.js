module.exports = function toReadable (number) {
    let hundred = number / 100;
    let tens;
    let ones = number % 10;
    let onesArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tensArr = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let result = '';
    
    if (number < 100 && number > 10) {tens = number / 10;}
    
    if (number < 10) {
        result = onesArr[number];
    } else if (number < 100) {
        result = `${tensArr[tens]} ${onesArr[ones]}`;
    }
    
    if (number === 10) {result = 'ten';}
    if (number === 100) {result = 'one hundred';}
    
    return result;
}
