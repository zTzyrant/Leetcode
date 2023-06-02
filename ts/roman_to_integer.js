var roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
function romanToInt(s) {
    var result = 0;
    var ret = s.split('').map(function (c) { return roman[c]; });
    ret.forEach(function (data, i) {
        if (data < ret[i + 1]) {
            result = result - data;
        }
        else {
            result = result + data;
        }
    });
    return result;
}
;
