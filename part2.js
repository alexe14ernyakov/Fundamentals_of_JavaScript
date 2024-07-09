// 2е задание
function remainders(list) {
    let result = list.map(function(item, index, array){
        return item%5
    })

    return result
}

// 3е задание
function median(...args) {
    sorted = args.sort(function compare(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    })

    let l = sorted.length
    return l%2 ? sorted[Math.floor(l/2)] : (sorted[l/2] + sorted[l/2 - 1])/2
}

// 5е задание 
function copy(object) {
    let result = JSON.parse(JSON.stringify(object))

    return result
}