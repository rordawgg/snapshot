var Vue = require("vue");
var Router = require("vue-router");

var App = require("./components/views/app.vue");
var Home = require("./components/views/home.vue");
var Project = require("./components/views/project.vue");

Vue.use(Router);

var router = new Router({history: true});

router.map({
	"/projects/:name": {
		component: Project
	},
	"/home": {
		component: Home
	}
});

router.start(App, "#app");

