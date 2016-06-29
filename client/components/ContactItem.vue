<template>
	<div>
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