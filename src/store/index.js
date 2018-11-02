// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import state from './state'
// import mutations from './mutations'
//
//
// Vue.use(Vuex)
//
// const debug = process.env.NODE_ENV !== 'production'
//
// export default new Vuex.Store({
//   actions,
//   getters,
//   state,
//   mutations
// })

import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from '../views/login/store/index'
import exeModule from '../views/exe/store/index'

Vue.use (Vuex)
export default new Vuex.Store ({
	modules: {
		loginModule,
		exeModule
	}
})
