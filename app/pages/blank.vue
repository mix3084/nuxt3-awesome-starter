<script lang="ts" setup>
import recipesData from '~/data/recipes.json'

definePageMeta({ layout: 'page' })
useHead({ title: 'Рецепты' })

const recipes = ref(recipesData.recipes)
</script>

<template>
	<LayoutPageWrapper>
		<LayoutPageHeader>
			<LayoutPageTitle text="Рецепты" class="capitalize" />
		</LayoutPageHeader>
		<LayoutPageSection>
			<LayoutPageSectionTitle text="Еда" />
			<AwesomeRecipeCard
				v-for="recipe in recipes"
				:key="recipe.title"
				:recipe="recipe"
			/>
		</LayoutPageSection>
	</LayoutPageWrapper>
</template>
