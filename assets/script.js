let slider = document.getElementById('slider')
let price = document.getElementsByClassName("price")
let input = document.querySelector("input[type=checkbox")

let flag = true

slider.addEventListener("click", () => {
    for(let i = 0; i < price.length; i++){
        price[i].innerHTML =  flag ? `${Math.floor(price[i].innerHTML / 10)}.99` : `${Math.floor(price[i].innerHTML * 10)}.99`
    }

    flag = !flag
})