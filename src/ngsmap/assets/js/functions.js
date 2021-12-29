var Functions = {
  showhidemenu: function (element) { 
    let menu = document.getElementsByClassName(element)[0];
      if (menu.style.display === "none") {
        menu.style.display = "inherit";
      } else {
        menu.style.display = "none";
      }
  }
}

export default Functions;