export default function (router) {
	router.addRoutes([
		{
			path: '/',
			component: () => import('@/views/login/login')
		}
	])
}
