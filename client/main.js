var Vue = require("vue");
var Router = require("vue-router");
var Http = require("vue-resource");

var App = require("./components/views/app.vue");
var Home = require("./components/views/home.vue");
var Project = require("./components/views/project.vue");

Vue.use(Router);
Vue.use(Http);

var router = new Router({history: true});

router.map({
	"/projects/:name": {
		component: Project
	},
	"/home": {
		component: Home
	}
});

router.redirect({
	'*': '/home'
});

router.start(App, "#app");
