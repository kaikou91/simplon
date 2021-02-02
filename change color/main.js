let input = document.getElementById("color");
let body = document.querySelector("body");

input.addEventListener("input", () => {
    console.log(input.value);
    body.style.background = input.value;
})