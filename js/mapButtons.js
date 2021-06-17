$(document).ready(function(){
    console.log();

	{ // Sections
		$("#sections_On").click(function(){
				if (sectionsToggle.length == 0) {
					for (let i = 0; i < sections.length; i++) {
						sectionsToggle.push(L.polygon(sections[i]["coordinates"],{fillColor:sections[i]["color"],color:"lightblue",weight:"1"}).bindPopup(sections[i]["popup"]));
					}
				}
				for (let i = 0; i < sectionsToggle.length; i++) {
					sectionsToggle[i].addTo(map);
				}
			});
		$("#sections_Off").click(function(){
			for (let i = 0; i < sectionsToggle.length; i++) {
				map.removeLayer(sectionsToggle[i]);
			}
		});
	}
	{ // Main Objects
		{ // Central Tower
			/*if (centralTowerToggle.length == 0) {
				for (let i = 0; i < centralTower.length; i++) {
					centralTowerToggle.push(L.marker(centralTower[i]["coordinates"],{icon:iconCentTower}).bindPopup(centralTower[i]["popup"]).addTo(map));
				}
			}
			$("#centralTower_On").click(function(){
				if (centralTowerToggle.length == 0) {
					for (let i = 0; i < centralTower.length; i++) {
						centralTowerToggle.push(L.marker(centralTower[i]["coordinates"],{icon:iconCocoon}).bindPopup(centralTower[i]["popup"]));
					}
				}
				for (let i = 0; i < centralTowerToggle.length; i++) {
					centralTowerToggle[i].addTo(map);
				}
			});
			$("#centralTower_Off").click(function(){
				for (let i = 0; i < centralTowerToggle.length; i++) {
					map.removeLayer(centralTowerToggle[i]);
				}
			});*/
		}
		{ // Cocoon
			if (CocoonToggle.length == 0) {
				for (let i = 0; i < Cocoon.length; i++) {
					CocoonToggle.push(L.marker(Cocoon[i]["coordinates"],{icon:iconCocoon}).bindPopup(Cocoon[i]["popup"]).addTo(map));
				}
			}
			$("#Cocoon_On").click(function(){
				if (CocoonToggle.length == 0) {
					for (let i = 0; i < Cocoon.length; i++) {
						CocoonToggle.push(L.marker(Cocoon[i]["coordinates"],{icon:iconCocoon}).bindPopup(Cocoon[i]["popup"]));
					}
				}
				for (let i = 0; i < CocoonToggle.length; i++) {
					CocoonToggle[i].addTo(map);
				}
			});
			$("#Cocoon_Off").click(function(){
				for (let i = 0; i < CocoonToggle.length; i++) {
					map.removeLayer(CocoonToggle[i]);
				}
			});
		}
		{ // Mag
			if (MagToggle.length == 0) {
				for (let i = 0; i < Mag.length; i++) {
					MagToggle.push(L.marker(Mag[i]["coordinates"],{icon:iconMag}).bindPopup(Mag[i]["popup"]).addTo(map));
				}
			}
			$("#Mag_On").click(function(){
				if (MagToggle.length == 0) {
					for (let i = 0; i < Mag.length; i++) {
						MagToggle.push(L.marker(Mag[i]["coordinates"],{icon:iconMag}).bindPopup(Mag[i]["popup"]));
					}
				}
				for (let i = 0; i < MagToggle.length; i++) {
					MagToggle[i].addTo(map);
				}
			});
			$("#Mag_Off").click(function(){
				for (let i = 0; i < MagToggle.length; i++) {
					map.removeLayer(MagToggle[i]);
				}
			});
		}
		{ // Ryuker
			if (RyukerDeviceToggle.length == 0) {
				for (let i = 0; i < RyukerDevice.length; i++) {
					RyukerDeviceToggle.push(L.marker(RyukerDevice[i]["coordinates"],{icon:iconRyuker}).bindPopup(RyukerDevice[i]["popup"]).addTo(map));
				}
			}
			$("#RyukerDevice_On").click(function(){
				if (RyukerDeviceToggle.length == 0) {
					for (let i = 0; i < RyukerDevice.length; i++) {
						RyukerDeviceToggle.push(L.marker(RyukerDevice[i]["coordinates"],{icon:iconRyuker}).bindPopup(RyukerDevice[i]["popup"]));
					}
				}
				for (let i = 0; i < RyukerDeviceToggle.length; i++) {
					RyukerDeviceToggle[i].addTo(map);
				}
			});
			$("#RyukerDevice_Off").click(function(){
				for (let i = 0; i < RyukerDeviceToggle.length; i++) {
					map.removeLayer(RyukerDeviceToggle[i]);
				}
			});
		}
		{ // Tower
			if (TowerToggle.length == 0) {
				for (let i = 0; i < Tower.length; i++) {
					TowerToggle.push(L.marker(Tower[i]["coordinates"],{icon:iconTower}).bindPopup(Tower[i]["popup"]).addTo(map));
				}
			}
			$("#Tower_On").click(function(){
				if (TowerToggle.length == 0) {
					for (let i = 0; i < Tower.length; i++) {
						TowerToggle.push(L.marker(Tower[i]["coordinates"],{icon:iconTower}).bindPopup(Tower[i]["popup"]));
					}
				}
				for (let i = 0; i < TowerToggle.length; i++) {
					TowerToggle[i].addTo(map);
				}
			});
			$("#Tower_Off").click(function(){
				for (let i = 0; i < TowerToggle.length; i++) {
					map.removeLayer(TowerToggle[i]);
				}
			});
		}
		{ // City
			/*if (CityToggle.length == 0) {
				for (let i = 0; i < City.length; i++) {
					CityToggle.push(L.marker(City[i]["coordinates"],{icon:iconCity}).bindPopup(City[i]["popup"]).addTo(map));
				}
			}
			$("#City_On").click(function(){
				if (CityToggle.length == 0) {
					for (let i = 0; i < City.length; i++) {
						CityToggle.push(L.marker(City[i]["coordinates"],{icon:iconCity}).bindPopup(City[i]["popup"]));
					}
				}
				for (let i = 0; i < CityToggle.length; i++) {
					CityToggle[i].addTo(map);
				}
			});
			$("#City_Off").click(function(){
				for (let i = 0; i < CityToggle.length; i++) {
					map.removeLayer(CityToggle[i]);
				}
			});*/
		}
		{ // Hut
			/*if (HutToggle.length == 0) {
				for (let i = 0; i < Hut.length; i++) {
					HutToggle.push(L.marker(Hut[i]["coordinates"],{icon:iconHut}).bindPopup(Hut[i]["popup"]).addTo(map));
				}
			}
			$("#Hut_On").click(function(){
				if (HutToggle.length == 0) {
					for (let i = 0; i < Hut.length; i++) {
						HutToggle.push(L.marker(Hut[i]["coordinates"],{icon:iconHut}).bindPopup(Hut[i]["popup"]));
					}
				}
				for (let i = 0; i < HutToggle.length; i++) {
					HutToggle[i].addTo(map);
				}
			});
			$("#Hut_Off").click(function(){
				for (let i = 0; i < HutToggle.length; i++) {
					map.removeLayer(HutToggle[i]);
				}
			});*/
		}
		{ // UQ
			if (UrgentQuestToggle.length == 0) {
				for (let i = 0; i < UrgentQuest.length; i++) {
					UrgentQuestToggle.push(L.marker(UrgentQuest[i]["coordinates"],{icon:iconUrgent}).bindPopup(UrgentQuest[i]["popup"]).addTo(map));
				}
			}
			$("#UrgentQuest_On").click(function(){
				if (UrgentQuestToggle.length == 0) {
					for (let i = 0; i < UrgentQuest.length; i++) {
						UrgentQuestToggle.push(L.marker(UrgentQuest[i]["coordinates"],{icon:iconUrgent}).bindPopup(UrgentQuest[i]["popup"]));
					}
				}
				for (let i = 0; i < UrgentQuestToggle.length; i++) {
					UrgentQuestToggle[i].addTo(map);
				}
			});
			$("#UrgentQuest_Off").click(function(){
				for (let i = 0; i < UrgentQuestToggle.length; i++) {
					map.removeLayer(UrgentQuestToggle[i]);
				}
			});
		}
		{ // Dungeon
			/*if (DungeonToggle.length == 0) {
				for (let i = 0; i < Dungeon.length; i++) {
					DungeonToggle.push(L.marker(Dungeon[i]["coordinates"],{icon:iconDungeon}).bindPopup(Dungeon[i]["popup"]).addTo(map));
				}
			}
			$("#Dungeon_On").click(function(){
				if (DungeonToggle.length == 0) {
					for (let i = 0; i < Dungeon.length; i++) {
						DungeonToggle.push(L.marker(Dungeon[i]["coordinates"],{icon:iconDungeon}).bindPopup(Dungeon[i]["popup"]));
					}
				}
				for (let i = 0; i < DungeonToggle.length; i++) {
					DungeonToggle[i].addTo(map);
				}
			});
			$("#Dungeon_Off").click(function(){
				for (let i = 0; i < DungeonToggle.length; i++) {
					map.removeLayer(DungeonToggle[i]);
				}
			});*/
		}
	}
	{ // Boxes
		{ // Red Box
			$("#redBox_On").click(function(){
				if (redBoxToggle.length == 0) {
					for (let i = 0; i < redBox.length; i++) {
						redBoxToggle.push(L.marker(redBox[i]["coordinates"],{icon:iconRedBox}).bindTooltip("<?=$localization['UI']['sorting']['boxes']['redBox']['name']?>").bindPopup("YX: " + redBox[i]["coordinates"]));
					}
				}
				for (let i = 0; i < redBoxToggle.length; i++) {
					redBoxToggle[i].addTo(map);
				}
			});
			$("#redBox_Off").click(function(){
				for (let i = 0; i < redBoxToggle.length; i++) {
					map.removeLayer(redBoxToggle[i]);
				}
			});
		}
		{ // White Box
			$("#whiteBox_On").click(function(){
				if (whiteBoxToggle.length == 0) {
					for (let i = 0; i < whiteBox.length; i++) {
						whiteBoxToggle.push(L.marker(whiteBox[i]["coordinates"],{icon:iconWhiteBox}).bindTooltip("<?=$localization['UI']['sorting']['boxes']['whiteBox']['name']?>").bindPopup("YX: " + whiteBox[i]["coordinates"]));
					}
				}
				for (let i = 0; i < whiteBoxToggle.length; i++) {
					whiteBoxToggle[i].addTo(map);
				}
			});
			$("#whiteBox_Off").click(function(){
				for (let i = 0; i < whiteBoxToggle.length; i++) {
					map.removeLayer(whiteBoxToggle[i]);
				}
			});
		}
		{ // Gold Box
			$("#goldBox_On").click(function(){
				if (goldBoxToggle.length == 0) {
					for (let i = 0; i < goldBox.length; i++) {
						goldBoxToggle.push(L.marker(goldBox[i]["coordinates"],{icon:iconGoldBox}).bindTooltip("<?=$localization['UI']['sorting']['boxes']['goldBox']['name']?>").bindPopup("YX: " + goldBox[i]["coordinates"]));
					}
				}
				for (let i = 0; i < goldBoxToggle.length; i++) {
					goldBoxToggle[i].addTo(map);
				}
			});
			$("#goldBox_Off").click(function(){
				for (let i = 0; i < goldBoxToggle.length; i++) {
					map.removeLayer(goldBoxToggle[i]);
				}
			});
		}
	}
	{ // Food
		{ // Saute Peach
			$("#sautePeach_On").click(function(){
				if (sautePeachToggle.length == 0) {
					for (let i = 0; i < sautePeach.length; i++) {
						sautePeachToggle.push(L.marker(sautePeach[i]["coordinates"],{icon:iconSautePeach}).bindTooltip("<?=$localization['UI']['sorting']['food']['sautePeach']['name']?>").bindPopup("YX: " + sautePeach[i]["coordinates"]));;
					}
				}
				for (let i = 0; i < sautePeachToggle.length; i++) {
					sautePeachToggle[i].addTo(map);
				}
			});
			$("#sautePeach_Off").click(function(){
				for (let i = 0; i < sautePeachToggle.length; i++) {
					map.removeLayer(sautePeachToggle[i]);
				}
			});
		}
		{ // Saute Banana
			$("#sauteBanana_On").click(function(){
				if (sauteBananaToggle.length == 0) {
					for (let i = 0; i < sauteBanana.length; i++) {
						sauteBananaToggle.push(L.marker(sauteBanana[i]["coordinates"],{icon:iconSautePeach}).bindTooltip("<?=$localization['UI']['sorting']['food']['sauteBanana']['name']?>").bindPopup("YX: " + sauteBanana[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sauteBananaToggle.length; i++) {
					sauteBananaToggle[i].addTo(map);
				}
			});
			$("#sauteBanana_Off").click(function(){
				for (let i = 0; i < sauteBananaToggle.length; i++) {
					map.removeLayer(sauteBananaToggle[i]);
				}
			});
		}
		{ // Saute Apple
			$("#sauteApple_On").click(function(){
				if (sauteAppleToggle.length == 0) {
					for (let i = 0; i < sauteApple.length; i++) {
						sauteAppleToggle.push(L.marker(sauteApple[i]["coordinates"],{icon:iconSauteApple}).bindTooltip("<?=$localization['UI']['sorting']['food']['sauteApple']['name']?>").bindPopup("YX: " + sauteApple[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sauteAppleToggle.length; i++) {
					sauteAppleToggle[i].addTo(map);
				}
			});
			$("#sauteApple_Off").click(function(){
				for (let i = 0; i < sauteAppleToggle.length; i++) {
					map.removeLayer(sauteAppleToggle[i]);
				}
			});
		}
		{ // Saute Pear
			$("#sautePear_On").click(function(){
				if (sautePearToggle.length == 0) {
					for (let i = 0; i < sautePear.length; i++) {
						sautePearToggle.push(L.marker(sautePear[i]["coordinates"],{icon:iconSautePear}).bindTooltip("<?=$localization['UI']['sorting']['food']['sautePear']['name']?>").bindPopup("YX: " + sautePear[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sautePearToggle.length; i++) {
					sautePearToggle[i].addTo(map);
				}
			});
			$("#sautePear_Off").click(function(){
				for (let i = 0; i < sautePearToggle.length; i++) {
					map.removeLayer(sautePearToggle[i]);
				}
			});
		}
		{ // Saute Turban Shell
			$("#sodheTurbanShell_On").click(function(){
				if (sodheTurbanShellToggle.length == 0) {
					for (let i = 0; i < sodheTurbanShell.length; i++) {
						sodheTurbanShellToggle.push(L.marker(sodheTurbanShell[i]["coordinates"],{icon:iconTEST}).bindTooltip("<?=$localization['UI']['sorting']['food']['sodheTurbanShell']['name']?>").bindPopup("YX: " + sodheTurbanShell[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sodheTurbanShellToggle.length; i++) {
					sodheTurbanShellToggle[i].addTo(map);
				}
			});
			$("#sodheTurbanShell_Off").click(function(){
				for (let i = 0; i < sodheTurbanShellToggle.length; i++) {
					map.removeLayer(sodheTurbanShellToggle[i]);
				}
			});
		}
		{ // Saute Clam
			$("#sodheClam_On").click(function(){
				if (sodheClamToggle.length == 0) {
					for (let i = 0; i < sodheClam.length; i++) {
						sodheClamToggle.push(L.marker(sodheClam[i]["coordinates"],{icon:iconSodheClam}).bindTooltip("<?=$localization['UI']['sorting']['food']['sodheClam']['name']?>").bindPopup("YX: " + sodheClam[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sodheClamToggle.length; i++) {
					sodheClamToggle[i].addTo(map);
				}
			});
			$("#sodheClam_Off").click(function(){
				for (let i = 0; i < sodheClamToggle.length; i++) {
					map.removeLayer(sodheClamToggle[i]);
				}
			});
		}
		{ // Soh Turnip
			$("#sohTurnip_On").click(function(){
				if (sohTurnipToggle.length == 0) {
					for (let i = 0; i < sohTurnip.length; i++) {
						sohTurnipToggle.push(L.marker(sohTurnip[i]["coordinates"],{icon:iconSohTurnip}).bindTooltip("<?=$localization['UI']['sorting']['food']['sohTurnip']['name']?>").bindPopup("YX: " + sohTurnip[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sohTurnipToggle.length; i++) {
					sohTurnipToggle[i].addTo(map);
				}
			});
			$("#sohTurnip_Off").click(function(){
				for (let i = 0; i < sohTurnipToggle.length; i++) {
					map.removeLayer(sohTurnipToggle[i]);
				}
			});
		}
		{ // Soh Mushroom
			$("#sohMushroom_On").click(function(){
				if (sohMushroomToggle.length == 0) {
					for (let i = 0; i < sohMushroom.length; i++) {
						sohMushroomToggle.push(L.marker(sohMushroom[i]["coordinates"],{icon:iconSohMushroom}).bindTooltip("<?=$localization['UI']['sorting']['food']['sohMushroom']['name']?>").bindPopup("YX: " + sohMushroom[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sohMushroomToggle.length; i++) {
					sohMushroomToggle[i].addTo(map);
				}
			});
			$("#sohMushroom_Off").click(function(){
				for (let i = 0; i < sohMushroomToggle.length; i++) {
					map.removeLayer(sohMushroomToggle[i]);
				}
			});
		}
		{ // Sodhe Crab
			$("#sodheCrab_On").click(function(){
				if (sodheCrabToggle.length == 0) {
					for (let i = 0; i < sodheCrab.length; i++) {
						sodheCrabToggle.push(L.marker(sodheCrab[i]["coordinates"],{icon:iconSodheCrab}).bindTooltip("<?=$localization['UI']['sorting']['food']['sodheCrab']['name']?>").bindPopup("YX: " + sodheCrab[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sodheCrabToggle.length; i++) {
					sodheCrabToggle[i].addTo(map);
				}
			});
			$("#sodheCrab_Off").click(function(){
				for (let i = 0; i < sodheCrabToggle.length; i++) {
					map.removeLayer(sodheCrabToggle[i]);
				}
			});
		}
		{ // Sodhe Lobster
			$("#sodheLobster_On").click(function(){
				if (sodheLobsterToggle.length == 0) {
					for (let i = 0; i < sodheLobster.length; i++) {
						sodheLobsterToggle.push(L.marker(sodheLobster[i]["coordinates"],{icon:iconSodheLobster}).bindTooltip("<?=$localization['UI']['sorting']['food']['sodheLobster']['name']?>").bindPopup("YX: " + sodheLobster[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sodheLobsterToggle.length; i++) {
					sodheLobsterToggle[i].addTo(map);
				}
			});
			$("#sodheLobster_Off").click(function(){
				for (let i = 0; i < sodheLobsterToggle.length; i++) {
					map.removeLayer(sodheLobsterToggle[i]);
				}
			});
		}
		{ // Soh Herb
			$("#sohHerb_On").click(function(){
				if (sohHerbToggle.length == 0) {
					for (let i = 0; i < sohHerb.length; i++) {
						sohHerbToggle.push(L.marker(sohHerb[i]["coordinates"],{icon:iconSohHerb}).bindTooltip("<?=$localization['UI']['sorting']['food']['sohHerb']['name']?>").bindPopup("YX: " + sohHerb[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sohHerbToggle.length; i++) {
					sohHerbToggle[i].addTo(map);
				}
			});
			$("#sohHerb_Off").click(function(){
				for (let i = 0; i < sohHerbToggle.length; i++) {
					map.removeLayer(sohHerbToggle[i]);
				}
			});
		}
		{ // Soh Tomato
			$("#sohTomato_On").click(function(){
				if (sohTomatoToggle.length == 0) {
					for (let i = 0; i < sohTomato.length; i++) {
						sohTomatoToggle.push(L.marker(sohTomato[i]["coordinates"],{icon:iconTEST}).bindTooltip("<?=$localization['UI']['sorting']['food']['sohTomato']['name']?>").bindPopup("YX: " + sohTomato[i]["coordinates"]));
					}
				}
				for (let i = 0; i < sohTomatoToggle.length; i++) {
					sohTomatoToggle[i].addTo(map);
				}
			});
			$("#sohTomato_Off").click(function(){
				for (let i = 0; i < sohTomatoToggle.length; i++) {
					map.removeLayer(sohTomatoToggle[i]);
				}
			});
		}
	}
	{ // MINERALS
		{ // Monotite
			$("#monotite_On").click(function(){
				if (monotiteToggle.length == 0) {
					for (let i = 0; i < monotite.length; i++) {
						monotiteToggle.push(L.marker(monotite[i]["coordinates"],{icon:iconMonotite}).bindTooltip("<?=$localization['UI']['sorting']['minerals']['monotite']['name']?>").bindPopup("YX: " + monotite[i]["coordinates"]));
					}
				}
				for (let i = 0; i < monotiteToggle.length; i++) {
					monotiteToggle[i].addTo(map);
				}
			});
			$("#monotite_Off").click(function(){
				for (let i = 0; i < monotiteToggle.length; i++) {
					map.removeLayer(monotiteToggle[i]);
				}
			});
		}
		{ // Dualomite
			$("#dualomite_On").click(function(){
				if (dualomiteToggle.length == 0) {
					for (let i = 0; i < dualomite.length; i++) {
						dualomiteToggle.push(L.marker(dualomite[i]["coordinates"],{icon:iconDualomite}).bindTooltip("<?=$localization['UI']['sorting']['minerals']['dualomite']['name']?>").bindPopup("YX: " + dualomite[i]["coordinates"]));
					}
				}
				for (let i = 0; i < dualomiteToggle.length; i++) {
					dualomiteToggle[i].addTo(map);
				}
			});
			$("#dualomite_Off").click(function(){
				for (let i = 0; i < dualomiteToggle.length; i++) {
					map.removeLayer(dualomiteToggle[i]);
				}
			});
		}
		{ // Trinite
			$("#trinite_On").click(function(){
				if (triniteToggle.length == 0) {
					for (let i = 0; i < trinite.length; i++) {
						triniteToggle.push(L.marker(trinite[i]["coordinates"],{icon:iconTrinite}).bindTooltip("<?=$localization['UI']['sorting']['minerals']['trinite']['name']?>").bindPopup("YX: " + trinite[i]["coordinates"]));
					}
				}
				for (let i = 0; i < triniteToggle.length; i++) {
					triniteToggle[i].addTo(map);
				}
			});
			$("#trinite_Off").click(function(){
				for (let i = 0; i < triniteToggle.length; i++) {
					map.removeLayer(triniteToggle[i]);
				}
			});
		}
		{ // Photon Chunk
			$("#PhotonChunk_On").click(function(){
				if (PhotonChunkToggle.length == 0) {
					for (let i = 0; i < PhotonChunk.length; i++) {
						PhotonChunkToggle.push(L.marker(PhotonChunk[i]["coordinates"],{icon:iconPhotonChunk}).bindTooltip("<?=$localization['UI']['sorting']['minerals']['PhotonChunk']['name']?>").bindPopup("YX: " + PhotonChunk[i]["coordinates"]));
					}
				}
				for (let i = 0; i < PhotonChunkToggle.length; i++) {
					PhotonChunkToggle[i].addTo(map);
				}
			});
			$("#PhotonChunk_Off").click(function(){
				for (let i = 0; i < PhotonChunkToggle.length; i++) {
					map.removeLayer(PhotonChunkToggle[i]);
				}
			});
		}
		{ // Photon Quartz
			$("#PhotonQuartz_On").click(function(){
				if (PhotonQuartzToggle.length == 0) {
					for (let i = 0; i < PhotonQuartz.length; i++) {
						PhotonQuartzToggle.push(L.marker(PhotonQuartz[i]["coordinates"],{icon:iconPhotonQuartz}).bindTooltip("<?=$localization['UI']['sorting']['minerals']['PhotonQuartz']['name']?>").bindPopup("YX: " + PhotonQuartz[i]["coordinates"]));
					}
				}
				for (let i = 0; i < PhotonQuartzToggle.length; i++) {
					PhotonQuartzToggle[i].addTo(map);
				}
			});
			$("#PhotonQuartz_Off").click(function(){
				for (let i = 0; i < PhotonQuartzToggle.length; i++) {
					map.removeLayer(PhotonQuartzToggle[i]);
				}
			});
		}
	}
	{ // Other
		{ // Alpha Reactors
			$("#alphaReactor_On").click(function(){
				if (alphaReactorToggle.length == 0) {
					for (let i = 0; i < alphaReactor.length; i++) {
						alphaReactorToggle.push(L.marker(alphaReactor[i]["coordinates"],{icon:iconAlphaReactor}).bindTooltip("<?=$localization['UI']['sorting']['other']['alphaReactor']['name']?>").bindPopup("YX: " + alphaReactor[i]["coordinates"]));
					}
				}
				for (let i = 0; i < alphaReactorToggle.length; i++) {
					alphaReactorToggle[i].addTo(map);
				}
			});
			$("#alphaReactor_Off").click(function(){
				for (let i = 0; i < alphaReactorToggle.length; i++) {
					map.removeLayer(alphaReactorToggle[i]);
				}
			});
		}
		{ // Datapods
			$("#datapod_On").click(function(){
				if (datapodToggle.length == 0) {
					for (let i = 0; i < datapod.length; i++) {
						datapodToggle.push(L.circleMarker(datapod[i]["coordinates"],{"radius": 4, "weight": 4, "fillOpacity": 1, "opacity": 1, "fillColor": "#FFD700", "color": "#FFD700"}).bindTooltip("<?=$localization['UI']['sorting']['other']['datapod']['name']?>").bindPopup("YX: " + datapod[i]["coordinates"]));
					}
				}
				for (let i = 0; i < datapodToggle.length; i++) {
					datapodToggle[i].addTo(map);
				}
			});
			$("#datapod_Off").click(function(){
				for (let i = 0; i < datapodToggle.length; i++) {
					map.removeLayer(datapodToggle[i]);
				}
			});
		}
	}
}); 
