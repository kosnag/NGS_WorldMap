var Functions = {
  menuShowHide: function (element) { 
    switch (element) {
      case 'menu-mapLegend':
        if (document.getElementById('menu-mapLegend').classList.contains('hidden-window')) {
          document.getElementById('menu-mapLegend').classList.remove('hidden-window');
          document.getElementById('menu-settings').classList.add('hidden-window');
        } else {
          document.getElementById('menu-mapLegend').classList.add('hidden-window');
        }
        break;
      case 'menu-settings':
        if (document.getElementById('menu-settings').classList.contains('hidden-window')) {
          document.getElementById('menu-settings').classList.remove('hidden-window');
          document.getElementById('menu-mapLegend').classList.add('hidden-window');
        } else {
          document.getElementById('menu-settings').classList.add('hidden-window');
        }
        break;
      default:
        break;
    }
  }
}

export default Functions;