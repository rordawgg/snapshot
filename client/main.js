var Vue = require("vue");
var Router = require("vue-router");
var Http = require("vue-resource");

var App = require("./components/views/app.vue");
var Home = require("./components/views/home.vue");
var ProjectDirector = require('./components/ProjectDirector.vue');

Vue.use(Router);
Vue.use(Http);

var router = new Router({history: true});

router.map({
	"/projects/:name": {
		component: ProjectDirector,
		name: 'project'
	},
	"/home": {
		component: Home,
		name: 'home'
	}
});

router.redirect({
	'*': '/home'
});

router.start(App, "#app");
