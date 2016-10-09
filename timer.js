function timeLeft(t)
	{
	var d = Date.parse(t) - Date.parse(new Date());
	var s = Math.floor( (d/1000) % 60 );
	var m = Math.floor( (d/1000/60) % 60 );
	var h = Math.floor( (d/1000/60/60) % 24 );
	var a = Math.floor( d/1000/60/60/24 );
	return {
		'total' : d,
		'days' : a,
		'hours' : h,
		'minutes' : m,
		'seconds' : s
	};
}
function initClock(id, t)
{
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

	function updateClock()
	{
		var d = timeLeft(t);
		daysSpan.innerHTML = d.days;
   			hoursSpan.innerHTML = d.hours;
	    	minutesSpan.innerHTML = d.minutes;
 			secondsSpan.innerHTML = ('0' + d.seconds).slice(-2);

		if (d.total <= 0)
			clearInterval(interval);
	}

	updateClock();
	var interval = setInterval(updateClock,1000);
}


var deadline = '2016-11-18 CST';
initClock('clockdiv', deadline);