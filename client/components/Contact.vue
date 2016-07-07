<style lang="scss" scoped>
	@import '../styles/_main';

	.contact-close{
		float: right;
		padding-top: 61px;
		padding-right: 92px;
		a {
			color: $primary;
			text-decoration: none;
			font-size: 1.2rem;
		}
	}
	.contact-cont {
		@include make-container();
		min-height: 358px;
		position: absolute;
		width: 100%;
		min-height: 200px;
		color: $primary;
		background-color: #2E2E2E;
		z-index: 1005;
		transition: 300ms;
		top: 0;

		.contact-info {
			@include make-row();
			padding: 135px 0 64px 48px;
		}
	}

.slide-transition {
	top: 0px;
	transform: translateY(0);
}

.slide-enter, .slide-leave {
	transform: translateY(-100%);
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
