// musicWorker.js
var audio = new Audio('../audio/bgMusic.mp3');
audio.loop = true;
audio.play();

self.onconnect = function(e) {
	var port = e.ports[0];

	port.onmessage = function(e) {
		if (e.data.command == 'play') {
			audio.play();
		} else if (e.data.command == 'pause') {
			audio.pause();
		}
	};
};