<style lang='scss' scoped>
	@import '../styles/_main';

	.logo {
		padding-top: 120px;
		padding-left: 10px;

		.sub-logo {
			h1 {
				font-size: 2.5rem;
				margin: 2px 0 24px 0;
			}
		}

		.description {
			max-width: 90%;

			p {
				padding-left: 22px;
				padding-right: 22px;
			}
		}

		@include media-breakpoint-between(sm, xl) {
			.sub-logo {
				h1 {
					font-size: 3.75rem;
				}
			}

			.description {
				p {
					font-size: .9375rem;
					padding-left: 0px;
					padding-right: 0px;
				}
			}
		};

		@include media-breakpoint-up(sm) {
			padding-left: 30px;

			.description {
				max-width: 90%;
			}
		}

		@include media-breakpoint-up(md) {
			padding-left: 86px;

			.description {
				max-width: 70%;
			}
		}

		@include media-breakpoint-up(lg) {
			padding-left: 117px;

			.description {
				max-width: 70%;
			}
		}

		@include media-breakpoint-up(xl) {
			padding-left: 202px;

			.description {
				max-width: 70%;
			}
		}
	}
</style>

<template>
	<header>
		<div class="logo">
			<div class="main-logo">
				<img src="/img/snapshot_logo.png" alt="Snapshot-Logo">
			</div>

			<div class="sub-logo">
				<h1>Creative<br>Technologist</h1>
			</div>

			<template v-for='section in sections'>
				<div class="description" v-for='paragraph in section.content'>
					<p>{{ paragraph }}</p>
				</div>
			</template>
		</div>
	</header>
</template>

<script>
	var ContentSectionList = require('./ContentSectionList.vue');

	module.exports = {
		name: 'LogoHeader',

		components: {
			ContentSectionList
		},

		props: [
			'header',
			'sections'
		]
	}
</script>
