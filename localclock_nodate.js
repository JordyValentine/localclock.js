// localclock_nodate.js - JordyValentine.com - Have fun, do whatever you want with it, but if you found it useful a thanks would be appreciated :)
// Config -
// You can remove the style variables and style the output with a css class instead
	var lofont_face = "Verdana";	// Set the font
	var lofont_size = "10";				// Font size (in pt)
	var lofont_color = "#FFFFFF";	// Font color
	var lobg_color = "#333333";		// Background color
	var lowidth = 80;							// Width of the clock (in pixels)
	var lo12_hour = 1;						// 24 or 12 hour time 0 = 24, 1 = 12

	var dn = ""; var old = "";		// Global variables
// For dinosaur browsers show a static clock
	if (document.all||document.getElementById) { document.write('<span id="LiveClockIE" style="width:'+lowidth+'px; background-color:'+lobg_color+'"></span>'); }
	else if (document.layers) { document.write('<ilayer bgColor="'+lobg_color+'" id="ClockPosNS"><layer width="'+lowidth+'" id="LiveClockNS"></layer></ilayer>'); }
	else { old = "true"; show_clock(); }
// The guts of the script
	function show_clock() {

		//show clock in NS4
		if (document.layers)
                document.ClockPosNS.visibility="show"
		if (old == "die") { return; }
	// Get time variables
		var Digital = new Date();
		var hours = Digital.getHours();
		var minutes = Digital.getMinutes();
		var seconds = Digital.getSeconds();
	// Checks/applies 12/24 hour setting from config section
		if (lo12_hour) {
			dn = "AM";
			if (hours > 12) { dn = "PM"; hours = hours - 12; }
			if (hours == 0) { hours = 12; }
		} else {
			dn = "";
		}
		if (minutes <= 9) { minutes = "0"+minutes; }
		if (seconds <= 9) { seconds = "0"+seconds; }
	// The actual HTML of the clock, feel free to strip out the font stuff etc.
		loclock = '';
		loclock += '<font style="color:'+lofont_color+'; font-family:'+lofont_face+'; font-size:'+lofont_size+'pt;">';
		loclock += hours+':'+minutes+':'+seconds+' '+dn;
		loclock += '</font>';
 // Writes the clock, party time!
		if (old == "true") {
			document.write(loclock);
			old = "die"; return;
		}

		if (document.layers) {
			clockpos = document.ClockPosNS;
			liveclock = clockpos.document.LiveClockNS;
			liveclock.document.write(loclock);
			liveclock.document.close();
		} else if (document.all) {
			LiveClockIE.innerHTML = loclock;
		} else if (document.getElementById) {
			document.getElementById("LiveClockIE").innerHTML = loclock;
		}

		setTimeout("show_clock()",1000);
}
