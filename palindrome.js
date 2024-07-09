function palindrome(source) {
    l = source.length

    for(let i = 0; i < l/2; i++){
        if(source[i] != source[l-i-1]){
            return "Нет"
        }
    }

    return "Да"
}

let input = prompt("Enter your string: ")
alert(palindrome(input))