const Functions = {
  menuShowHide: (id) => { 
    switch(id){
      case 'menu-legend':
        if (document.getElementById('menu-legend').classList.contains('hidden')) {
          document.getElementById('menu-legend').classList.remove('hidden');
          document.getElementById('menu-settings').classList.add('hidden');
          document.getElementById('menu-donate').classList.add('hidden');
        } else {
          document.getElementById('menu-legend').classList.add('hidden');
        }
        break;
      case 'menu-settings':
        if (document.getElementById('menu-settings').classList.contains('hidden')) {
          document.getElementById('menu-settings').classList.remove('hidden');
          document.getElementById('menu-legend').classList.add('hidden');
          document.getElementById('menu-donate').classList.add('hidden');
        } else {
          document.getElementById('menu-settings').classList.add('hidden');
        }
        break;
      case 'menu-donate':
        if (document.getElementById('menu-donate').classList.contains('hidden')) {
          document.getElementById('menu-donate').classList.remove('hidden');
          document.getElementById('menu-legend').classList.add('hidden');
          document.getElementById('menu-settings').classList.add('hidden');
        } else {
          document.getElementById('menu-donate').classList.add('hidden');
        }
        break;
      default:
        break;
    }
  }
}

export default Functions;