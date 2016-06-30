<style lang='scss' scoped>
	@import '../../styles/_main';

	.contact-button {
		position: absolute;
		top: 13px;
		right: 15px;
		font-size: 1.125rem;
	}
</style>

<template>
	<div id="cont">
		<contact
			v-on:close=' showContact = false'
			v-if='showContact'
			transition='slide'
			></contact>

		<div class="contact-open">
			<a class='contact-button' href="#" @click='showContact = true'>Contact</a>
		</div>

		<div id="content">
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
				showContact: false
			}
		}
	}
</script>
