import L from 'leaflet';

const Setup = {
    Landmarks: L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-20]}}),
    Containers: L.Icon.extend({options:{iconSize:[22,22],iconAnchor:[22,22],popupAnchor:[0,-11]}}),
    Materials: L.Icon.extend({options:{iconSize:[26,26],iconAnchor:[13,13],popupAnchor:[0,-13]}}),
};
const IconLib = {
    cocoon: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark/cocoon.png'}),
    mag: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark/mag.png'}),
    ryuker: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark/ryuker.png'}),
    tower: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark/tower.png'}),
    battledia: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark/battledia.png'}),
    urgent: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark/urgent.png'}),
    

    redBox: new Setup.Containers({iconUrl:'./assets/images/icons/container/red.png'}),
    redBoxChecked: new Setup.Containers({iconUrl:'./assets/images/icons/container/red_checked.png'}),
    greenBox: new Setup.Containers({iconUrl:'./assets/images/icons/container/green.png'}),
    

    monotite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral/monotite.png'}),
    dualomite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral/dualomite.png'}),
    trinite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral/trinite.png'}),
    tetracite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral/tetracite.png'}),
    photonQuartz: new Setup.Materials({iconUrl:'./assets/images/icons/mineral/photonQuartz.png'}),
    photonScale: new Setup.Materials({iconUrl:'./assets/images/icons/mineral/photonScale.png'}),
    photonChunk: new Setup.Materials({iconUrl:'./assets/images/icons/mineral/photonChunk.png'}),
    

    aelio_apple: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_apple.png'}),
    aelio_banana: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_banana.png'}),
    aelio_clam: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_.png'}),
    aelio_crab: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_crab.png'}),
    aelio_herb: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_herb.png'}),
    aelio_lobster: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_lobster.png'}),
    aelio_mushroom: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_mushroom.png'}),
    aelio_peach: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_peach.png'}),
    aelio_pear: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_pear.png'}),
    aelio_tomato: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_tomato.png'}),
    aelio_turbanShell: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_turbanShell.png'}),
    aelio_turnip: new Setup.Materials({iconUrl:'./assets/images/icons/food/aelio_turnip.png'}),

    retem_cauliflower: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_cauliflower.png'}),
    retem_cherries: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_cherries.png'}),
    retem_cranberries: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_cranberries.png'}),
    retem_eggplant: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_eggplant.png'}),
    retem_carambola: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_carambola.png'}),
    retem_hermitCrab: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_hermitCrab.png'}),
    retem_mango: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_mango.png'}),
    retem_mushroom: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_mushroom.png'}),
    retem_scallop: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_scallop.png'}),
    retem_seaSlug: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_seaSlug.png'}),
    retem_strawberry: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_strawberry.png'}),
    retem_urchin: new Setup.Materials({iconUrl:'./assets/images/icons/food/retem_urchin.png'}),


    datapod: new Setup.Materials({iconUrl:'./assets/images/icons/other/datapod.png'}),
    datapodChecked: new Setup.Materials({iconUrl:'./assets/images/icons/other/datapod_checked.png'}),
    alphaReactor: new Setup.Materials({iconUrl:'./assets/images/icons/other/alphaReactor.png'}),
    musicPlace: new Setup.Materials({iconUrl:'./assets/images/icons/other/musicPlace.png'}),
    stellarSeed: new Setup.Materials({iconUrl:'./assets/images/icons/other/stellarSeed.png'}),
    stellarGrace_Default: new Setup.Materials({iconUrl:'./assets/images/icons/other/stellarGrace_Default.png'}),
    stellarGrace_Silver: new Setup.Materials({iconUrl:'./assets/images/icons/other/stellarGrace_Silver.png'}),
    stellarGrace_Gold: new Setup.Materials({iconUrl:'./assets/images/icons/other/stellarGrace_Gold.png'}),
    veteran: new L.icon({iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16],iconUrl:'./assets/images/icons/other/veteran.png'})
};

export default IconLib;