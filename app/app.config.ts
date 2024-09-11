import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
	awesome: {
		name: 'Once Human: Поваренная Книга Выживания',
		description:
			'Добро пожаловать в мир рецептов выживания для игры Once Human. Наш сайт предлагает интерактивный список рецептов, с подробной информацией о каждом блюде: ингредиенты, параметры (еда, вода, рассудок) и эффекты. Удобный интерфейс с картой поможет вам легко найти нужные ресурсы, а система избранных рецептов сделает приготовление пищи в игре ещё более захватывающим!',
		project: {
			links: {
				github: 'https://github.com/mix3084/nuxt3-awesome-starter',
			},
		},
		layout: {
			page: {
				navbar: {
					menus: [
						{ type: 'link', title: 'Рецепты', to: { name: 'blank' } },
						// {
						// 	type: 'dropdown',
						// 	title: 'Documentations',
						// 	children: [
						// 		{
						// 			type: 'link',
						// 			title: 'Components',
						// 			to: { name: 'docs-components' },
						// 		},
						// 	],
						// },
						// { type: 'button', title: 'Setting', to: { name: 'setting' } },
						// dynamic title
						// {
						//   type: 'button',
						//   title: (nuxt) =>
						//     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
						//   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
						// },
					],
				},
			},
			footer: {
				year: new Date().getFullYear(),
			},
			welcome: {
				title: 'Nuxt&nbsp;3 Awesome Starter',
				disableInfoReplaceIndexInWelcomePage: true,
			},
		},
		author: {
			name: 'mix3084',
			// links: {
			// 	github: 'https://github.com/viandwi24',
			// 	medium: 'https://viandwi24.medium.com',
			// 	website: 'https://viandwi24.site',
			// },
		},
	},
})
