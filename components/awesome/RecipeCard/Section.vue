<script lang="ts" setup>
defineProps({
	text: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="recipe-section">
		<h5 class="recipe-section-title">{{ text }}</h5>
		<slot />
	</div>
</template>
