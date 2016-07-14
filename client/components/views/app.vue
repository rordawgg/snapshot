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

		<div class="contact-open">
			<a class='contact-button' href="#" v-bind:style='{color: color}' @click.prevent='showContact = true'>Contact</a>
		</div>

		<div id="content" @click='showContact = false;' v-bind:style='{backgroundColor: bgColor}'>
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
				color: '#000'
			}
		},

		events: {
			changeBg (color){
				this.$set('bgColor', color);
			},

			resetBg(){
				this.$set('bgColor', '#fff');
			},

			color(color) {
				this.$set('color', color);
			},

			showContact() {
				this.$set('showContact', true);
			}
		}
	}
</script>
