<?
if( $_COOKIE["lang"] !== null )
$lang = $_COOKIE["lang"];
if( $lang !== null )
include_once "../lang_packs/" . $lang . ".php";
?>
// SECTIONS
	let sections = [
		{coordinates:[[6198,2886],[6038,2730],[5721,2730],[5565,2921],[5444,2963],[5261,2945],[4935,3158],[4746,3107],[4262,2811],[3816,2170],[3882,1960],[4160,1696],[4126,1515],[4081,1579],[3889,1496],[3754,1352],[3651,1165],[3482,1314],[3417,1321],[3384,1288],[3267,1309],[3165,1541],[3080,1562],[2938,1501],[2853,1546],[2812,1656],[2728,1701],[2238,1619],[2120,1537],[2093,1634],[2208,1784],[2386,2160],[2223,2165],[2203,2383],[2252,2728],[2398,2888],[2502,3182],[2545,3215],[2530,3632],[3013,3950],[3099,4133],[3065,4266],[3548,4787],[3604,5033],[3465,5410],[3351,5500],[3426,5559],[3539,5560],[3696,5668],[3802,5667],[3868,5735],[4144,5678],[4270,5772],[4272,5843],[4303,5873],[4402,5952],[4421,6207],[4585,6426],[4558,6708],[4408,7164],[4619,7178],[4782,7030],[5018,6740],[4970,6335],[4721,6077],[4615,5995],[4633,5878],[4692,5836],[4764,5622],[4898,5527],[5032,5601],[5078,5581],[5050,5212],[4987,4978],[4597,4524],[4612,4316],[4833,4076],[4868,4008],[4907,3543],[4979,3445],[5129,3413],[5244,3439],[5311,3422],[5412,3199],[5645,3023],[5734,2883],[5829,2844],[5949,2862],[6114,3000],[6160,3028]],color:"green",popup:"<?=$localization['UI']['sorting']['sections']['aelio']['centalAeilo']?>"},
		{coordinates:[[3579,3295],[3799,3363],[3901,3594],[3868,3680],[3882,3737],[3739,4110],[3696,4129],[3300,3982],[3269,3917],[3162,3864],[3103,3692],[3183,3466]],color:"blue",popup:"<?=$localization['UI']['sorting']['sections']['aelio']['centalCity']?>"},
		{coordinates:[[ 2667,3721],[3013,3950],[3099,4133],[3065,4266],[3548,4787],[3604,5033],[3465,5410],[3351,5500],[3426,5559],[3074,5991],[3001,6577],[2645,6497],[1862,6587],[1375,6394],[1232,6080],[1184,5918],[1451,5475],[1632,5027],[1855,4849],[2041,4725],[2052,4639],[1977,4557],[2209,4408],[2295,4283],[2568,4123],[2608,3964],[2592,3834]],color:"red",popup:"<?=$localization['UI']['sorting']['sections']['aelio']['mtMagnus']?>"},
		{coordinates:[[2252,2728],[2398,2888],[2502,3182],[2545,3215],[2530,3632],[2667,3721],[2592,3834],[2608,3964],[2568,4123],[2295,4283],[2209,4408],[1977,4557],[2052,4639],[2041,4725],[1855,4849],[1632,5027],[1451,5475],[1184,5918],[1232,6080],[1375,6394],[0,6359],[0,3057],[523,3044],[749,2844],[1047,2811],[1355,2679],[1598,2652],[1720,2700],[1912,2714],[2088,2800]],color:"green",popup:"<?=$localization['UI']['sorting']['sections']['aelio']['southAelio']?>"},
		{coordinates:[[6198,2886],[6038,2730],[5721,2730],[5565,2921],[5444,2963],[5261,2945],[4935,3158],[4746,3107],[4262,2811],[3816,2170],[3882,1960],[4160,1696],[4126,1515],[4358,1354],[4516,1303],[4565,1417],[4787,1559],[5001,1562],[5159,1439],[5258,1405],[5316,1429],[5370,1409],[5417,1307],[5880,1269],[6046,1273],[6108,1224],[6158,1155],[6595,1586],[6587,2086],[6225,2445],[6111,2674]],color:"green",popup:"<?=$localization['UI']['sorting']['sections']['aelio']['northAelio']?>"},
		{coordinates:[[3426,5559],[3539,5560],[3696,5668],[3802,5667],[3868,5735],[4144,5678],[4270,5772],[4272,5843],[4303,5873],[4402,5952],[4421,6207],[4585,6426],[4558,6708],[4408,7164],[4193,7210],[3849,7192],[3450,6979],[3001,6577],[3074,5991]],color:"red",popup:"<?=$localization['UI']['sorting']['sections']['aelio']['laboratoryRuins']?>"},
		{coordinates:[[0,3057],[523,3044],[749,2844],[1047,2811],[1355,2679],[1598,2652],[1720,2700],[1912,2714],[2088,2800],[2252,2728],[2203,2383],[2223,2165],[2386,2160],[2208,1784],[2093,1634],[2120,1537],[2238,1619],[2728,1701],[2812,1656],[2853,1546],[2938,1501],[3080,1562],[3165,1541],[3267,1309],[3384,1288],[3417,1321],[3482,1314],[3651,1165],[3754,1352],[3889,1496],[4081,1579],[4126,1515],[4358,1354],[4516,1303],[4565,1417],[4787,1559],[5001,1562],[5159,1439],[5258,1405],[5316,1429],[5370,1409],[5417,1307],[5880,1269],[6046,1273],[6108,1224],[6158,1155],[6158,0],[0,0]],color:"green",popup:"<?=$localization['UI']['sorting']['sections']['aelio']['westAelio']?>"},
		{coordinates:[[5070,5474],[5050,5212],[4987,4978],[4597,4524],[4612,4316],[4833,4076],[4868,4008],[4907,3543],[4979,3445],[5129,3413],[5244,3439],[5311,3422],[5412,3199],[5645,3023],[5734,2883],[5829,2844],[5949,2862],[6114,3000],[6160,3028],[6300,3337],[6309,3540],[6129,3930],[6346,4179],[6345,4346],[6429,4499],[6434,4862],[6421,5065],[6303,5203],[5995,5316],[5771,5327],[5683,5306],[5488,5338],[5241,5340]],color:"red",popup:"<?=$localization['UI']['sorting']['sections']['aelio']['resolForest']?>"},
		{coordinates:[[6303,5203],[6340,5452],[6591,5697],[6804,5690],[6904,5840],[6906,6336],[6771,6694],[6535,6935],[6270,6931],[6039,6795],[5878,6820],[5592,6588],[5523,6693],[5538,6880],[5255,6930],[5018,6740],[4970,6335],[4721,6077],[4615,5995],[4633,5878],[4692,5836],[4764,5622],[4898,5527],[5032,5601],[5078,5581],[5070,5474],[5241,5340],[5488,5338],[5683,5306],[5771,5327],[5995,5316]],color:"green",popup:"<?=$localization['UI']['sorting']['sections']['aelio']['halphaLake']?>"}
		];
	let sectionsToggle = [];

