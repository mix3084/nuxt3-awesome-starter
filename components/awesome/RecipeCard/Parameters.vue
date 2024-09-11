<script lang="ts" setup>
defineProps({
	parameters: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<div class="parameters-list">
		<!-- Перебор параметров -->
		<AwesomeRecipeCardParameter
			v-for="(value, key) in parameters"
			:key="key"
			:parameter="{ key, value }"
		/>
	</div>
</template>
