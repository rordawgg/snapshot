<style lang='scss' scoped>
	@import '../styles/_main';
	.project-item{
		background: #fff url('http://lorempixel.com/400/200') no-repeat center center;
		background-size: cover;
		box-sizing: border-box;
		height: 219px;

		@include make-col();
		@include make-col-span(12);

		@include media-breakpoint-between(sm,xl) {
			@include make-col-span(6);	
		}

		.project-name{
			margin: auto 0 auto 0;
			color: $primary;
			opacity: 0;
			text-align: center;
		}
		&:hover{
			.project-name{
				opacity: 1;
			}
		}

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
			<h1>Project Name</h1>
		</div>
		
	</div>
</template>

<script>
	module.exports = {
		name: 'ProjectItem'
	}
</script>
