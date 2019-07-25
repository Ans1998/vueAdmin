import App from '@/App'
import Layout from '@/layout/index'
/**
 * auth true登录才能访问，false不需要登录
 * keepAlive true缓存，false不缓存
 */
export default [
    {
        path: '/login', // 登录
        meta: { auth: false, keepAlive: false },
        component: resolve => require(['@/views/login/'], resolve)
    },
    {
        path: '/register', // 注册
        meta: { auth: false, keepAlive: false },
        component: resolve => require(['@/views/register/'], resolve)
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/', // 首页
                meta: { auth: true, keepAlive: true },
                component: resolve => require(['@/views/home/'], resolve)
            },
            {
                path: '/user/index', // 用户列表
                meta: { auth: true, keepAlive: true },
                component: resolve => require(['@/views/user/index'], resolve)
            },
            {
                path: '/user/add', // 新增用户
                meta: { auth: true, keepAlive: true },
                component: resolve => require(['@/views/user/add'], resolve)
            },
            {
                path: '/order/index', // 订单列表
                meta: { auth: true, keepAlive: true },
                component: resolve => require(['@/views/order/index'], resolve)
            },
            {
                path: '/shop/specimen', // 商品样品
                meta: { auth: true, keepAlive: true },
                component: resolve => require(['@/views/shop/specimen'], resolve)
            },
            {
                path: '/shop/deploy', // 商品部署
                meta: { auth: true, keepAlive: true },
                component: resolve => require(['@/views/shop/deploy'], resolve)
            },
            {
                path: '/shop/details', // 商品详情
                meta: { auth: true, keepAlive: true },
                component: resolve => require(['@/views/shop/details'], resolve)
            },
            {
                path: '/test', // 测试页面
                meta: { auth: true, keepAlive: true },
                component: resolve => require(['@/views/test/'], resolve)
            },
            {
                path: '*', // 其他页面
                redirect: '/'
            }
        ]
    }
]
