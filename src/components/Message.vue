<template>
	<article class="purchase-message">
		<p>{{ message }}</p>
	</article>
</template>

<script>
export default {
	name:"Message",
	props:{
		message: String
	}
}
</script>

<style scoped>
.purchase-message{
	background-color: #D4EDDA;
	color: #155724;
	border-left: 7px solid #155724;
	height: 3rem;
	line-height: 3rem;
	padding: 0 1rem;
	font-size: 1.2rem;
	border-radius: 5px;
}
</style>