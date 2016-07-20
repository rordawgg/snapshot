<style lang='scss' scoped>
	@import '../styles/_main';
	.project-item {
		background: no-repeat center center;
		background-size: cover;
		box-sizing: border-box;
		height: 219px;

		&:before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #000;
			opacity: 0;
			transition: 100ms;
		}

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

			&:before {
				opacity: .2;
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
	<a v-link="{ path: 'projects/' + slug }">
		<div
			v-bind:style='style'
			class='project-item'
			v-on:mouseover="$dispatch('changeBg', color)"
			v-on:mouseout="$dispatch('resetBg')" >

			<div class='project-name'>
				<span>{{ name }}</span>
			</div>

		</div>
	</a>
</template>

<script>

	module.exports = {
		name: 'ProjectItem',

		props: [
			'name',
			'cover',
			'color',
			'slug'
		],

		data() {
			return {
				style: {}
			}
		},

		ready() {
		 this.$set('style', {
			 backgroundImage: 'url(' + this.cover + ')'
		 });
		}
	}
</script>
