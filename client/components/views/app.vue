<style lang='scss' scoped>
	@import '../../styles/_main';

	.contact-button {
		float: right;
		padding: 20px 20px;
		text-decoration: none;
		color: inherit;
		font-size: 1.75rem;
	}
</style>

<template>
	<div id="cont">
		<contact v-on:close=' showContact = false' v-if='showContact'></contact>

		<a class='contact-button' href="#">
			Contact
		</a>
		
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
