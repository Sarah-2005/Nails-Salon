const one = document.querySelector("#one");
const nails1 = document.querySelector("#nails1");
const two = document.querySelector("#two");
const nails2 = document.querySelector("#nails2");
const three = document.querySelector("#three");
const spa1 = document.querySelector("#spa1");
const four = document.querySelector("#four");
const spa2 = document.querySelector("#spa2");

one.addEventListener("click", () => {
    nails1.classList.toggle("active");
})
two.addEventListener("click", () => {
    nails2.classList.toggle("active");
})
three.addEventListener("click", () => {
    spa1.classList.toggle("active");
})
four.addEventListener("click", () => {
    spa2.classList.toggle("active");
})
document.querySelectorAll(".a").forEach(n => n. addEventListener("click" , () => {
        one.classList.remove("active");
        nails1.classList.remove("active");
    }))



