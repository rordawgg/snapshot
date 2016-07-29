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
			font-family: 'Avenir-Black';
		}

		ul li {
			a {
				color: #fff;

				&:hover {
					color: darken(#fff, 20%);
				}
			}
		}
	}
</style>

<template>
	<div class='contact-item'>
		<h1>{{ item.title }}</h1>
		<ul>
			<li v-for='field in item.fields'>
				<template v-if='typeof field == "object"'>
					<template v-if='field.type == "link"'>
						<a
							:href='field.to'
							:target='field.newTab ? "_blank" : ""'
							>{{ field.display }}</a>
					</template>

					<template v-if='(field.type == undefined) || (field.type == "regular")'>
						{{ field }}
					</template>
				</template>

				<template v-else>
					{{ field }}
				</template>
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
