// Questions https://leetcode.com/problems/string-to-integer-atoi

function myAtoi(s: string): number {
    let new_s = s.split('')
    let newNumber: any = ''
    let isNegative = false, readNum = true, isPositive = false

    new_s.forEach((x: any) => {
        if(newNumber.length === 0 && Number.isNaN((+x)) && x !== 0 && x !== '-'  && x !== '+'){
            readNum = false
        }
        if(isPositive && newNumber.length === 0 && x === '+'){
            newNumber = 0
            readNum = false
        }
        if(isNegative && newNumber.length === 0 && x === '-'){
            newNumber = 0
            readNum = false
        }
        if(isPositive && (Number.isNaN(parseInt(x)) && newNumber.length === 0)){
            newNumber = 0
            readNum = false
        }
        if(isNegative && (Number.isNaN(parseInt(x)) && newNumber.length === 0)){
            newNumber = 0
            readNum = false
        }
        if(readNum){
            if(newNumber.length === 0 && x === '-'){isNegative = true} 
            if(newNumber.length === 0 && x === '+'){isPositive = true} 
            let temp_num = +x
            
            if(!Number.isNaN(temp_num) && x !== ' '){
                newNumber = newNumber + temp_num
            } else {
                if(newNumber.length > 0 && x === ' ' || x === '.'){
                    readNum = false
                }
                if(newNumber.length > 0 && x === ' '){
                    readNum = false
                }
                if(newNumber.length > 0 && x !== '.'){
                    readNum = false
                }
                if(isPositive && (!Number.isNaN(temp_num) && newNumber.length === 0)){
                    newNumber = 0
                    readNum = false
                }
                if(isNegative  && x === '+'){
                    readNum = false
                }
                if(isPositive && x === '-'){
                    readNum = false
                }
            }
        }
    })

    if(newNumber){
        const min = -(2**31);
        const max = (-min)-1;
        
        if(isNegative){
            newNumber = '-' + newNumber
            newNumber = parseInt(newNumber)
            if(newNumber <= min)
                return min;
        } else {
            parseInt(newNumber)
            if(newNumber >= max)
                return max;
        }
    } else {
        newNumber = 0
    }
    
    return +newNumber
};

// test codes
console.log(myAtoi("123-")); // 123
console.log(myAtoi("  -0012a42")); // -12
console.log(myAtoi("-91283472332")); // -2147483648
console.log(myAtoi("3.14159")); // 3
console.log(myAtoi("+-12")); // 0
console.log(myAtoi("   +0 123")); // 0
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("  0000000000012345678")); // 12345678
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("++0")); // 0
console.log(myAtoi("  0++")); // 0
console.log(myAtoi("--0")); // 0
console.log(myAtoi("  0--")); // 0
