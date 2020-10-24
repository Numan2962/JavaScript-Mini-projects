
const daysEl    = document.getElementById('days');
const hoursEl   = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = "1 Jan 2021";

countdown = () =>{
	const newYearDate = new Date(newYear);
	const currentDate = new Date();

	const remainingTime = (newYearDate - currentDate);

	const seconds = remainingTime / 1000;

	const days = Math.floor(seconds /(24*60*60));
	const hours = Math.floor(seconds/3600)%24;
	const minutes = Math.floor((seconds/60)%60);
	const sseconds = Math.floor(seconds%(60));

	daysEl.innerHTML = format(days);
	hoursEl.innerHTML = format(hours);
	minutesEl.innerHTML = format(minutes);
	secondsEl.innerHTML = format(sseconds);
}

format = (time) =>{
		if(time<1)
			return 0;
		return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);