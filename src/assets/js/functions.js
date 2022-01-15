var Functions = {
  menuShowHide: function(element){ 
    switch(element){
      case 'menu-legend':
        if (document.getElementById('menu-legend').classList.contains('hidden-window')) {
          document.getElementById('menu-legend').classList.remove('hidden-window');
          document.getElementById('menu-settings').classList.add('hidden-window');
          //document.getElementById('menu-donate').classList.add('hidden-window');
        } else {
          document.getElementById('menu-legend').classList.add('hidden-window');
        }
        break;
      case 'menu-settings':
        if (document.getElementById('menu-settings').classList.contains('hidden-window')) {
          document.getElementById('menu-settings').classList.remove('hidden-window');
          document.getElementById('menu-legend').classList.add('hidden-window');
          //document.getElementById('menu-donate').classList.add('hidden-window');
        } else {
          document.getElementById('menu-settings').classList.add('hidden-window');
        }
        break;
      /*case 'menu-donate':
        if (document.getElementById('menu-donate').classList.contains('hidden-window')) {
          document.getElementById('menu-donate').classList.remove('hidden-window');
          document.getElementById('menu-legend').classList.add('hidden-window');
          document.getElementById('menu-settings').classList.add('hidden-window');
        } else {
          document.getElementById('menu-donate').classList.add('hidden-window');
        }
        break;*/
      default:
        break;
    }
  }
}

export default Functions;