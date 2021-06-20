let langTitle = "PSO2NGS Interactive Map";
/*
<?
$localization = array (
	"UI" => array(
		"title" => "PSO2NGS Interactive Map",
		"languages" => array(
			"switcher" => "Language",
			"en_gl" => "English (Global)",
			"en_al" => "English (Arks-Layer)",
			"jp" => "Japanese",
			"ru" => "Russian",
			"kr" => "Korean",
			"pt" => "Portuguese",
		),
		"misc" => array(
			"contributors" => "Contributors",
			"discord-contribute" => "Contribute",
		),
		"sorting" => array(
			"header" => "Sorting",
			"sections-switch" => "Sections",
			"mainobjects" => array(
				"header" => "Main objects",
				"CentTower" => "Central Tower",
				"Cocoons" => "Cocoons",
				"Mags" => "Region Mag",
				"RyukerDevices" => "Ryuker Devices",
				"Towers" => "Towers",
				"Cities" => "Cities",
				"Huts" => "Huts",
				"UrgentQuests" => "Urgent Quests",
				"Dungeons" => "Dungeons",
			),
			"boxes" => array(
				"header" => "Containers",
				"redBox" => array (
					"name" => "Item Container: Red",
					"info" => "Popup",
				),
				"whiteBox" => array (
					"name" => "Item Container: White",
					"info" => "Popup",
				),
				"goldBox" => array (
					"name" => "Item Container: Gold",
					"info" => "Popup",
				),
			),
			"food" => array(
				"header" => "Food",
				"sautePeach" => array (
					"name" => "Light Aelio Peach",
					"info" => "Popup",
				),
				"sauteBanana" => array (
					"name" => "Robust Aelio Banana",
					"info" => "Popup",
				),
				"sauteApple" => array (
					"name" => "Rich Aelio Apple",
					"info" => "Popup",
				),
				"sautePear" => array (
					"name" => "Crisp Aelio Pear",
					"info" => "Popup",
				),
				"sodheTurbanShell" => array (
					"name" => "Light Aelio Turban Shell",
					"info" => "Popup",
				),
				"sodheClam" => array (
					"name" => "Rich Aelio Clam",
					"info" => "Popup",
				),
				"sohTurnip" => array (
					"name" => "Robust Aelio Turnip",
					"info" => "Popup",
				),
				"sohMushroom" => array (
					"name" => "Light Aelio Mushroom",
					"info" => "Popup",
				),
				"sodheCrab" => array (
					"name" => "Crisp Aelio Crab",
					"info" => "Popup",
				),
				"sodheLobster" => array (
					"name" => "Robust Aelio Lobster",
					"info" => "Popup",
				),
				"sohHerb" => array (
					"name" => "Rich Aelio Herb",
					"info" => "Popup",
				),
				"sohTomato" => array (
					"name" => "Crisp Aelio Tomato",
					"info" => "Popup",
				),
			),
			"minerals" => array(
				"header" => "Minerals",
				"monotite" => array (
					"name" => "Monotite",
					"info" => "Popup",
				),
				"dualomite" => array (
					"name" => "Dualomite",
					"info" => "Popup",
				),
				"trinite" => array (
					"name" => "Trinite",
					"info" => "Popup",
				),
				"PhotonChunk" => array (
					"name" => "Photon Chunk",
					"info" => "Popup",
				),
				"PhotonQuartz" => array (
					"name" => "Photon Quartz",
					"info" => "Popup",
				),
			),
			"other" => array(
				"header" => "Other",
				"alphaReactor" => array (
					"name" => "Alpha Reactor",
					"info" => "Popup",
				),
				"datapod" => array (
					"name" => "Datapod",
					"info" => "Popup",
				),
				"bosses" => array(
					"name" => "Veteran Enemies",
					"info" => "Popup",
				),
			),
			"sections" => array(
				"aelio" => array (
					"centalCity" => "<div class='text-center'><p class='h4 mb-1'><b>Central City</b></p></div><img src='https://pso2.arks-visiphone.com/images/0/08/NGSUISectionCentralCity.png' style='width:300px'><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>100</b></td></tr></tbody></table><p class='mb-0'><b>Type of section:</b> Lobby Area</p>",
					"centalAeilo" => "<div class='text-center'><p class='h4 mb-1'><b>Central Aerio</b></p></div><img src='https://pso2.arks-visiphone.com/images/c/c5/NGSUISectionCentralAerio.png' style='width:300px'><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>32</b></td></tr><tr><td><b>Recommended Battle Power:</b></td><td><b>800</b></td></tr></tbody></table><p class='mb-0'><b>Type of section:</b> <img src='https://pso2.arks-visiphone.com/images/0/01/NGSUISectionTypeIconGathering.png' title='Exploration Area'></p><p class='mb-0'><b>Average Enemy Level:</b> 1</p>",
					"mtMagnus" => "<div class='text-center'><p class='h4 mb-1'><b>Mt. Magnus</b></p></div><img src='https://pso2.arks-visiphone.com/images/7/7f/NGSUISectionMtMagnus.png' style='width:300px'><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>8</b></td></tr><tr><td><b>Recommended Battle Power:</b></td><td><b>864</b></td></tr></tbody></table><p class='mb-0'><b>Type of section:</b> <img src='https://pso2.arks-visiphone.com/images/b/b4/NGSUISectionTypeIconCombat.png' title='Combat Area'></p><p class='mb-0'><b>Average Enemy Level:</b> 5</p>",
					"southAelio" => "<div class='text-center'><p class='h4 mb-1'><b>South Aelio</b></p></div><img src='https://pso2.arks-visiphone.com/images/1/13/NGSUISectionSouthernAerio.png' style='width:300px'><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>32</b></td></tr><tr><td><b>Recommended Battle Power:</b></td><td><b>831</b></td></tr></tbody></table><p class='mb-0'><b>Type of section:</b> <img src='https://pso2.arks-visiphone.com/images/0/01/NGSUISectionTypeIconGathering.png' title='Exploration Area'></p><p class='mb-0'><b>Average Enemy Level:</b> 3</p>",
					"northAelio" => "<div class='text-center'><p class='h4 mb-1'><b>North Aelio</b></p></div><img src='https://pso2.arks-visiphone.com/images/7/7d/NGSUISectionNorthernAerio.png' style='width:300px'><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>32</b></td></tr><tr><td><b>Recommended Battle Power:</b></td><td><b>987</b></td></tr></tbody></table><p class='mb-0'><b>Type of section:</b> <img src='https://pso2.arks-visiphone.com/images/0/01/NGSUISectionTypeIconGathering.png' title='Exploration Area'></p><p class='mb-0'><b>Average Enemy Level:</b> 10</p>",
					"laboratoryRuins" => "<div class='text-center'><p class='h4 mb-1'><b>Vandord Laboratory Ruins</b></p></div><img src='https://pso2.arks-visiphone.com/images/e/ea/NGSUISectionVanfordLabRuins.png' style='width:300px'><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>8</b></td></tr><tr><td><b>Recommended Battle Power:</b></td><td><b>???</b></td></tr></tbody></table><p class='mb-0'><b>Type of section:</b> <img src='https://pso2.arks-visiphone.com/images/b/b4/NGSUISectionTypeIconCombat.png' title='Combat Area'></p><p class='mb-0'><b>Average Enemy Level:</b> 10</p>",
					"westAelio" => "<div class='text-center'><p class='h4 mb-1'><b>West Aelio</b></p></div><img src='https://pso2.arks-visiphone.com/images/c/cf/NGSUISectionWesternAerio.png' style='width:300px'><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>32</b></td></tr><tr><td><b>Recommended Battle Power:</b></td><td><b>???</b></td></tr></tbody></table><p class='mb-0'><b>Type of section:</b> <img src='https://pso2.arks-visiphone.com/images/0/01/NGSUISectionTypeIconGathering.png' title='Exploration Area'></p><p class='mb-0'><b>Average Enemy Level:</b> ?</p>",
					"resolForest" => "<div class='text-center'><p class='h4 mb-1'><b>Resol Forest</b></p></div><img src='https://pso2.arks-visiphone.com/images/0/05/NGSUISectionResolForest.png' style='width:300px'><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>8</b></td></tr><tr><td><b>Recommended Battle Power:</b></td><td><b>???</b></td></tr></tbody></table><p class='mb-0'><b>Type of section:</b> <img src='https://pso2.arks-visiphone.com/images/b/b4/NGSUISectionTypeIconCombat.png' title='Combat Area'></p><p class='mb-0'><b>Average Enemy Level:</b> ?</p>",
					"halphaLake" => "<div class='text-center'><p class='h4 mb-1'><b>Halpha Lake</b></p></div><img src='https://pso2.arks-visiphone.com/images/f/ff/NGSUISectionHalphiaLake.png' style='width:300px'><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>32</b></td></tr><tr><td><b>Recommended Battle Power:</b></td><td><b>???</b></td></tr></tbody></table><p class='mb-0'><b>Type of section:</b> <img src='https://pso2.arks-visiphone.com/images/0/01/NGSUISectionTypeIconGathering.png' title='Exploration Area'></p><p class='mb-0'><b>Average Enemy Level:</b> ?</p>",
				),
			),
		),
	),
	"objects" => array(
		"centtower" => "Central Tower (Aelio)",
		"cocoon" => array(
			"1" => "<div class='text-center'> <p class='h4 mb-1'><b>Cocoon</b></p><p class='h5'><b>Enhanced Enemy</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>4</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>894</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This is Trainia, where ARKS defenders can test their abilities.</li><li>Defeat the enhanced Pettas Sword using your battle skills.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Defeat the Pettas Sword</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 0:55</li><li>Clear without being incapacitated 5 times</li><li>Clear having taken damage fewer than 10 times</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+1 SP</li></ul></p>",
			"2" => "<div class='text-center'> <p class='h4 mb-1'><b>Cocoon</b></p><p class='h5'><b>Swift Jump</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>4</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>916</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This is Trainia, where ARKS defenders can test their abilities.</li><li>Reach the goal using <b>Jump</b> and <b>Double Jump</b>.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Reach the finish point</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 1:25</li><li>Clear without falling 5 times</li><li>Clear having used Glide fewer than 5 times</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+1 SP</li></ul></p>",
			"3" => "<div class='text-center'> <p class='h4 mb-1'><b>Cocoon</b></p><p class='h5'><b>First Step</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>1</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>800</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This is Trainia, where ARKS defenders can test their abilities.</li><li>Follow the instructions to reach the goal while learning the new action.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Reach the finish point</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 5:00</li><li>Clear before 10:00</li><li>Obtain 10 Point Cubes</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+1 SP</li></ul></p>",
			"4" => "<div class='text-center'> <p class='h4 mb-1'><b>Cocoon</b></p><p class='h5'><b>Wild Rush</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>4</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>894</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This is Trainia, where ARKS defenders can test their abilities.</li><li>Defeat all enemies using your battle skills.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Defeat 42 enemies</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 1:45</li><li>Clear without being incapacipated 5 times</li><li>Obtain 5 Point Cubes</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+1 SP</li></ul></p>",
			"5" => "<div class='text-center'> <p class='h4 mb-1'><b>Cocoon</b></p><p class='h5'><b>Roaring Rush</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>4</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>1184</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This is Trainia, where ARKS defenders can test their abilities.</li><li>Make use of your battle skills to defeat Gororox.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Defeat all enemies</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 1:45</li><li>Clear without being incapacipated 2 times</li><li>Clear having taken damage fewer that 15 times</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+1 SP</li></ul></p>",
			"6" => "<div class='text-center'> <p class='h4 mb-1'><b>Cocoon</b></p><p class='h5'><b>Test Flight</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>4</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>835</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This is Trainia, where ARKS defenders can test their gliding capabilities.</li><li>Use Photon Glide to reach the target destination.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Reach the finish point</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 1:15</li><li>Clear without falling 5 times</li><li>Obtain 5 Point Cubes</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+1 SP</li></ul></p>",
			"7" => "<div class='text-center'> <p class='h4 mb-1'><b>Cocoon</b></p><p class='h5'><b>Fleeting Fight</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>4</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>1184</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This is Trainia, where ARKS defenders can test their combat abilities.</li><li>Make use of your battle skills to defeat the Bujin.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Defeat tje Bujin</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 5:00</li><li>Clear without being incapacipated 5 times</li><li>Obtain having taken damage fewer that 20 times</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+1 SP</li></ul></p>",
			"8" => "<div class='text-center'> <p class='h4 mb-1'><b>Cocoon</b></p><p class='h5'><b>Runway</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>4</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>1009</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This Is Trainia, where ARKS defenders can test their dashing capabilities.</li><li>Use Photon Dash to reach the target destination.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Defeat tje Bujin</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 1:55</li><li>Clear before 2:35</li><li>Obtain 5 Point Cubes</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+1 SP</li></ul></p><div class='text-center w-100'><p class='h6'>How to find that Cocoon (by tyoske13):</p><iframe width='auto' src='https://www.youtube-nocookie.com/embed/ZZwOv56zXRQ' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
		),
		"mag" => array(
			"1" => "<b>Expert Region Mag</b>",
			"2" => "<b>Region Mag ID-2</b>",
			"3" => "<b>Region Mag ID-3</b>",
		),
		"ryuker" => array(
			"1" => "<b>Balflow Falls</b>",
			"2" => "<b>Mt. Magnus</b>",
			"3" => "<b>Mt. Piccolt</b>",
			"4" => "<b>Halphana Plains: West</b>",
			"5" => "<b>Central City</b>",
			"6" => "<b>Halphana Plains: East</b>",
			"7" => "<b>Halphana Wetlands</b>",
			"8" => "<b>Altolani Plateau</b>",
			"9" => "<b>Cryano Cliffs</b>",
			"10" => "<b>Lakau Coast</b>",
			"11" => "<b>Aelio Town Ruins</b>",
			"12" => "<b>Vamford Laboratory Ruins</b>",
			"13" => "<b>Halphia Lake</b>",
			"14" => "<b>Rekol Forest</b>",
		),
		"tower" => array(
			"1" => "<div class='text-center'> <p class='h4 mb-1'><b>Tower</b></p><p class='h5'><b>Aero Runner</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>4</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>1184</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This is Trainia, where ARKS defenders can test their gliding capabilities.</li><li>Use Photon Glide to reach the target destination.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Reach the finish point</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 2:05</li><li>Clear without falling 5 times</li><li>Obtain 10 Point Cubes</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+4 SP</li></ul></p>",
			"2" => "<div class='text-center'> <p class='h4 mb-1'><b>Tower</b></p><p class='h5'><b>ALTERS Rush</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>4</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>1184</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This is Trainia, where ARKS defenders can test their combat abilities.</li><li>Avoid combat with enemies whenever possible and make use f your battle skills to defeat the Chiacurio in the final area.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Defeat the Chiacurio</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 8:00</li><li>Clear having suppressed under 4 of the enemies</li><li>Clear wihtout being incapacitated</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+4 SP</li></ul></p>",
			"3" => "<div class='text-center'> <p class='h4 mb-1'><b>Tower</b></p><p class='h5'><b>Great Wall</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'> <tbody> <tr> <td><b>Number of players:</b></td><td><b>4</b></td></tr><tr> <td><b>Recommended Battle Power:</b></td><td><b>1184</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'> <li>This is Trainia, where ARKS defenders can test their abilities.</li><li>Defeat the Daityl Sword in the final area using your battle skills.</li></ul><p class='mb-0'><b>Main Mission:</b></p><ul style='list-style-type: none'> <li>Defeat the Daityl</li></ul><p class='mb-0'><b>Side Mission:</b> <ul style='list-style-type: none'> <li>Clear before 23:00</li><li>Clear without being incapacitated 5 times</li><li>Obtain 5 Point Cubes</li><li>Complete all Side Missions and clear</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b><ul style='list-style-type: none'> <li>+4 SP</li></ul></p>",
		),
		"city" => array(
			"1" => "Central City",
			"2" => "Aelio Town",
		),
		"hut" => array(
			"1" => "??? ID-1",
			"2" => "??? ID-2",
			"3" => "??? ID-3",
		),
		"urgent" => array(
			"1" => "div class='text-center'><p class='h4 mb-1'><b>Urgent Quest</b></p><p class='h5'><b>Command DOLLS Suppression Op</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>8</b></td></tr><tr><td><b>Required Battle Power:</b></td><td><b>1184</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'><li>A powerful space-time flux has been detected in the Altolani Plateau in North Aelio. Based on past data, we expect Pettas Vera, the Command DOLLS unit, to be there. We need all ARKS defenders to hurry to the designated point and defeat the enemy.</li></ul><p class='mb-0'><b>Clear Conditions:</b></p><ul style='list-style-type: none'><li>Defeat the Command DOLLS unit!</li></ul></p><p class='mb-0'><b>Rewards for 1st clear:</b><ul style='list-style-type: none'> <li>C/Guard I</li></ul></p><p class='mb-0'><b>Rewards:</b><ul style='list-style-type: none'><li>2000 N-Meseta</li></ul></p>",
			"2" => "<div class='text-center'><p class='h4 mb-1'><b>Urgent Quest</b></p><p class='h5'><b>Nex Vera Suppression Op</b></p></div><table class='table table-sm d-flex justify-content-center table-borderless mt-1' style='font-size:14px'><tbody><tr><td><b>Number of players:</b></td><td><b>8</b></td></tr><tr><td><b>Required Battle Power:</b></td><td><b>1184</b></td></tr></tbody></table><p class='mb-0'><b>Description:</b></p><ul style='list-style-type: none'><li>A powerful space-time flux has been detected in Resol Forest. Based on past data, we expect Nex Vera, the Command DOLLS unit, to be in the combat zone. We need all ARKS defenders to hurry to the designated point and defeat the enemy.</li></ul><p class='mb-0'><b>Clear Conditions:</b></p><ul style='list-style-type: none'><li>Defeat the Nex Vera!</li></ul></p><p class='mb-0'><b>1st Clear Reward:</b> <ul style='list-style-type: none'> <li>+1 SP</li></ul></p>",
		),
		"dungeon" => array(
			"1" => "Dungeon ID-1",
		),
	),
	"other" => array(
		"alphareactor" => "Aplha Reactor",
		"datapod" => "Datapod",
		"bosses" => array(
			"boss1" => "name",
		),
	),
	
	// DO NOT TOUCH
	"misc" => array(
		"lang" => array(
			"en_gl" => " disabled bg-primary text-white",
			"en_al" => "",
			"jp" => "",
			"ru" => "",
			"kr" => "",
			"pt" => "",
		),
		"test" => "8492",
	),
);
*/