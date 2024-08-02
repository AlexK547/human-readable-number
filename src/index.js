module.exports = function toReadable(number) {
    let num9 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let num19 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let numTens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 10) return num9[number];
    if (number < 20) return num19[number - 10];
    if (number < 100) {
        let tens = +(number + "")[0];
        let units = +(number + "")[1];
        if (units === 0) return numTens[tens - 1];
        return numTens[tens - 1] + " " + num9[units];
    }
    if (number > 99) {
        let hundreds = +(number + "")[0];
        let tens = +(number + "")[1];
        let units = +(number + "")[2];
        if (number % 100 === 0) return num9[hundreds] + " hundred";
        if (units === 0)
            return num9[hundreds] + " hundred " + numTens[tens - 1];
        if (tens === 0) return num9[hundreds] + " hundred " + num9[units];
        if (tens === 1) return num9[hundreds] + " hundred " + num19[units];
        return (
            num9[hundreds] + " hundred " + numTens[tens - 1] + " " + num9[units]
        );
    }
};
