<template>
	<!-- This component receives the message dynamically and can be easily reusable -->
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
/* Media query to mobile devices */
@media (max-width: 630px) {
	.purchase-message{
		font-size: 0.8rem;
	}
}
</style>