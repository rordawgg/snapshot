<style lang="scss" scoped>
	@import '../styles/_main';

	.contact-close{
		position: absolute;
		top: 0;
		right: 0;

		a {
			display: block;
			color: $primary;
			text-decoration: none;
			font-size: 1.2rem;
			padding-top: 61px;
			padding-right: 92px;
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
				items: []
			}
		},

		// props: [
		// 	'items'
		// ],

		ready() {
			this.getData();
		},

		methods: {
			getData() {
				this.$http.get('/api/contact').then(function (res) {
					this.$set('items', res.data.items);
				}, function (err) {
					console.log(err);
				});
			},

			close() {
				this.$dispatch('close');
			}
		}
	}
</script>
