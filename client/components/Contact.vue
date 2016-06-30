<style lang="scss" scoped>
	@import '../styles/_main';

	.contact-cont {
		@include make-container();
		min-height: 500px;
		color: $primary;

		.contact-info {
			@include make-row();
			background-color: #2E2E2E;
		}
	}
</style>

<template>
	<div class='contact-cont'>
		<div class='contact-info'>
			<template v-for='item in items'>
				<contact-item :item='item'></contact-item>
			</template>
		</div>

		<a href="#">Close</a>
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
		}
	}
</script>
