const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

function month(month_num) {
    if(month_num < 1 || month_num > 12){
        return "Некорректный номер месяца"
    }
    return months[month_num-1]    
}

let input = prompt("Enter number of month: ")
alert(month(input))