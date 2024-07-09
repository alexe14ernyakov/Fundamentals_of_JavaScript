function check_brackets(source) {
    let stack = []
    
    for(let i = 0; i < source.length; i++){
        if(source[i] !== '(' || source[i] !== ')'){
            return "Неправильная"
        }

        if(source[i] == '('){
            stack.push(source[i])
        }

        if(source[i] == ')'){
            if(stack.length == 0){
                return "Неправильная"
            }
            else{
                stack.pop()
                continue
            }
        }
    }

    if(stack.length != 0){
        return "Неправильная"
    }

    return "Правильная"
}

let input = prompt("Enter your sequence: ")
alert(check_brackets(input))