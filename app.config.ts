import type { RouteLocationRaw } from 'vue-router'
import { NuxtApp } from '#app'
import {
	AwesomeLayoutPageNavbarMenu,
	AwesomeLayoutPageNavbarMenuDropdownItem,
} from './types'

export interface NuxtAwesomeAppConfig {
	/** title name */
	name?: string
	/** description */
	description?: string

	/** project config */
	project?: {
		/** links */
		links?: {
			/** project github link */
			github?: string
		}
	}

	/** layout config */
	layout?: {
		/** page layout */
		page?: {
			/** navbar */
			navbar?: {
				/** menus in navbar */
				menus?: AwesomeLayoutPageNavbarMenu[]
			}
		}
		/** footer */
		footer?: {
			/** footer year */
			year?: number
		}
		/** welcome component page */
		welcome?: {
			title?: string
			disableInfoReplaceIndexInWelcomePage?: boolean
			primaryActionButton?: {
				title?: string
				to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
			}
			secondaryActionButton?: {
				title?: string
				to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
			}
		}
	}

	/** author config */
	author?: {
		/** author name */
		name?: string
		/** author links */
		links?: {
			/** author github link */
			github?: string
		}
	}

	/** author config */
	disableInfoReplaceIndexInWelcomePage?: boolean
}

declare module '@nuxt/schema' {
	interface AppConfigInput {
		awesome?: NuxtAwesomeAppConfig
	}
}

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
					menus: [],
				},
			},
			footer: {
				year: new Date().getFullYear(),
			},
			welcome: {
				title: 'Nuxt&nbsp;3 Awesome Starter',
				disableInfoReplaceIndexInWelcomePage: true,
				primaryActionButton: {
					title: 'Nuxt 3',
					to: 'https://nuxt.com/',
				},
				secondaryActionButton: {
					title: 'Github',
					to: 'https://github.com/mix3084/nuxt3-awesome-starter',
				},
			},
		},
		author: {
			name: 'mix3084',
			links: {
				github: 'https://github.com/mix3084',
			},
		},
		disableInfoReplaceIndexInWelcomePage: false,
	} as NuxtAwesomeAppConfig,
	nuxtIcon: {
		aliases: {},
		class: '',
		size: '1em',
	},
})
