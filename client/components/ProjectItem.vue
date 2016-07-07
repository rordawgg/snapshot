<style lang='scss' scoped>
	@import '../styles/_main';
	.project-item {
		background: #fff no-repeat center center;
		background-size: cover;
		box-sizing: border-box;
		height: 219px;

		@include make-col();
		@include make-col-span(12);

		@include media-breakpoint-between(sm,xl) {
			@include make-col-span(6);

		}

		.project-name {
			color: $primary;
			opacity: 0;
			font-size: 2.5rem;
			text-align: center;
			position: relative;
			transform: translateY(-50%);
			top: 50%;
			transition: 100ms;
		}
		&:hover {
			.project-name {
				opacity: 1;
			}
		}

		/*Break points for different screen sizes*/
		@include media-breakpoint-up(md) {
			height: 260px;
		}

		@include media-breakpoint-up(lg) {
			height: 318px;
		}

		@include media-breakpoint-up(xl) {
			height: 431px;
		}
	}
</style>

<template>
	<div class="project-item">
		<div class="project-name">
			<span>{{ name }}</span>
		</div>

	</div>
</template>

<script>
	module.exports = {
		name: 'ProjectItem',

		props: [
			'name',
			'path',
			'color'
		],

		data() {
			return {
				style: {}
			}
		},

		ready() {
		 this.$set('style', {
			 backgroundImage: this.path
		 });
		}
	}
</script>
