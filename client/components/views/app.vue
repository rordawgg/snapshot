<style lang='scss' scoped>
	@import '../../styles/_main';

	.contact-button {
		position: absolute;
		top: 13px;
		right: 15px;
		font-size: 1.125rem;
	}

	#content{
		transition: 150ms;
	}
</style>

<template>
	<div id="cont">
		<contact
			v-on:close='showContact = false'
			v-if='showContact'
			transition='slide'
		></contact>

		<div class="contact-open" v-show="contactOpen">
			<a class='contact-button' href="#" v-bind:style='{color: color}' @click.prevent='showContact = true'>Contact</a>
		</div>

		<div id="content" @click='showContact = false;'  v-bind:style='{backgroundColor: bgColor}'>
			<template v-if='$route.name == "project"'>
				<router-view
				 :projects='data.projects'
				 class="view"></router-view>
			</template>

			<template v-else>
				<router-view
					:title='data.pages.home.title'
					:header='data.pages.home.header'
					:descriptions='data.pages.home.descriptions'
					:projects='data.pages.home.projects'
				 	class="view"></router-view>
			</template>
		</div>
	</div>
</template>

<script>
	var Contact = require('../Contact.vue');

	module.exports = {
		name: 'App',

		components: {
			Contact
		},

		data() {
			return {
				showContact: false,
				bgColor: '#fff',
				contactOpen: true,
				data: {
				  "projects": {
				    "sunday-afternoons": {
							name: 'Sunday Afternoons',
							color: 'rgb(162, 168, 170)',
							cover: '/img/sunday_afternoons.png',
							hero: '/img/sunday-afternoons-hero.png',
							sections: [
								{
									"type": "paragraph",
									"content": [
										'Ut interdum sit amet eros ut vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit, mauris sed maximus tempus, quam massa accumsan mauris.'
									]
								},

								{
									"type": "grid",
									"content": [
										{
											"path": "http://placehold.it/283x393/",
											"alt": "image",
											"effect": "none",
											"span": "md"
										},
										{
											"path": "http://placehold.it/283x393/",
											"alt": "image",
											"effect": "none",
											"span": "md"
										},
										{
											"path": "http://placehold.it/595x480/",
											"alt": "image",
											"effect": "none",
											"span": "lg"
										}
									]
								},

								{
									type: 'full',
									content: {
										path: 'http://placehold.it/344x510/',
										alt: 'hey man',
										span: 'md'
									}
								}
							]
						}
				  },
				  "pages": {
				    "home": {
				      "title": "Snapshot.is",
				      "header": "Creative Technologist",
				      "descriptions": [
				        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
				        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
				      ]
				    }
				  }
				}
			}
		},

		events: {
			changeBg (color){
				this.$set('bgColor', color);
			},

			resetBg(){
				this.$set('bgColor', '#fff');
			},

			showContact(){
				this.$set('showContact', true);
			},
			closeContactOpen(){
				this.$set('contactOpen', false);
			},
			openContactOpen(){
				this.$set('contactOpen', true);
			}
		}
	}
</script>
