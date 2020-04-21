(function() {
	var divclock = document.getElementById('clock');
	//				console.log(divclock)
	function formatTime(num) {
		return (num >= 10 ? "" : "0") + num;
	}

	function showtime() {
		var date = new Date();
		divclock.innerHTML = formatTime(date.getHours()) + ":" + formatTime(date.getMinutes()) + ":" + formatTime(date.getSeconds());
	}
	//定时器
	showtime()
		//setInterval(函数(是函数的名字/"函数名字()"),时间);
	setInterval(showtime, 1000);
}())