import L from 'leaflet';

const Setup = {
    Landmarks: L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-20]}}),
    Containers: L.Icon.extend({options:{iconSize:[22,22],iconAnchor:[22,22],popupAnchor:[0,-11]}}),
    Materials: L.Icon.extend({options:{iconSize:[26,26],iconAnchor:[13,13],popupAnchor:[0,-13]}}),
};

const Icon = {
    landmark_cocoon: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks_cocoon.png'}),
    landmark_mag: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks_mag.png'}),
    landmark_ryuker: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks_ryuker.png'}),
    landmark_tower: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks_tower.png'}),
    landmark_battledia: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks_battledia.svg'}),
    landmark_uq: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks_urgent.png'}),
    
    container_redBox: new Setup.Containers({iconUrl:'./assets/images/icons/containers_redBox.png'}),
    container_redBoxCheck: new Setup.Containers({iconUrl:'./assets/images/icons/containers_redBoxChecked.png'}),
    container_greenBox: new Setup.Containers({iconUrl:'./assets/images/icons/containers_greenBox.png'}),
    
    mineral_monotite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral_monotite.png'}),
    mineral_dualomite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral_dualomite.png'}),
    mineral_trinite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral_trinite.png'}),
    mineral_tetracite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral_tetracite.png'}),
    mineral_photonQuarz: new Setup.Materials({iconUrl:'./assets/images/icons/mineral_photonQuartz.png'}),
    mineral_photonScale: new Setup.Materials({iconUrl:'./assets/images/icons/mineral_photonScale.png'}),
    mineral_photonChunk: new Setup.Materials({iconUrl:'./assets/images/icons/mineral_photonChunk.png'}),
    
    food_aelioApple: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioApple.png'}),
    food_aelioBanana: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioBanana.png'}),
    food_aelioClam: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioClam.png'}),
    food_aelioCrab: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioCrab.png'}),
    food_aelioHerb: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioHerb.png'}),
    food_aelioLobster: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioLobster.png'}),
    food_aelioMushroom: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioMushroom.png'}),
    food_aelioPeach: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioPeach.png'}),
    food_aelioPear: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioPear.png'}),
    food_aelioTomato: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioTomato.png'}),
    food_aelioTurbanShell: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioTurbanShell.png'}),
    food_aelioTurnip: new Setup.Materials({iconUrl:'./assets/images/icons/food_aelioTurnip.png'}),
    food_retemCherry: new Setup.Materials({iconUrl:'./assets/images/icons/food_retemCherry.png'}),
    food_retemCrab: new Setup.Materials({iconUrl:'./assets/images/icons/food_retemCrab.png'}),
    food_retemFruit: new Setup.Materials({iconUrl:'./assets/images/icons/food_retemFruit.png'}),
    food_retemMango: new Setup.Materials({iconUrl:'./assets/images/icons/food_retemMango.png'}),
    food_retemScallop: new Setup.Materials({iconUrl:'./assets/images/icons/food_retemScallop.png'}),
    food_retemSeaSlug: new Setup.Materials({iconUrl:'./assets/images/icons/food_retemSeaSlug.png'}),
    food_retemStrawberry: new Setup.Materials({iconUrl:'./assets/images/icons/food_retemStrawberry.png'}),
    food_retemUrchin: new Setup.Materials({iconUrl:'./assets/images/icons/food_retemUrchin.png'}),

    other_datapod: new Setup.Materials({iconUrl:'./assets/images/icons/other_dataPod.png'}),
    other_alphaReactor: new Setup.Materials({iconUrl:'./assets/images/icons/other_alphaReactor.png'}),
    other_stellarSeed: new Setup.Materials({iconUrl:'./assets/images/icons/other_stellarSeed.png'}),
    other_stellarGrace: new Setup.Materials({iconUrl:'./assets/images/icons/other_stellarGrace.png'}),
    other_veteran: new L.icon({iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16],iconUrl:'./assets/images/icons/other_veteran.png'})
};

export default IconLib;