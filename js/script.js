let mob_menu = document.getElementById("burger_menu");
let menu_items = document.getElementById("menu_items");
let is_open = false;

mob_menu.addEventListener("click", function () {
  if (is_open == false) {
    menu_items.classList.remove("hidden");
    menu_items.classList.add("block");
    is_open = true;
  } else {
    menu_items.classList.remove("block");
    menu_items.classList.add("hidden");
    is_open = false;
  }
});