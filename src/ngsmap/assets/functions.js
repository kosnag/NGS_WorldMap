function showhidemenu() {
var menu = document.getElementsByClassName('menu-window')[0];
    if (menu.style.display === "none") {
      menu.style.display = "inherit";
    } else {
      menu.style.display = "none";
    }
}

export { showhidemenu };