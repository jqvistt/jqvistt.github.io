const MenuButton = document.getElementById("menuButton");
const MenuBox = document.getElementById("menuBox");

MenuButton.addEventListener("click", function (){

    MenuBox.classList.toggle("open");
    MenuButton.classList.toggle("open")

});
