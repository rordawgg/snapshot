var Vue = require("vue");
var Router = require("vue-router");

var App = require("./components/views/app.vue");
var Home = require("./components/views/home.vue");

Vue.use(Router);

var router = new Router({history: true});

router.map({
	"/home": {
		component: Home
	}
});

router.redirect({
	"*": "/home"
});

router.start(App, "#app");

