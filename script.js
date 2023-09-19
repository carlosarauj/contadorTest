function conta(){
    let number = ''
    for(let contador = 0; contador <= 30; contador++){
        number += `numer: ${contador}<br>`
    }
    return number
}
let  p = document.querySelector('#p')

p.innerHTML = conta()
