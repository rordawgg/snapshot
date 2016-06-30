<style lang='scss' scoped>
	@import '../styles/_main';

	.contact-item {
		//@include make-col();
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
