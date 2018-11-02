
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// import {get, post, del, put} from './utils/http'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

import VueRouter from 'vue-router'
import initRouter from './router/index'

Vue.use (ElementUI)
Vue.use(VueRouter)
require('./assets/iconfont/iconfont.css')

const router = initRouter()
Vue.config.productionTip = false

// Vue.prototype.$get = get
// Vue.prototype.$post = post
// Vue.prototype.$del = del
// Vue.prototype.$put = put

/* eslint-disable no-new */
new Vue ({
	el: '#app',
	router,
	store,
	components: {App},
	template: '<App/>'
})
