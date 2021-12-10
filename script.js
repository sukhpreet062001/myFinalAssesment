let formElement = document.querySelector("form");
let hiddenElement = document.getElementById("hiddenElement")
formElement.elements.userNeed[2].addEventListener("click" , () => {
    hiddenElement.style.display = "block"
})


