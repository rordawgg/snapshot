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
			<router-view class="view"></router-view>
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
				contactOpen: true
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
