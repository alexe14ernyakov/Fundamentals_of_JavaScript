function resplit(source) {
    return source.split(",").join(".")
}

let input = prompt("Enter words list: ")
alert(resplit(input))