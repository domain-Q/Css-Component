let counter = document.getElementById("counter")
let increase = document.getElementById("increment")
let decrease = document.getElementById("Decrement")
var counterval = 0;

function update(change){
    counterval += change;
    counter.innerText= counterval;
}
increase.addEventListener("click" ,()=>update(1))
decrease.addEventListener("click" ,()=>update(-1))