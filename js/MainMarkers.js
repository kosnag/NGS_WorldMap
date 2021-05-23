// MARKERS UI
var marker = 
	L.marker([3599,3860],{icon: CentTower}).bindPopup("Central Tower (Aelio)").addTo(map);
	L.marker([3333,2606],{icon: Cocoon}).bindPopup("Cocoon").addTo(map);
	L.marker([4436,4107],{icon: Cocoon}).bindPopup("Cocoon").addTo(map);
	L.marker([1003,4935],{icon: Cocoon}).bindPopup("Cocoon").addTo(map);

// POPUP CONTENTS
var FirstStepsCocoon = "<b>Cocoon</b> (1 Player)<br><h1>First Steps</h1><p>This is the facility where an Instructor who tests the basic abilities of every ARKS.<br>By following the instructions, one can learn new abilities while reaching the targeted goal.</p>";