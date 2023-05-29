
function showMessage(){
    let message = "Я учу JavaScript!";
    console.log(`"${message}"`);
}
showMessage()


let year = prompt('Введите год');
let yes = 'Год является високосным (366 дней).';
let no = 'Год не високосный (у него 365 дней).';
if (year%4 == 0) {
    if (year%100 == 0){
        if (year%400 == 0){
            alert (yes)
        }
        else {alert (no)}
        
    } else{
        alert (yes)
    }
} else {
    alert (no)
}

