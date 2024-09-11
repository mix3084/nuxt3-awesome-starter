<script lang="ts" setup>
import { ref } from 'vue'
import Card from '~/components/awesome/Card/index.vue'

// Пример списка рецептов
const recipes = ref([
	{ name: 'Spicy Pork Stew' },
	{ name: 'Fish Soup' },
	{ name: 'Rabbit Stew' },
])

definePageMeta({ layout: 'page' })
useHead({ title: 'Recipes' })
</script>

<template>
	<LayoutPageWrapper>
		<LayoutPageHeader>
			<LayoutPageTitle text="Recipe List" class="capitalize" />
		</LayoutPageHeader>

		<LayoutPageSection>
			<LayoutPageSectionTitle text="Available Recipes" />
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Вывод списка рецептов через компонент Card -->
				<Card v-for="recipe in recipes" :key="recipe.name">
					<template #default>
						<h3 class="text-xl font-bold">{{ recipe.name }}</h3>
					</template>
				</Card>
			</div>
		</LayoutPageSection>
	</LayoutPageWrapper>
</template>
