<?
if( $_COOKIE["lang"] !== null )
$lang = $_COOKIE["lang"];
if( $lang !== null )
include_once "../lang_packs/" . $lang . ".php";
?>
// OBJECTS
// Central Tower coords
	let CentralTower = [
			{coordinates:[3599,3860],popup:"<?=$localization['objects']['centtower']?>"}
		];
	let CentralTowerToggle = [];

// Cocoon coords
	let Cocoon = [
			{coordinates:[3333,2606],popup:"<?=$localization['objects']['cocoon']['1']?>"},
			{coordinates:[5521,2442],popup:"<?=$localization['objects']['cocoon']['2']?>"},
			{coordinates:[4436,4107],popup:"<?=$localization['objects']['cocoon']['3']?>"},
			{coordinates:[1003,4935],popup:"<?=$localization['objects']['cocoon']['4']?>"},
			{coordinates:[926,2327],popup:"<?=$localization['objects']['cocoon']['5']?>"},
			{coordinates:[5248,217],popup:"<?=$localization['objects']['cocoon']['6']?>"},
			{coordinates:[4965,5879],popup:"<?=$localization['objects']['cocoon']['7']?>"}
		];
	let CocoonToggle = [];

// Mag coords
	let Mag = [
			{coordinates:[4755,1641],popup:"<?=$localization['objects']['mag']['1']?>"}
		];
	let MagToggle = [];

// Ryuker coords
	let RyukerDevice = [
			{coordinates:[1547,4074],popup:"<?=$localization['objects']['ryuker']['1']?>"},
			{coordinates:[2562,4171],popup:"<?=$localization['objects']['ryuker']['2']?>"},
			{coordinates:[611,5299],popup:"<?=$localization['objects']['ryuker']['3']?>"},
			{coordinates:[3094,2699],popup:"<?=$localization['objects']['ryuker']['4']?>"},
			{coordinates:[3340,3515],popup:"<?=$localization['objects']['ryuker']['5']?>"},
			{coordinates:[4053,4510],popup:"<?=$localization['objects']['ryuker']['6']?>"},
			{coordinates:[4297,2252],popup:"<?=$localization['objects']['ryuker']['7']?>"},
			{coordinates:[5503,1496],popup:"<?=$localization['objects']['ryuker']['8']?>"},	
			{coordinates:[4827,806],popup:"<?=$localization['objects']['ryuker']['9']?>"},
			{coordinates:[2599,822],popup:"<?=$localization['objects']['ryuker']['10']?>"},
			{coordinates:[1764,1881],popup:"<?=$localization['objects']['ryuker']['11']?>"},
			{coordinates:[4163,6110],popup:"<?=$localization['objects']['ryuker']['12']?>"},
			{coordinates:[5468,5729],popup:"<?=$localization['objects']['ryuker']['13']?>"},
			{coordinates:[5295,3919],popup:"<?=$localization['objects']['ryuker']['14']?>"}
		];		
	let RyukerDeviceToggle = [];

// Tower coords
	let Tower = [
			{coordinates:[830,5506],popup:"<?=$localization['objects']['tower']['1']?>"},
			{coordinates:[5740,1043],popup:"<?=$localization['objects']['tower']['2']?>"}
		];
	let TowerToggle = [];

// City coords
	let City = [
			{coordinates:[3483,3620],popup:"<?=$localization['objects']['city']['1']?>"},
			{coordinates:[1803,1529],popup:"<?=$localization['objects']['city']['2']?>"}
		];
	let CityToggle = [];

// Hut coords
	let Hut = [
			{coordinates:[3815,2925],popup:"<?=$localization['objects']['hut']['1']?>"},
			{coordinates:[3056,1742],popup:"<?=$localization['objects']['hut']['2']?>"},
			{coordinates:[1070,2054],popup:"<?=$localization['objects']['hut']['3']?>"}
		];
	let HutToggle = [];

// Urgent coords
	let UrgentQuest = [
			{coordinates:[5984,1772],popup:"<?=$localization['objects']['urgent']['1']?>"}
		];
	let UrgentQuestToggle = [];

// Dungeon coords
	let Dungeon = [
			{coordinates:[5069,2507],popup:"<?=$localization['objects']['dungeon']['1']?>"}
		];
	let DungeonToggle = [];
	
// BOXES
// Red Containers
	let redBox = [
		{coordinates:[6197,1856]},
		{coordinates:[5793,1262]},
		{coordinates:[5902,2606]},
		{coordinates:[5563,2753]},
		{coordinates:[5492,2560]},
		{coordinates:[5222,1702]},
		{coordinates:[5420,2924]},
		{coordinates:[5077,2063]},
		{coordinates:[5352,3194]},
		{coordinates:[4824,3361]},
		{coordinates:[4550,2181]},
		{coordinates:[4485,2855]},
		{coordinates:[4122,2345]},
		{coordinates:[4316,4226]},
		{coordinates:[3855,2891]},
		{coordinates:[3747,1350]},
		{coordinates:[4631,5200]},
		{coordinates:[3811,5305]},
		{coordinates:[3581,4825]},
		{coordinates:[3533,4745]},
		{coordinates:[3087,2363]},
		{coordinates:[2929,2138]},
		{coordinates:[2798,2186]},
		{coordinates:[2752,2315]},
		{coordinates:[2600,2565]},
		{coordinates:[2607,3021]},
		{coordinates:[2101,3604]},
		{coordinates:[2077,3454]},
		{coordinates:[1646,3091]},
		{coordinates:[2279,5651]},
		{coordinates:[2094,5538]},
		{coordinates:[1896,5497]},
		{coordinates:[2075,4178]},
		{coordinates:[1877,4058]},
		{coordinates:[1637,3754]},
		{coordinates:[1174,3503]},
		{coordinates:[1016,2962]},
		{coordinates:[836,3048]},
		{coordinates:[1411,5857]}
	];
	let redBoxToggle = [];

