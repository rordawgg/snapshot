<style lang='scss' scoped>
	.project-item{
		background: #fff url('http://lorempixel.com/400/200') no-repeat center center;
		.project-name{
			opacity: 0;
			text-align: center;
		}
		&:hover{
			.project-name{
				opacity: 1;
			}
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
