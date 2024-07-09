function sort_list(list) {
    let numbers = list.map(function(item){
        return +item
    })
    
    let result = numbers.sort(function compare(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    })

    return result.join(" ")
}

let input = prompt("Enter your numbers: ")
alert(sort_list(input.split(" ")))