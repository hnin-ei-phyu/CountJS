let count = 0;

const countHeader = document.getElementById("count");
const countAddBtn = document.getElementById("add");
const countSubstractBtn = document.getElementById("substract");

countHeader.innerHTML = count;

countAddBtn.addEventListener("click", () => {
    count++;
    countHeader.innerHTML = count;
})

countSubstractBtn.addEventListener("click", () => {
    count--;
    countHeader.innerHTML = count
})
