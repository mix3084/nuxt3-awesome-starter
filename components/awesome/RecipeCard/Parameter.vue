<script lang="ts" setup>
defineProps({
	parameter: {
		type: Object,
		required: true,
	},
})

const { t } = useI18n()

const parameterSVGs = {
	food: '/images/food.svg',
	water: '/images/water.svg',
	sanity: '/images/sanity.svg',
}
</script>

<template>
	<div class="parameter-display">
		<img
			:src="parameterSVGs[parameter.key]"
			alt="Parameter Icon"
			class="parameter-svg"
		/>
		<span class="parameter-label">{{ t(parameter.key) }}</span>
		<span class="parameter-value">{{ parameter.value }}</span>
	</div>
</template>
