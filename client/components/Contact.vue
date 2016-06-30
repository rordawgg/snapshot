<style lang="scss" scoped>
	@import '../styles/_main';

	.contact-close{
		float: right;
		padding-top: 40px;
		padding-right: 15px;
		a{
			color: white;
			text-decoration: none;
			font-size: 1.2rem;
		}
	}
	.contact-cont {
		@include make-container();
		min-height: 200px;
		color: $primary;
		background-color: #2E2E2E;

		.contact-info {
			@include make-row();
			padding: 60px 0 60px 20px;
		}
	}
</style>

<template>
	<div class='contact-cont'>
		<div class="contact-close">
			<a href='#' @click.prevent='close'>Close</a>
		</div>
		<div class='contact-info'>
			<template v-for='item in items'>
				<contact-item :item='item'></contact-item>
			</template>
		</div>
	</div>
</template>

<script>
	var ContactItem = require('./ContactItem.vue');

	module.exports = {
		name: 'Contact',

		components: {
			ContactItem
		},

		data() {
			return {
				items: [
					{
						title: 'Portland, Ore',
						fields: [
							'1300 SE Start St',
							'503-123-4567'
						]
					},
					{
						title: 'Jacksonville, Ore',
						fields: [
							'123 Street',
							'503-123-4567'
						]
					},
					{
						title: 'Inquiries',
						fields: [
							'email@snapshot.is',
							'503-123-4567'
						]
					},
					{
						title: 'Follow Us',
						fields: [
							'Twitter',
							'Facebook'
						]
					},
				]
			}
		},

		methods: {
			close() {
				this.$dispatch('close');
			}
		}
	}
</script>