// White Containers
	let whiteBox = [
		{coordinates:[6454,1945]},
		{coordinates:[6350,1514]},
		{coordinates:[5894,2746]},
		{coordinates:[5743,2385]},
		{coordinates:[5735,2202]},
		{coordinates:[5549,1986]},
		{coordinates:[5512,1548]},
		{coordinates:[5399,1875]},
		{coordinates:[5416,2841]},
		{coordinates:[5375,2762]},
		{coordinates:[5150,2050]},
		{coordinates:[5136,2258]},
		{coordinates:[5095,2329]},
		{coordinates:[5022,1835]},
		{coordinates:[4983,2162]},
		{coordinates:[4978,2081]},
		{coordinates:[4920,2290]},
		{coordinates:[4889,2194]},
		{coordinates:[4671,2648]},
		{coordinates:[4583,2705]},
		{coordinates:[4655,2226]},
		{coordinates:[4566,2050]},
		{coordinates:[4392,1439]},
		{coordinates:[4191,1760]},
		{coordinates:[4256,2151]},
		{coordinates:[4326,2225]},
		{coordinates:[4184,2338]},
		{coordinates:[4088,1937]},
		{coordinates:[3918,1529]},
		{coordinates:[3863,1826]},
		{coordinates:[3615,1497]},
		{coordinates:[3541,1744]},
		{coordinates:[4031,2786]},
		{coordinates:[3863,2801]},
		{coordinates:[3790,2946]},
		{coordinates:[3645,2672]},
		{coordinates:[4622,3993]},
		{coordinates:[3935,4417]},
		{coordinates:[4695,4879]},
		{coordinates:[4703,5081]},
		{coordinates:[4717,5441]},
		{coordinates:[4519,5833]},
		{coordinates:[4350,6017]},
		{coordinates:[4664,6312]},
		{coordinates:[4645,6528]},
		{coordinates:[4671,6640]},
		{coordinates:[4704,6687]},
		{coordinates:[4564,6704]},
		{coordinates:[5575,2426]},
		{coordinates:[3047,2361]},
		{coordinates:[3270,2663]},
		{coordinates:[3337,3050]},
		{coordinates:[3215,3065]},
		{coordinates:[3206,4017]},
		{coordinates:[3143,4201]},
		{coordinates:[3015,3752]},
		{coordinates:[2958,3687]},
		{coordinates:[2966,3332]},
		{coordinates:[2726,3530]},
		{coordinates:[2733,3153]},
		{coordinates:[2693,2819]},
		{coordinates:[2496,3050]},
		{coordinates:[2692,2254]},
		{coordinates:[2401,3945]},
		{coordinates:[3503,5032]},
		{coordinates:[3447,5241]},
		{coordinates:[3446,5320]},
		{coordinates:[3350,4664]},
		{coordinates:[3372,5546]},
		{coordinates:[3151,5714]},
		{coordinates:[3197,5249]},
		{coordinates:[3046,5296]},
		{coordinates:[2886,5207]},
		{coordinates:[2791,5832]},
		{coordinates:[3005,5073]},
		{coordinates:[2932,4985]},
		{coordinates:[2886,4682]},
		{coordinates:[2812,4713]},
		{coordinates:[2943,5863]},
		{coordinates:[2735,5967]},
		{coordinates:[2510,6136]},
		{coordinates:[2382,5944]},
		{coordinates:[2495,5495]},
		{coordinates:[2309,5569]},
		{coordinates:[2653,4330]},
		{coordinates:[2534,5055]},
		{coordinates:[2364,5203]},
		{coordinates:[2300,5107]},
		{coordinates:[2270,5440]},
		{coordinates:[2110,5599]},
		{coordinates:[2117,5920]},
		{coordinates:[2142,6135]},
		{coordinates:[1838,5126]},
		{coordinates:[1878,6385]},
		{coordinates:[1717,6505]},
		{coordinates:[1669,6399]},
		{coordinates:[1358,5950]},
		{coordinates:[2136,3335]},
		{coordinates:[1973,3498]},
		{coordinates:[1923,4032]},
		{coordinates:[1818,3208]},
		{coordinates:[1864,3791]},
		{coordinates:[1783,4218]},
		{coordinates:[1689,3710]},
		{coordinates:[1544,3760]},
		{coordinates:[1696,3392]},
		{coordinates:[1728,3314]},
		{coordinates:[1758,3128]},
		{coordinates:[1798,2941]},
		{coordinates:[1199,3144]},
		{coordinates:[1031,2888]},
		{coordinates:[607,5664]},
		{coordinates:[191,5143]},
		{coordinates:[432,4407]},
		{coordinates:[722,3984]}
	];
	let whiteBoxToggle = [];

// Gold Containers
	let goldBox = [
		{coordinates:[4181,2593]},
		{coordinates:[2808,3737]},
		{coordinates:[1526,6179]}
	];
	let goldBoxToggle = [];

// FOOD
// Saute Peach
	let sautePeach = [
		{coordinates:[4736,3465]},
		{coordinates:[4399,4366]},
		{coordinates:[4319,5523]},
		{coordinates:[3792,4381]},
		{coordinates:[3224,2474]},
		{coordinates:[2658,2276]},
		{coordinates:[2517,2684]},
		{coordinates:[2963,3771]},
		{coordinates:[3658,1439]}
	];
	let sautePeachToggle = [];