// OBJECTS
// Central Tower coords
	let centralTower = [
			{coordinates:[3599,3860],popup:"<?=$localization['objects']['centtower']?>"}
		];
	let centralTowerToggle = [];

// Cocoon coords
	let Cocoon = [
			{coordinates:[3333,2606],popup:"<?=$localization['objects']['cocoon']['1']?>"},
			{coordinates:[5521,2442],popup:"<?=$localization['objects']['cocoon']['2']?>"},
			{coordinates:[4436,4107],popup:"<?=$localization['objects']['cocoon']['3']?>"},
			{coordinates:[1003,4935],popup:"<?=$localization['objects']['cocoon']['4']?>"},
			{coordinates:[926,2327],popup:"<?=$localization['objects']['cocoon']['5']?>"},
			{coordinates:[5248,217],popup:"<?=$localization['objects']['cocoon']['6']?>"},
			{coordinates:[4965,5879],popup:"<?=$localization['objects']['cocoon']['7']?>"},
			{coordinates:[1961,5248],popup:"<?=$localization['objects']['cocoon']['8']?>"}
		];
	let CocoonToggle = [];

// Mag coords
	let Mag = [
			{coordinates:[4755,1641],popup:"<?=$localization['objects']['mag']['1']?>"},
			{coordinates:[554,3860],popup:"<?=$localization['objects']['mag']['2']?>"},
			{coordinates:[2809,1037],popup:"<?=$localization['objects']['mag']['3']?>"}
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
			{coordinates:[5740,1043],popup:"<?=$localization['objects']['tower']['2']?>"},
			{coordinates:[3914,5346],popup:"<?=$localization['objects']['tower']['3']?>"}
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
			{coordinates:[5984,1772],popup:"<?=$localization['objects']['urgent']['1']?>"},
			{coordinates:[5201,3144],popup:"<?=$localization['objects']['urgent']['2']?>"}
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
		{coordinates:[6417,1557]},
		{coordinates:[5506,382]},
		{coordinates:[5626,879]},
		{coordinates:[5618,1096]},
		{coordinates:[5576,1123]},
		{coordinates:[5777,1298]},
		{coordinates:[5824,1522]},
		{coordinates:[5897,2662]},
		{coordinates:[5409,1875]},
		{coordinates:[5517,2593]},
		{coordinates:[5564,2756]},
		{coordinates:[5435,2942]},
		{coordinates:[5474,3036]},
		{coordinates:[5289,3304]},
		{coordinates:[5044,2531]},
		{coordinates:[5073,2021]},
		{coordinates:[5237,1737]},
		{coordinates:[5229,192]},
		{coordinates:[4732,382]},
		{coordinates:[4486,1266]},
		{coordinates:[4543,2242]},
		{coordinates:[4251,1766]},
		{coordinates:[4108,179]},
		{coordinates:[4360,635]},
		{coordinates:[3669,664]},
		{coordinates:[3766,1387]},
		{coordinates:[3615,1798]},
		{coordinates:[3573,1893]},
		{coordinates:[4130,2440]},
		{coordinates:[4499,2903]},
		{coordinates:[4843,3388]},
		{coordinates:[4343,3381]},
		{coordinates:[3853,2930]},
		{coordinates:[3115,2385]},
		{coordinates:[2979,2445]},
		{coordinates:[2803,2356]},
		{coordinates:[2753,2254]},
		{coordinates:[2214,1026]},
		{coordinates:[2578,3074]},
		{coordinates:[2578,2588]},
		{coordinates:[2481,2534]},
		{coordinates:[2290,3180]},
		{coordinates:[2310,3566]},
		{coordinates:[1936,494]},
		{coordinates:[1850,1949]},
		{coordinates:[978,1571]},
		{coordinates:[1047,2176]},
		{coordinates:[943,2683]},
		{coordinates:[1020,2899]},
		{coordinates:[990,2983]},
		{coordinates:[1164,3166]},
		{coordinates:[1582,3126]},
		{coordinates:[802,3057]},
		{coordinates:[619,2314]},
		{coordinates:[560,3223]},
		{coordinates:[857,3414]},
		{coordinates:[1144,3518]},
		{coordinates:[1174,4181]},
		{coordinates:[956,5033]},
		{coordinates:[1602,3790]},
		{coordinates:[1850,4050]},
		{coordinates:[1899,4089]},
		{coordinates:[2072,4181]},
		{coordinates:[2070,3612]},
		{coordinates:[2038,3475]},
		{coordinates:[1394,5823]},
		{coordinates:[1860,5187]},
		{coordinates:[1915,5509]},
		{coordinates:[2037,5529]},
		{coordinates:[2295,5664]},
		{coordinates:[2526,6261]},
		{coordinates:[2908,4747]},
		{coordinates:[2994,4705]},
		{coordinates:[3809,4062]},
		{coordinates:[4300,4234]},
		{coordinates:[4586,4541]},
		{coordinates:[4630,5163]},
		{coordinates:[3798,5315]},
		{coordinates:[4919,5154]},
		{coordinates:[4988,5398]},
		{coordinates:[5102,5523]},
		{coordinates:[5182,5520]},
		{coordinates:[5163,5601]},
		{coordinates:[5010,6477]},
		{coordinates:[5848,6749]},
		{coordinates:[6178,6774]},
		{coordinates:[6899,5823]},
		{coordinates:[6649,5906]},
		{coordinates:[6519,5742]},
		{coordinates:[6009,4616]},
		{coordinates:[5606,4694]},
		{coordinates:[5457,4888]},
		{coordinates:[6017,4259]},
		{coordinates:[5764,4181]},
		{coordinates:[5504,4081]},
		{coordinates:[5368,3737]},
		{coordinates:[5132,3673]},
		{coordinates:[4372,6552]},
		{coordinates:[4151,7015]},
		{coordinates:[3981,6926]},
		{coordinates:[3818,6801]},
		{coordinates:[3424,6538]},
		{coordinates:[3635,5836]},
		{coordinates:[3136,6100]},
		{coordinates:[3025,6025]},
		{coordinates:[3147,5908]},
		{coordinates:[3033,5739]},
		{coordinates:[3163,5598]},
		{coordinates:[3399,5179]},
		{coordinates:[3574,4816]},
		{coordinates:[3460,4821]},
		{coordinates:[3527,4719]},
		{coordinates:[577,376]}
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
	
// Saute Apple		
	let sauteApple = [
		{coordinates:[6459,1693]},
		{coordinates:[6283,2233]},
		{coordinates:[5893,1501]},
		{coordinates:[5982,2474]},
		{coordinates:[5701,2124]},
		{coordinates:[5654,2373]},
		{coordinates:[5631,2726]},
		{coordinates:[5473,1365]},
		{coordinates:[5428,1755]},
		{coordinates:[5371,1861]},
		{coordinates:[4918,3041]},
		{coordinates:[4175,2954]},
		{coordinates:[4137,2308]},
		{coordinates:[4113,1883]},
		{coordinates:[4370,1483]},
		{coordinates:[4609,1436]},
		{coordinates:[2876,3183]}
	];
	let sauteAppleToggle = [];
	
// Saute Pear		
	let sautePear = [
		{coordinates:[2227,3119]},
		{coordinates:[1382,2771]},
		{coordinates:[873,3075]},
		{coordinates:[1175,5738]},
		{coordinates:[545,5499]}
	];
	let sautePearToggle = [];
	
// Sodhe Clam		
	let sodheClam = [
		{coordinates:[1616,4638]},
		{coordinates:[1256,3386]},
		{coordinates:[1262,6114]},
		{coordinates:[1234,6001]},
		{coordinates:[1216,5938]},
		{coordinates:[148,4850]},
		{coordinates:[154,4635]},
		{coordinates:[324,4335]}
	];
	let sodheClamToggle = [];
	
// Soh Turnip		
	let sohTurnip = [
		{coordinates:[927,2986]},
		{coordinates:[1536,4581]},
		{coordinates:[1514,4879]},
		{coordinates:[960,5644]},
		{coordinates:[417,5604]},
		{coordinates:[250,5028]}
	];
	let sohTurnipToggle = [];
	
// Soh Mushroom		
	let sohMushroom = [
		{coordinates:[6474,1613]},
		{coordinates:[6323,1406]},
		{coordinates:[6178,1814]},
		{coordinates:[6203,2132]},
		{coordinates:[6170,1359]},
		{coordinates:[6011,1710]},
		{coordinates:[5979,1327]},
		{coordinates:[5826,1334]},
		{coordinates:[6057,2293]},
		{coordinates:[6019,2342]},
		{coordinates:[6035,2452]},
		{coordinates:[5908,2579]},
		{coordinates:[5892,2364]},
		{coordinates:[5780,2443]},
		{coordinates:[5796,2288]},
		{coordinates:[5819,1886]},
		{coordinates:[5804,1645]},
		{coordinates:[5725,1535]},
		{coordinates:[5724,1814]},
		{coordinates:[5569,1374]},
		{coordinates:[5574,1813]},
		{coordinates:[5483,1829]},
		{coordinates:[5422,1806]},
		{coordinates:[5418,1676]},
		{coordinates:[5348,1925]},
		{coordinates:[5316,1535]},
		{coordinates:[5267,1606]},
		{coordinates:[5228,1709]},
		{coordinates:[5189,1549]},
		{coordinates:[5636,2658]},
		{coordinates:[4799,1540]},
		{coordinates:[4182,2221]}
	];
	let sohMushroomToggle = [];
	
// Sodhe Crab		
	let sodheCrab = [
	{coordinates:[5333,3171]},
		{coordinates:[5295,3290]},
		{coordinates:[5037,3361]},
		{coordinates:[4916,3378]},
		{coordinates:[4837,3425]},
		{coordinates:[4837,3760]},
		{coordinates:[4813,3991]},
		{coordinates:[4566,4269]},
		{coordinates:[4541,4580]},
		{coordinates:[4680,4711]},
		{coordinates:[4805,4885]},
		{coordinates:[4838,4973]},
		{coordinates:[4876,5068]},
		{coordinates:[4934,5045]},
		{coordinates:[4989,5356]},
		{coordinates:[5014,5418]},
		{coordinates:[4581,5562]}
	];
	let sodheCrabToggle = [];
	
// Sodhe Lobster		
	let sodheLobster = [
		{coordinates:[5469,2700]},
		{coordinates:[5084,2596]},
		{coordinates:[5022,2117]},
		{coordinates:[4974,1934]},
		{coordinates:[4425,1652]}
	];
	let sodheLobsterToggle = [];
	
// Soh Herb		
	let sohHerb = [
		{coordinates:[4528,6873]},
		{coordinates:[4680,6514]},
		{coordinates:[4385,5794]},
		{coordinates:[4184,5667]},
		{coordinates:[4130,5882]},
		{coordinates:[3977,5819]},
		{coordinates:[3921,5499]},
		{coordinates:[3761,5157]},
		{coordinates:[3618,1900]},
		{coordinates:[3219,1933]},
		{coordinates:[2732,2283]},
		{coordinates:[2573,2922]}
	];
	let sohHerbToggle = [];

// Minerals
// Monotite
	let monotite = [
		{coordinates:[5409,3124]},
		{coordinates:[5331,3238]},
		{coordinates:[5180,3304]},
		{coordinates:[5086,3328]},
		{coordinates:[4944,3342]},
		{coordinates:[4847,3373]},
		{coordinates:[4754,3697]},
		{coordinates:[4818,3761]},
		{coordinates:[4650,4179]},
		{coordinates:[4510,4367]},
		{coordinates:[4499,4450]},
		{coordinates:[4882,5390]},
		{coordinates:[4062,5573]},
		{coordinates:[4031,5257]},
		{coordinates:[4014,5284]},
		{coordinates:[3969,5271]},
		{coordinates:[3624,1543]},
		{coordinates:[3657,1887]},
		{coordinates:[3431,2363]},
		{coordinates:[3281,2255]},
		{coordinates:[3239,2160]},
		{coordinates:[3182,2252]},
		{coordinates:[3050,2370]},
		{coordinates:[3146,2020]},
		{coordinates:[2823,2165]},
		{coordinates:[2795,2425]},
		{coordinates:[2760,2248]},
		{coordinates:[2726,2206]},
		{coordinates:[2598,2259]}
	];
	let monotiteToggle = [];

// Dualomite
	let dualomite = [
		{coordinates:[487,648]},
		{coordinates:[827,590]},
		{coordinates:[1019,1423]},
		{coordinates:[1063,1382]},
		{coordinates:[1238,1549]},
		{coordinates:[1350,1607]},
		{coordinates:[989,1991]},
		{coordinates:[843,1959]},
		{coordinates:[629,2238]},
		{coordinates:[706,2279]},
		{coordinates:[618,2302]},
		{coordinates:[907,2727]},
		{coordinates:[1195,2466]},
		{coordinates:[1420,2194]},
		{coordinates:[928,3127]},
		{coordinates:[999,3070]},
		{coordinates:[944,2979]},
		{coordinates:[1356,3010]},
		{coordinates:[1975,1759]},
		{coordinates:[1975,1107]},
		{coordinates:[1902,724]},
		{coordinates:[2504,2167]},
		{coordinates:[2593,2113]},
		{coordinates:[2828,1992]},
		{coordinates:[2701,1738]},
		{coordinates:[2275,3300]},
		{coordinates:[1356,4575]},
		{coordinates:[1460,4430]},
		{coordinates:[1543,4576]},
		{coordinates:[1920,4622]},
		{coordinates:[1861,4928]},
		{coordinates:[2098,5192]},
		{coordinates:[1924,5038]},
		{coordinates:[1794,5161]},
		{coordinates:[3429,1285]},
		{coordinates:[3635,1345]},
		{coordinates:[3784,1209]},
		{coordinates:[4345,654]},
		{coordinates:[4457,863]},
		{coordinates:[4573,594]},
		{coordinates:[5466,366]},
		{coordinates:[5535,370]}
	];
	let dualomiteToggle = [];
		
// Trinite
	let trinite = [
		{coordinates:[688,2286]},
		{coordinates:[615,2223]},
		{coordinates:[1023,1445]},
		{coordinates:[1309,1487]},
		{coordinates:[1995,1769]},
		{coordinates:[2618,2145]},
		{coordinates:[2757,1899]},
		{coordinates:[2719,1729]},
		{coordinates:[3221,1700]},
		{coordinates:[4144,2431]},
		{coordinates:[4372,1443]},
		{coordinates:[4634,832]},
		{coordinates:[5303,1612]},
		{coordinates:[5261,1644]},
		{coordinates:[5323,1758]},
		{coordinates:[5513,1941]},
		{coordinates:[5588,1990]},
		{coordinates:[5511,2218]},
		{coordinates:[5640,2345]},
		{coordinates:[6364,1616]},
		{coordinates:[6481,1720]}
	];
	let triniteToggle = [];


// Photon Chunk
	let PhotonChunk = [
		{coordinates:[2579,2534]},
		{coordinates:[2338,3084]},
		{coordinates:[2344,3235]},
		{coordinates:[2282,3140]},
		{coordinates:[2225,3133]},
		{coordinates:[2161,3328]},
		{coordinates:[2209,3235]},
		{coordinates:[2331,3949]},
		{coordinates:[1953,3363]},
		{coordinates:[1575,3232]},
		{coordinates:[1542,3106]},
		{coordinates:[1414,2972]},
		{coordinates:[1319,2965]},
		{coordinates:[1257,2989]},
		{coordinates:[1179,3022]},
		{coordinates:[1175,3089]},
		{coordinates:[859,4431]},
		{coordinates:[1524,4448]},
		{coordinates:[1584,4526]},
		{coordinates:[1867,4581]},
		{coordinates:[2044,4915]},
		{coordinates:[1851,5103]}
	];
	let PhotonChunkToggle = [];


// Photon Quartz
	let PhotonQuartz = [
		{coordinates:[6552,1728]},
		{coordinates:[6511,1635]},
		{coordinates:[6410,1635]},
		{coordinates:[6439,1588]},
		{coordinates:[6360,1555]},
		{coordinates:[6343,1466]},
		{coordinates:[6240,1347]},
		{coordinates:[6113,1283]},
		{coordinates:[6479,2027]},
		{coordinates:[6264,2265]},
		{coordinates:[5519,1403]},
		{coordinates:[5256,1683]},
		{coordinates:[5241,1740]},
		{coordinates:[5704,2433]},
		{coordinates:[5631,2433]},
		{coordinates:[5722,2211]},
		{coordinates:[5741,2128]},
		{coordinates:[5640,2028]},
		{coordinates:[5589,2073]},
		{coordinates:[5542,2019]},
		{coordinates:[5525,1949]},
		{coordinates:[5383,1995]},
		{coordinates:[5447,2603]},
		{coordinates:[5496,2785]},
		{coordinates:[5458,2873]},
		{coordinates:[5192,2962]},
		{coordinates:[5120,3027]},
		{coordinates:[4206,2859]},
		{coordinates:[4100,2870]},
		{coordinates:[4697,4718]},
		{coordinates:[4853,5039]},
		{coordinates:[4962,5366]},
		{coordinates:[3874,4638]},
		{coordinates:[2986,2258]},
		{coordinates:[2627,2233]}
	];
	let PhotonQuartzToggle = [];
	
// Alpha Reactors
	let alphaReactor = [
		{coordinates:[5815,1449]},
		{coordinates:[5338,2104]},
		{coordinates:[4809,3383]},
		{coordinates:[3906,1961]},
		{coordinates:[3339,2162]},
		{coordinates:[326,5358]}
	];
	let alphaReactorToggle = [];