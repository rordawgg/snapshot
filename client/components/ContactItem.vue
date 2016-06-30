<style lang='scss' scoped>
	@import '../styles/_main';

	.contact-item {
		@include make-col();
		@include make-col-span(12);
		padding-top: 14px;
		box-sizing: border-box;
		line-height: 1.5;

		@include media-breakpoint-up(md) {
			@include make-col-span(3);
		};

		h1 {
			font-size: .8125rem;
		}
	}
</style>

<template>
	<div class='contact-item'>
		<h1>{{ item.title }}</h1>
		<ul>
			<li v-for='field in item.fields'>
				{{ field }}
			</li>
		</ul>
	</div>
</template>


<script>
	module.exports = {
		name: 'ContactItem',

		props: ['item']
	}
</script>
