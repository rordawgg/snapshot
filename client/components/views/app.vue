<style lang='scss'>
	@import '../../styles/_main';

	.cont {
		color: #fff;

		a {
			color: #fff;
		}

		&.light {
			color: #000;

			p, a {
				color: $fontColor;
			}
		}
	}

	.contact-button {
		position: absolute;
		top: 13px;
		right: 15px;
		font-size: 1.125rem;
		z-index: 1003;
	}

	#content {
		transition: all 200ms, color 50ms;
		// padding-bottom: 115px;
		//
		// @include media-breakpoint-up(md) {
		// 	padding-bottom: 200px;
		// }
	}

	.fade-transition {
	  transition: all .5s;
		transform: translateY(0);
	}

	.fade-enter, .fade-leave {
	  opacity: 0;
		transform: translateY(100%);
	}

</style>

<template>
	<div class="cont" v-bind:class='{"light": light}'>
		<contact
			v-on:close='showContact = false'
			v-if='showContact'
			transition='slide'
		></contact>

		<div class="contact-open" v-show="contactOpen">
			<a class='contact-button' href="#" v-bind:style='{color: color}' @click.prevent='showContact = true'>Contact</a>
		</div>

		<div
			id="content"
			@click='showContact = false;'
			v-bind:style='{backgroundColor: bgColor}'>
			<router-view
				transition='fade'
				transition-mode='out-in'
			></router-view>
			<!-- <template v-if='$roue.name == "project"'>
				<router-view
				 :projects='data.projects'
				 class="view"></router-view>
			</template>

			<template v-else>
				<router-view
					:title='data.pages.home.title'
					:header='data.pages.home.header'
					:sections='data.pages.home.sections'
					:projects='data.projects'
				 	class="view"></router-view>
			</template> -->
		</div>
	</div>
</template>

<script>
	var Color = require('color');

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
				light: true,
				contactOpen: true,
				// data: {}
			}
		},

		ready() {
			// this.contrast();
		},

		methods: {
			// getData() {
			// 	this.$http.get('/api').then(function (res) {
			// 		console.log(res.data);
			// 		this.$set('data', res.data);
			// 	}, function (err) {
			// 		console.log(err);
			// 	});
			// }

			contrast() {
				this.$set('light', Color(this.bgColor).light());
			}
		},

		events: {
			changeBg (color){
				this.$set('bgColor', color);
				this.contrast();
			},

			resetBg(){
				this.$set('bgColor', '#fff');
				this.contrast();
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
