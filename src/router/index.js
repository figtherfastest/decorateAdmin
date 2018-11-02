import VueRouter from 'vue-router'
import loginRouter from '../views/login/router/index'
import indexRouter from '../views/index/router/index'
import exeRouter from '../views/exe/router/index'

export default function () {
	let router = new VueRouter ({
		routes: []
	})
	loginRouter (router)
	indexRouter (router)
	exeRouter(router)
	return router
}
