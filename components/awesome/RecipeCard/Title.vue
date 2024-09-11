<script lang="ts" setup>
defineProps({
	text: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="recipe-title">
		<h4>{{ text }}</h4>
	</div>
</template>
