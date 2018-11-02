export default function (router) {
	router.addRoutes ([
		{
			path: '/exe',
			component: () => import('@/views/exe/exe')
		}
	])
}
