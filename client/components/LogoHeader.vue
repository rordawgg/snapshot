<style lang='scss' scoped>
	@import '../styles/_main';	
	
	.header {
		float: left;
		padding-top: 120px;
	}
	/*Media Breakpoint*/
	.header {
		padding-left: 10px;
	}
	.sub-logo {
			max-width: 90%;
		}
	@include media-breakpoint-up(sm){
		.header {
			padding-left: 30px;
		}
		.sub-logo {
			max-width: 90%;
		}
	}
	@include media-breakpoint-up(md){
		.header {
			padding-left: 90px;
		}
		.sub-logo {
			max-width: 70%;
		}
	}
	@include media-breakpoint-up(lg){
		.header{
			padding-left: 120px;
		}
		.sub-logo {
			max-width: 70%;
		}
	}
</style>

<template>
	<div class="header">
		<div class="img-logo">
			<img src="/img/snapshot_logo.png" alt="Snapshot-Logo">
		</div>
		<div class="logo">
			<div class="main-logo">
				<h1>Creative</h1>
				<h1>Technology</h1>
			</div>
			<div class="sub-logo">
				<p>
					Lorem ipsum dolor sit amet, atqui audiam graecis has cu. Accusamus comprehensam at eos. Mei in porro instructior, sed no repudiare moderatius.
				</p>
			</div>

		</div>
	</div>
</template>