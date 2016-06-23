var Vue = require("vue");
var Router = require("vue-router");

var App = require("./components/views/app.vue");
var Test = require("./components/test.vue");
var Home = require("./components/home.vue");

Vue.use(Router);

var router = new Router({history: true});

router.map({
	"/test": {
		component: Test
	},
	"/home": {
		component: Home
	}
});

router.redirect({
	"*": "/home"
});

router.start(App, "#app");

