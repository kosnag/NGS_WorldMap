const Functions = {
  menuShowHide: (id) => { 
    switch(id){
      case 'menu-legend':
        if (document.getElementById('menu-legend').classList.contains('hidden')) {
          document.getElementById('menu-legend').classList.remove('hidden');
          document.getElementById('menu-settings').classList.add('hidden');
          //document.getElementById('menu-donate').classList.add('hidden');
        } else {
          document.getElementById('menu-legend').classList.add('hidden');
        }
        break;
      
      case 'menu-settings':
        if (document.getElementById('menu-settings').classList.contains('hidden')) {
          document.getElementById('menu-settings').classList.remove('hidden');
          document.getElementById('menu-legend').classList.add('hidden');
          //document.getElementById('menu-donate').classList.add('hidden');
        } else {
          document.getElementById('menu-settings').classList.add('hidden');
        }
        break;
      /*
      case 'menu-donate':
        if (document.getElementById('menu-donate').classList.contains('hidden')) {
          document.getElementById('menu-donate').classList.remove('hidden');
          document.getElementById('menu-legend').classList.add('hidden');
          document.getElementById('menu-settings').classList.add('hidden');
        } else {
          document.getElementById('menu-donate').classList.add('hidden');
        }
        break;
      */
      default:
        break;
    }
  },
  checkDisabledItemsFromServerSettings:()=>{
    fetch("./assets/storages/settings.json").then(response=>response.json()).then(settings=>{// eslint-disable-next-line
      settings.items.landmark.map(x=>{
          if(x.disabled === true){
            window.localStorage_Settings.landmark[x.item] = 0
            localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
          }
      });// eslint-disable-next-line
      settings.items.mineral.map(x=>{
          if(x.disabled === true){
            window.localStorage_Settings.mineral[x.item] = 0
            localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
          }
      });// eslint-disable-next-line
      settings.items.food.map(x=>{
          if(x.disabled === true){
            window.localStorage_Settings.food[x.item] = 0
            localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
          }
      });// eslint-disable-next-line
      settings.items.container.map(x=>{
          if(x.disabled === true){
            window.localStorage_Settings.container[x.item] = 0
            localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
          }
      });// eslint-disable-next-line
      settings.items.other.map(x=>{
          if(x.disabled === true){
            window.localStorage_Settings.other[x.item] = 0
            localStorage.setItem("settings", JSON.stringify(window.localStorage_Settings))
          }
      });
    });
  }
}

export default Functions;