<style lang='scss' scoped>
	@import '../../styles/_main';
</style>

<template>
	<div id="cont">
		<contact v-on:close='showContact = false' v-if='showContact'></contact>

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
