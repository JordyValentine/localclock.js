// localclock.js - JordyValentine.com - Have fun, do whatever you want with it, but if you found it useful a thanks would be appreciated :)
// Config -
// You can remove the style variables and style the output with a css class instead
	var lofont_face = "Verdana";			// Set the font
	var lofont_size = "10";						// Font size (in pt)
	var lofont_color = "#FFFFFF";			// Font color
	var lobg_color = "#333333";				// Background color
	var lopre_text = "Local Time: ";	// Text to display before the clock:
	var lowidth = 300;								// Width of the clock (in pixels)
	var lo12_hour = 1;								// 24 or 12 hour time 0 = 24, 1 = 12
	var loupdate = 1;									// How often the clock updates, 0 = Never 1 = Every Second 2 = Every Minute. If you pick 0 or 2 the seconds won't display
	var DisplayDate = 1;							// Show the date 0 = No 1 = Yes
// end basic config

// Detect minimum browser version
        var ie4=document.all
        var ns4=document.layers
        var ns6=document.getElementById&&!document.all

// Global varibales
	var dn = "";
	var mn = "th"; // blank this variable to remove the 'th' after dates.
	var old = "";

// Date function config
	var DayOfWeek = new Array(7);
		DayOfWeek[0] = "Sunday";
		DayOfWeek[1] = "Monday";
		DayOfWeek[2] = "Tuesday";
		DayOfWeek[3] = "Wednesday";
		DayOfWeek[4] = "Thursday";
		DayOfWeek[5] = "Friday";
		DayOfWeek[6] = "Saturday";
// Remove the 'DayOfWeek' array above and uncomment these for abbreviated days
//	var DayOfWeek = new Array(7);
//		DayOfWeek[0] = "Sun";
//		DayOfWeek[1] = "Mon";
//		DayOfWeek[2] = "Tues";
//		DayOfWeek[3] = "Wed";
//		DayOfWeek[4] = "Thurs";
//		DayOfWeek[5] = "Fri";
//		DayOfWeek[6] = "Sat";
	var MonthOfYear = new Array(12);
		MonthOfYear[0] = "January";
		MonthOfYear[1] = "February";
		MonthOfYear[2] = "March";
		MonthOfYear[3] = "April";
		MonthOfYear[4] = "May";
		MonthOfYear[5] = "June";
		MonthOfYear[6] = "July";
		MonthOfYear[7] = "August";
		MonthOfYear[8] = "September";
		MonthOfYear[9] = "October";
		MonthOfYear[10] = "November";
		MonthOfYear[11] = "December";
// Uncomment these and remove the 'MonthOfYear' array above to use date numbers
// Use these and change the 'mn' variable to a '/' to output dates as dd/mm
//	var MonthOfYear = new Array(12);
//		MonthOfYear[0] = "01";
//		MonthOfYear[1] = "02";
//		MonthOfYear[2] = "03";
//		MonthOfYear[3] = "04";
//		MonthOfYear[4] = "05";
//		MonthOfYear[5] = "06";
//		MonthOfYear[6] = "07";
//		MonthOfYear[7] = "08";
//		MonthOfYear[8] = "09";
//		MonthOfYear[9] = "10O";
//		MonthOfYear[10] = "11";
//		MonthOfYear[11] = "12";

// This is the clock update time set by the 'ClockUpdate' config
	var ClockUpdate = new Array(3);
		ClockUpdate[0] = 0;
		ClockUpdate[1] = 1000;
		ClockUpdate[2] = 60000;

// For dinosaur browsers show a static clock
	if (ie4||ns6) { document.write('<span id="LiveClockIE" style="width:'+lowidth+'px; background-color:'+lobg_color+'"></span>'); }
	else if (document.layers) { document.write('<ilayer bgColor="'+lobg_color+'" id="ClockPosNS" visibility="hide"><layer width="'+lowidth+'" id="LiveClockNS"></layer></ilayer>'); }
	else { old = "true"; show_clock(); }

// The guts of the script
	function show_clock() {
		if (old == "die") { return; }

	//show clock in NS4
		if (ns4)
                document.ClockPosNS.visibility="show"
	// Get date variables
		var Digital = new Date();
		var day = Digital.getDay();
		var mday = Digital.getDate();
		var month = Digital.getMonth();
		var hours = Digital.getHours();
		var minutes = Digital.getMinutes();
		var seconds = Digital.getSeconds();

	// Fix the 'mn' variable if not 'th', blank these out along with the mn variable if you dont want th, st, nd etc. after dates
		if (mday == 1) { mn = "st"; }
		else if (mday == 2) { mn = "nd"; }
		else if (mday == 3) { mn = "rd"; }
		else if (mday == 21) { mn = "st"; }
		else if (mday == 22) { mn = "nd"; }
		else if (mday == 23) { mn = "rd"; }
		else if (mday == 31) { mn = "st"; }

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
		loclock += lopre_text;
		loclock += hours+':'+minutes;
		if ((loupdate < 2) || (loupdate == 0)) { loclock += ':'+seconds; }
		loclock += ' '+dn;
		if (DisplayDate) { loclock += ' on '+DayOfWeek[day]+', '+mday+mn+' '+MonthOfYear[month]; }
		loclock += '</font>';

		if (old == "true") {
			document.write(loclock);
			old = "die";
			return;
		}

	// Writes the clock, party time!
		if (ns4) {
			clockpos = document.ClockPosNS;
			liveclock = clockpos.document.LiveClockNS;
			liveclock.document.write(loclock);
			liveclock.document.close();
		} else if (ie4) {
			LiveClockIE.innerHTML = loclock;
		} else if (ns6){
			document.getElementById("LiveClockIE").innerHTML = loclock;
                }

	if (loupdate != 0) { setTimeout("show_clock()",ClockUpdate[loupdate]); }
}
