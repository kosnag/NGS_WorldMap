import L from 'leaflet';

const Setup = {
    Landmarks: L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-20]}}),
    Containers: L.Icon.extend({options:{iconSize:[22,22],iconAnchor:[22,22],popupAnchor:[0,-11]}}),
    Materials: L.Icon.extend({options:{iconSize:[26,26],iconAnchor:[13,13],popupAnchor:[0,-13]}}),
};
const IconLib = {
    cocoon: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark__cocoon.png'}),
    mag: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark__mag.png'}),
    ryuker: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark__ryuker.png'}),
    tower: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark__tower.png'}),
    battledia: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark__battledia.png'}),
    uq: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmark__urgent.png'}),
    

    redBox: new Setup.Containers({iconUrl:'./assets/images/icons/container__red.png'}),
    redBoxChecked: new Setup.Containers({iconUrl:'./assets/images/icons/container__redChecked.png'}),
    greenBox: new Setup.Containers({iconUrl:'./assets/images/icons/container__green.png'}),
    

    monotite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__monotite.png'}),
    dualomite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__dualomite.png'}),
    trinite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__trinite.png'}),
    tetracite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__tetracite.png'}),
    photonQuartz: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__photonQuartz.png'}),
    photonScale: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__photonScale.png'}),
    photonChunk: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__photonChunk.png'}),
    

    aelio_apple: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_apple.png'}),
    aelio_banana: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_banana.png'}),
    aelio_clam: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_.png'}),
    aelio_crab: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_crab.png'}),
    aelio_herb: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_herb.png'}),
    aelio_lobster: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_lobster.png'}),
    aelio_mushroom: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_mushroom.png'}),
    aelio_peach: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_peach.png'}),
    aelio_pear: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_pear.png'}),
    aelio_tomato: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_tomato.png'}),
    aelio_turbanShell: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_turbanShell.png'}),
    aelio_turnip: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_turnip.png'}),

    retem_cauliflower: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_cauliflower.png'}),
    retem_cherries: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_cherries.png'}),
    retem_cranberries: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_cranberries.png'}),
    retem_eggplant: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_eggplant.png'}),
    retem_carambola: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_carambola.png'}),
    retem_hermitCrab: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_hermitCrab.png'}),
    retem_mango: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_mango.png'}),
    retem_mushroom: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_mushroom.png'}),
    retem_scallop: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_scallop.png'}),
    retem_seaSlug: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_seaSlug.png'}),
    retem_strawberry: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_strawberry.png'}),
    retem_urchin: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_urchin.png'}),


    datapod: new Setup.Materials({iconUrl:'./assets/images/icons/other__dataPod.png'}),
    datapodChecked: new Setup.Materials({iconUrl:'./assets/images/icons/other__dataPod.png'}),
    alphaReactor: new Setup.Materials({iconUrl:'./assets/images/icons/other__alphaReactor.png'}),
    stellarSeed: new Setup.Materials({iconUrl:'./assets/images/icons/other__stellarSeed.png'}),
    stellarGrace_Standard: new Setup.Materials({iconUrl:'./assets/images/icons/other__stellarGrace.png'}),
    stellarGrace_Silver: new Setup.Materials({iconUrl:'./assets/images/icons/other__stellarGrace.png'}),
    stellarGrace_Gold: new Setup.Materials({iconUrl:'./assets/images/icons/other__stellarGrace.png'}),
    veteran: new L.icon({iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16],iconUrl:'./assets/images/icons/other__veteran.png'})
};

export default IconLib;