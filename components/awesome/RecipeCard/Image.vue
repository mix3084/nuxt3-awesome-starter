<script lang="ts" setup>
defineProps({
	url: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="recipe-image">
		<img :src="url" alt="Recipe Image" />
	</div>
</template>
