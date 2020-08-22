import Layout from '@/views/Layout';

const routes = [
	{
		path: '/login',
		name: 'login',
		hidden: true,
		// 1. 定义 (路由) 组件。可以从其他文件 import 进来
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/',
		name: '首页',
		component: Layout,
		redirectUrl: '/home',
		children: [
			{
				path: 'home',
				name: 'home',
				component: () => import('@/views/Home.vue'),
			},
		],
	},
	{
		path: '/other',
		name: '其他',
		component: Layout,
		children: [
			{
				path: 'about',
				name: 'about',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
			},
			{
				path: 'image',
				name: 'image',
				component: () => import('@/views/Image.vue'),
			},
		],
	},
	{
		path: '/components',
		name: '组件',
		component: Layout,
		children: [
			{
				path: 'common',
				name: '普通组件',
				component: () => import('@/views/Components/CommonComponent.vue'),
			},
			{
				path: 'parent',
				name: '父子共享状态',
				component: () => import('@/views/Components/FatherAndSon.vue'),
			},
			{
				path: 'slot',
				name: '插槽',
				component: () => import('@/views/Components/Slot.vue'),
			},
			{
				path: 'slotScope',
				name: '作用域插槽',
				component: () => import('@/views/Components/SlotScope.vue'),
			},
			{
				path: 'oldSlot',
				name: '老插槽',
				component: () => import('@/views/Components/OldSlot.vue'),
			},
			{
				path: 'typeScript',
				name: 'TypeScript',
				component: () => import('@/views/Components/TypeScript.vue'),
			},
			{
				path: 'bothway',
				name: '双向',
				component: () => import('@/views/Components/Bothway.vue'),
			},
		],
	},
	{
		path: '/plugins',
		name: '插件',
		component: Layout,
		children: [
			{
				path: 'plugin',
				name: '插件1',
				component: () => import('@/views/Plugins/index.vue'),
			},
		],
	},
	{
		path: '/mixin',
		name: 'mixin',
		component: Layout,
		children: [
			{
				path: 'mixinDemo',
				name: 'mixinDemo',
				component: () => import('@/views/Mixin.vue'),
			},
		],
	},
	{
		path: '/dynamic',
		name: '动态路由',
		component: Layout,
		children: [
			{
				path: 'user/:id', //动态路由
				name: 'user',
				component: () => import('@/views/User'),
				children: [
					{
						// 当 /user/:id/profile 匹配成功，
						// UserProfile 会被渲染在 User 的 <router-view> 中
						path: 'profile',
						name: 'profile',
						component: () => import('@/views/User/UserProfile.vue'),
						meta: { requiresAuth: true },
					},
				],
			},
		],
	},

	{
		path: '/nest', //嵌套路由
		name: '嵌套路由',
		component: Layout,
		redirectUrl: '/nest/foo',
		children: [
			{
				// 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
				path: 'foo',
				name: 'foo',
				component: () => import('@/views/NestRouter/Foo.vue'),
				meta: { requiresAuth: true },
				children: [
					{
						path: 'child1',
						name: 'child1',
						component: () => import('@/views/NestRouter/Child.vue'),
					},
					{
						path: 'child2',
						name: 'child2',
						hidden: true,
						component: () => import('@/views/NestRouter/Child.vue'),
					},
					{
						path: 'child3',
						name: 'child3',
						component: () => import('@/views/NestRouter/Child.vue'),
					},
				],
			},
			{
				path: 'main',
				name: 'main',
				// hidden: true,
				component: () => import('@/views/NestRouter/Main.vue'),
				meta: { requiresAuth: true },
			},
			{
				path: 'bar',
				name: 'bar',
				// hidden: true,
				component: () => import('@/views/NestRouter/Bar.vue'),
				meta: { requiresAuth: true },
			},
		],
	},
	{
		path: '/vuex',
		name: 'vuex',
		component: Layout,
		children: [
			{
				path: 'state',
				name: 'state',
				component: () => import('@/views/Vuex/State.vue'),
			},
			{
				path: 'getter',
				name: 'getter',
				component: () => import('@/views/Vuex/Getter.vue'),
			},
			{
				path: 'mutation',
				name: 'mutation',
				component: () => import('@/views/Vuex/Mutation.vue'),
			},
			{
				path: 'action',
				name: 'action',
				component: () => import('@/views/Vuex/Action.vue'),
			},
			{
				path: 'module',
				name: 'module',
				component: () => import('@/views/Vuex/Module.vue'),
			},
		],
	},
	{
		path: '/demo',
		name: 'demo',
		component: Layout,
		children: [
			{
				path: 'fixed',
				name: 'fixed',
				component: () => import('@/views/Demo/fixedHead.vue'),
			},
		],
	},
	{
		path: '*', //所有路由
		name: '404',
		hidden: true,
		component: () => import(/* webpackChunkName: "about" */ '@/views/404.vue'),
	},
];

export default routes;
