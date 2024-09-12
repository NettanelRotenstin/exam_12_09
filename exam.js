

function Mission1(arr) {
    const arrToReturn = arr.filter(n => n % 2 == 0)
    return arrToReturn
}

function Mission2() {

}






function Mission2(str) {
    let num = 0
    const arrFromStr = str.split(" ")
    for (let index = 0; index < arrFromStr.length; index++) {
        if (arrFromStr[index].length === 4) {
            num++
        }

    }
    return num
}

function Mission3(arrDo) {
    arrToReturn = arrDo.flat()
    return arrToReturn
}



function Mission4(arr) {

    const copyArr1 = [...arr]
    const copyArr2 = [...arr]
     



    if (copyArr1.sort(function (a, b) {return a - b}).toString() == arr.toString()) {
        return 1
    }
    if (copyArr2.sort(function (a, b) {return b - a}).toString() == arr.toString()) {
        return 2
    }
    else {
        return 0
    }
}



 










module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4,

}