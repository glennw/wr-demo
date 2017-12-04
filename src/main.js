import Vue from 'vue'
import App from './App.vue'

require('./js/fpsmeter.min.js');

new Vue({
	el: '#app',
  	render: h => h(App)
})

var meter = new FPSMeter(document.body, {
	graph: true,
	history: 25,
	theme: 'transparent',
	smoothing: 20,
	heat: true,
});

var tick = function() {
	meter.tick();
	requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
