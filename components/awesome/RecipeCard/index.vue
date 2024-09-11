<script lang="ts" setup>
defineProps({
	recipe: {
		type: Object,
		required: true,
	},
})
const { t } = useI18n()

const rarityColor = {
	gold: '251, 191, 36',
	purple: '200, 20, 246',
	blue: '2, 170, 164',
	green: '34, 197, 94',
}
</script>
<template>
	<div class="recipe" :style="{ '--rarity-color': rarityColor[recipe.rarity] }">
		<AwesomeRecipeCardImage :url="recipe.image" />
		<AwesomeRecipeCardContent>
			<AwesomeRecipeCardTitle :text="t(recipe.title)" />
			<div class="row">
				<div class="col">
					<AwesomeRecipeCardSection :text="t('parametrs')">
						<AwesomeRecipeCardParameters :parameters="recipe.parameters" />
					</AwesomeRecipeCardSection>
				</div>
				<div class="col">
					<AwesomeRecipeCardSection :text="t('effets')">
						<p>asdasd</p>
					</AwesomeRecipeCardSection>
				</div>
			</div>
		</AwesomeRecipeCardContent>
	</div>
</template>
