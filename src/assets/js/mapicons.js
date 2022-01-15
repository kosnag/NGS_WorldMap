import L from 'leaflet';

const Settings = {
    Landmarks: L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-20]}}),
    Containers: L.Icon.extend({options:{iconSize:[22,22],iconAnchor:[22,22],popupAnchor:[0,-11]}}),
    Materials: L.Icon.extend({options:{iconSize:[26,26],iconAnchor:[13,13],popupAnchor:[0,-13]}}),
};

const IconLib = {
    cocoon: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks_cocoon.png'}),
    mag: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks_mag.png'}),
    ryuker: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks_ryuker.png'}),
    tower: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks_tower.png'}),
    battledia: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks_battledia.svg'}),
    uq: new Settings.Landmarks({iconUrl:'./assets/images/icons/landmarks_urgent.png'}),
    
    redBox: new Settings.Containers({iconUrl:'./assets/images/icons/containers_redBox.png'}),
    redBoxCheck: new Settings.Containers({iconUrl:'./assets/images/icons/containers_redBoxChecked.png'}),
    greenBox: new Settings.Containers({iconUrl:'./assets/images/icons/containers_greenBox.png'}),
    
    mineralMonotite: new Settings.Materials({iconUrl:'./assets/images/icons/mineral_monotite.png'}),
    mineralDualomite: new Settings.Materials({iconUrl:'./assets/images/icons/mineral_dualomite.png'}),
    mineralTrinite: new Settings.Materials({iconUrl:'./assets/images/icons/mineral_trinite.png'}),
    mineralTetracite: new Settings.Materials({iconUrl:'./assets/images/icons/mineral_tetracite.png'}),
    mineralPhotonQuarz: new Settings.Materials({iconUrl:'./assets/images/icons/mineral_photonQuartz.png'}),
    mineralPhotonChunk: new Settings.Materials({iconUrl:'./assets/images/icons/mineral_photonChunk.png'}),
    aelioApple: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioApple.png'}),
    aelioBanana: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioBanana.png'}),
    aelioClam: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioClam.png'}),
    aelioCrab: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioCrab.png'}),
    aelioHerb: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioHerb.png'}),
    aelioLobster: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioLobster.png'}),
    aelioMushroom: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioMushroom.png'}),
    aelioPeach: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioPeach.png'}),
    aelioPear: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioPear.png'}),
    aelioTomato: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioTomato.png'}),
    aelioTurbanShell: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioTurbanShell.png'}),
    aelioTurnip: new Settings.Materials({iconUrl:'./assets/images/icons/food_aelioTurnip.png'}),
    retemCherry: new Settings.Materials({iconUrl:'./assets/images/icons/food_retemCherry.png'}),
    retemCrab: new Settings.Materials({iconUrl:'./assets/images/icons/food_retemCrab.png'}),
    retemFruit: new Settings.Materials({iconUrl:'./assets/images/icons/food_retemFruit.png'}),
    retemMango: new Settings.Materials({iconUrl:'./assets/images/icons/food_retemMango.png'}),
    retemScallop: new Settings.Materials({iconUrl:'./assets/images/icons/food_retemScallop.png'}),
    retemSeaSlug: new Settings.Materials({iconUrl:'./assets/images/icons/food_retemSeaSlug.png'}),
    retemStrawberry: new Settings.Materials({iconUrl:'./assets/images/icons/food_retemStrawberry.png'}),
    retemUrchin: new Settings.Materials({iconUrl:'./assets/images/icons/food_retemUrchin.png'}),

    datapod: new Settings.Materials({iconUrl:'./assets/images/icons/other_dataPod.png'}),
    alphaReactor: new Settings.Materials({iconUrl:'./assets/images/icons/other_alphaReactor.png'}),
    photonScale: new Settings.Materials({iconUrl:'./assets/images/icons/mineral_photonScale.png'}),
    stellarSeed: new Settings.Materials({iconUrl:'./assets/images/icons/other_stellarSeed.png'}),
    stellarGrace: new Settings.Materials({iconUrl:'./assets/images/icons/other_stellarGrace.png'}),
    
    veteran: new L.icon({iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16],iconUrl:'./assets/images/icons/other_veteran.png'})
};

export default IconLib;