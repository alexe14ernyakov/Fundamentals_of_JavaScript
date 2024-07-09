function primes(n){
    let result = []

    let counter = 0
    let current = 2
    let prime

    while(counter < n){
        prime = true
        for(let i = 2; i * i <= current; i++){
            if(current%i === 0){
                prime = false
                break
            }
        }

        if(prime){
            result.push(current)
            counter++
        }
        
        current++
    }

    return result.join(" ")
}

let input = prompt("Enter number of primes: ")
alert(primes(input))