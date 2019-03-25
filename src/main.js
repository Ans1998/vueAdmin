import Vue from 'vue'

// 路由
import router from './routers/index'
import App from "./App.vue"

// Element-Ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 插件
import { publicFunction } from './plugins/index'

// 注册为全局组件
import registerAsGlobal from './components/index'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(publicFunction)
Vue.use(registerAsGlobal)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
