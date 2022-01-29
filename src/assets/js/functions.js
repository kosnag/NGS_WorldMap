var Functions = {
  menuShowHide: (id) => { 
    switch(id){
      case 'menu-legend':
        if (document.getElementById('menu-legend').classList.contains('hidden')) {
          document.getElementById('menu-legend').classList.remove('hidden');
          document.getElementById('menu-settings').classList.add('hidden');
          document.getElementById('menu-support').classList.add('hidden');
        } else {
          document.getElementById('menu-legend').classList.add('hidden');
        }
        break;
      case 'menu-settings':
        if (document.getElementById('menu-settings').classList.contains('hidden')) {
          document.getElementById('menu-settings').classList.remove('hidden');
          document.getElementById('menu-legend').classList.add('hidden');
          document.getElementById('menu-support').classList.add('hidden');
        } else {
          document.getElementById('menu-settings').classList.add('hidden');
        }
        break;
      case 'menu-support':
        if (document.getElementById('menu-support').classList.contains('hidden')) {
          document.getElementById('menu-support').classList.remove('hidden');
          document.getElementById('menu-legend').classList.add('hidden');
          document.getElementById('menu-settings').classList.add('hidden');
        } else {
          document.getElementById('menu-support').classList.add('hidden');
        }
        break;
      default:
        break;
    }
  },

  checkLocalStorage: (category, item) => {
    if (window.localStorage_Settings[category][item] && window.localStorage_Settings[category][item] === 1)
      {return true}
    else
      {return false}
  },

  setLocalStorage: (category, item) => {
    if (window.localStorage_Settings[category][item] && window.localStorage_Settings[category][item] === 1)
      {
        window.localStorage_Settings[category][item]=0
        localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
      }
    else 
      {
        window.localStorage_Settings[category][item]=1
        localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
      }
  },

  placeMarker: (category, item, id) => {
    if (window.localStorage_Settings[category][item] && window.localStorage_Settings[category][item] === 1)
      {
      }
    else 
      {
      }
  }
}

export default Functions;