export default function (router) {
	router.addRoutes ([
		{
			path: 'layout',
			component: () => import('@/components/layout/layout'),
			children: [
				{
					path: '/index',
					component: () => import('@/views/index/index')
				}
			]
		}
	])
}
