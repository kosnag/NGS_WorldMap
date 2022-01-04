import L from 'leaflet';

const Settings = {
    Landmarks: L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-20]}}),
    Containers: L.Icon.extend({options:{iconSize:[22,22],iconAnchor:[22,22],popupAnchor:[0,-11]}}),
    Materials: L.Icon.extend({options:{iconSize:[26,26],iconAnchor:[13,13],popupAnchor:[0,-13]}}),
};

const IconLib = {
    cocoon: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks/cocoon.png'}),
    mag: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks/mag.png'}),
    ryuker: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks/ryuker.png'}),
    tower: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks/tower.png'}),
    battledia: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks/battledia.svg'}),
    uq: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks/urgent.png'}),
    
    redBox: new Settings.Containers({iconUrl:'./assets/images/icons/containers/redBox.svg'}),
    redBoxCheck: new Settings.Containers({iconUrl:'./assets/images/icons/containers/redBoxChecked.svg'}),
    greenBox: new Settings.Containers({iconUrl:'./assets/images/icons/containers/greenBox.svg'}),
    
    mineralMonotite: new Settings.Materials({iconUrl:'./assets/images/icons/minerals/monotite.png'}),
    mineralDualomite: new Settings.Materials({iconUrl:'./assets/images/icons/minerals/dualomite.png'}),
    mineralTrinite: new Settings.Materials({iconUrl:'./assets/images/icons/minerals/trinite.png'}),
    mineralTetracite: new Settings.Materials({iconUrl:'./assets/images/icons/minerals/.png'}),
    mineralPhotonQuarz: new Settings.Materials({iconUrl:'./assets/images/icons/minerals/photonQuartz.png'}),
    mineralPhotonChunk: new Settings.Materials({iconUrl:'./assets/images/icons/minerals/photonChunk.png'}),
    aelioApple: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioApple.png'}),
    aelioBanana: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioBanana.png'}),
    aelioClam: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioClam.png'}),
    aelioCrab: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioCrab.png'}),
    aelioHerb: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioHerb.png'}),
    aelioLobster: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioLobster.png'}),
    aelioMushroom: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioMushroom.png'}),
    aelioPeach: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioPeach.png'}),
    aelioPear: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioPear.png'}),
    aelioTomato: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioTomato.png'}),
    aelioTurbanShell: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioTurbanShell.png'}),
    aelioTurnip: new Settings.Materials({iconUrl:'./assets/images/icons/food/aelioTurnip.png'}),
    retemCherry: new Settings.Materials({iconUrl:'./assets/images/icons/food/retemCherry.png'}),
    retemCrab: new Settings.Materials({iconUrl:'./assets/images/icons/food/retemCrab.png'}),
    retemFruit: new Settings.Materials({iconUrl:'./assets/images/icons/food/retemFruit.png'}),
    retemMango: new Settings.Materials({iconUrl:'./assets/images/icons/food/retemMango.png'}),
    retemScallop: new Settings.Materials({iconUrl:'./assets/images/icons/food/retemScallop.png'}),
    retemSeaSlug: new Settings.Materials({iconUrl:'./assets/images/icons/food/retemSeaSlug.png'}),
    retemStrawberry: new Settings.Materials({iconUrl:'./assets/images/icons/food/retemStrawberry.png'}),
    retemUrchin: new Settings.Materials({iconUrl:'./assets/images/icons/food/retemUrchin.png'}),

    datapod: new Settings.Materials({iconUrl:'./assets/images/icons/other/dataPod.png'}),
    alphaReactor: new Settings.Materials({iconUrl:'./assets/images/icons/other/alphaReactor.png'}),
    photonScale: new Settings.Materials({iconUrl:'./assets/images/icons/other/.png'}),
    stellarFragment: new Settings.Materials({iconUrl:'./assets/images/icons/other/.png'}),
    stellarGrace: new Settings.Materials({iconUrl:'./assets/images/icons/other/.png'}),
    
    veteran: new L.icon({iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16],iconUrl:'./assets/images/icons/other/veteran.png'})
};

export default IconLib;