<style lang='scss' scoped>
	@import '../styles/_main';

	.contact-item {
		@include make-col();
		@include make-col-span(12);
		padding-top: 20px;
		box-sizing: border-box;
		//@include make-col-offset(2);

		@include media-breakpoint-up(md) {
			@include make-col-span(3);
			// @include make-col-offset(3);
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
