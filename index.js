let str = document.getElementById("string");
let upper = document.getElementById("uppercase");
let lower = document.getElementById("lowercase");

upper.addEventListener('click', () => {
    let inputValue = str.value;
    let up = inputValue.toUpperCase();
    str.value = up;
    // console.log("Upper Click")
});
lower.addEventListener('click', () => {
    let inputValue = str.value;
    let up = inputValue.toLowerCase();
    str.value = up;
    // console.log("Upper Click")
});
