// Implement Array.prototype.filter

// Problem statement, implement the array filter function as it is utlized in JS

// My solution
var myArr = [1, 2, 4, 5]

// Implementation
Array.prototype.myFilter = function (callback) {
    const newArr = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArr.push(this[i])
        }
    }

    return newArr
}

const finalArr = myArr.myFilter((index) => {
    if (index % 2 === 0) {
        return true
    } else {
        return false
    }
})

console.log(finalArr)