const roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
  
function romanToInt(s: string): number { 
    let result = 0
    let ret = s.split('').map(c => roman[c]);
      ret.forEach((data, i) => {
        if(data < ret[i+1]){
            result = result - data
        } else {
            result = result + data
        }
    })
    return result
};