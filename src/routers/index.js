import Vue from 'vue'
import VueRouter from 'vue-router'
import config from './config'
Vue.use(VueRouter)
// 路由配置
const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: config
})
// 路由跳转前验证(是否登录)
router.beforeEach(({ meta, path, fullPath }, from, next) => {
    const { auth = true } = meta
    const isLogin = Boolean(localStorage.getItem('user'))
    // console.log(isLogin)
    if (auth && !isLogin && path !== '/login') {
        let ref = fullPath
        return next({ path: '/login?referer=' + ref })
    }
    next()
})
export default router
