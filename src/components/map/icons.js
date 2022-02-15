import L from 'leaflet';

const Setup = {
    Landmarks: L.Icon.extend({options:{iconSize:[40,40],iconAnchor:[20,20],popupAnchor:[0,-20]}}),
    Containers: L.Icon.extend({options:{iconSize:[22,22],iconAnchor:[22,22],popupAnchor:[0,-11]}}),
    Materials: L.Icon.extend({options:{iconSize:[26,26],iconAnchor:[13,13],popupAnchor:[0,-13]}}),
};
const IconLib = {
    landmarks__cocoon: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks__cocoon.png'}),
    landmarks__mag: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks__mag.png'}),
    landmarks__ryuker: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks__ryuker.png'}),
    landmarks__tower: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks__tower.png'}),
    landmarks__battledia: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks__battledia.png'}),
    landmarks__uq: new Setup.Landmarks({iconUrl:'./assets/images/icons/landmarks__urgent.png'}),
    

    containers__redBox: new Setup.Containers({iconUrl:'./assets/images/icons/containers__redBox.png'}),
    containers__redBoxCheck: new Setup.Containers({iconUrl:'./assets/images/icons/containers__redBoxChecked.png'}),
    containers__greenBox: new Setup.Containers({iconUrl:'./assets/images/icons/containers__greenBox.png'}),
    

    mineral__monotite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__monotite.png'}),
    mineral__dualomite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__dualomite.png'}),
    mineral__trinite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__trinite.png'}),
    mineral__tetracite: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__tetracite.png'}),
    mineral__photonQuartz: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__photonQuartz.png'}),
    mineral__photonScale: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__photonScale.png'}),
    mineral__photonChunk: new Setup.Materials({iconUrl:'./assets/images/icons/mineral__photonChunk.png'}),
    

    food__aelio_apple: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_apple.png'}),
    food__aelio_banana: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_banana.png'}),
    food__aelio_clam: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_.png'}),
    food__aelio_crab: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_crab.png'}),
    food__aelio_herb: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_herb.png'}),
    food__aelio_lobster: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_lobster.png'}),
    food__aelio_mushroom: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_mushroom.png'}),
    food__aelio_peach: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_peach.png'}),
    food__aelio_pear: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_pear.png'}),
    food__aelio_tomato: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_tomato.png'}),
    food__aelio_turbanShell: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_turbanShell.png'}),
    food__aelio_turnip: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_turnip.png'}),

    food__retem_cauliflower: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_cauliflower.png'}),
    food__retem_cherries: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_cherries.png'}),
    food__retem_cranberries: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_cranberries.png'}),
    food__retem_eggplant: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_eggplant.png'}),
    food__retem_fruit: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_fruit.png'}),
    food__retem_hermitCrab: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_hermitCrab.png'}),
    food__retem_mango: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_mango.png'}),
    food__retem_mushroom: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_mushroom.png'}),
    food__retem_scallop: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_scallop.png'}),
    food__retem_seaSlug: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_seaSlug.png'}),
    food__retem_strawberry: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_strawberry.png'}),
    food__retem_urchin: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_urchin.png'}),


    other__datapod: new Setup.Materials({iconUrl:'./assets/images/icons/other__dataPod.png'}),
    other__alphaReactor: new Setup.Materials({iconUrl:'./assets/images/icons/other__alphaReactor.png'}),
    other__stellarSeed: new Setup.Materials({iconUrl:'./assets/images/icons/other__stellarSeed.png'}),
    other__stellarGrace_Standard: new Setup.Materials({iconUrl:'./assets/images/icons/other__stellarGrace.png'}),
    other__stellarGrace_Silver: new Setup.Materials({iconUrl:'./assets/images/icons/other__stellarGrace.png'}),
    other__stellarGrace_Gold: new Setup.Materials({iconUrl:'./assets/images/icons/other__stellarGrace.png'}),
    other__veteran: new L.icon({iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16],iconUrl:'./assets/images/icons/other__veteran.png'})
};

export default IconLib;