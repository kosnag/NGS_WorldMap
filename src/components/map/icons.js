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
    

    aelioApple: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_apple.png'}),
    aelioBanana: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_banana.png'}),
    aelioClam: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_.png'}),
    aelioCrab: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_crab.png'}),
    aelioHerb: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_herb.png'}),
    aelioLobster: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_lobster.png'}),
    aelioMushroom: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_mushroom.png'}),
    aelioPeach: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_peach.png'}),
    aelioPear: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_pear.png'}),
    aelioTomato: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_tomato.png'}),
    aelioTurbanShell: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_turbanShell.png'}),
    aelioTurnip: new Setup.Materials({iconUrl:'./assets/images/icons/food__aelio_turnip.png'}),

    retemCauliflower: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_cauliflower.png'}),
    retemCherries: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_cherries.png'}),
    retemCranberries: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_cranberries.png'}),
    retemEggplant: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_eggplant.png'}),
    retemFruit: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_fruit.png'}),
    retemHermitCrab: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_hermitCrab.png'}),
    retemMango: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_mango.png'}),
    retemMushroom: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_mushroom.png'}),
    retemScallop: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_scallop.png'}),
    retemSeaSlug: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_seaSlug.png'}),
    retemStrawberry: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_strawberry.png'}),
    retemUrchin: new Setup.Materials({iconUrl:'./assets/images/icons/food__retem_urchin.png'}),


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