// 这里写全局的ES6语法(ES2015)如果在index.html写个别浏览器不兼容
const publicFunction = {
    // 睡眠
    sleep(d) {
        return new Promise((resolve) => setTimeout(resolve, d))
    }
}
export default {
    install(vue) {
        if (!vue.$publicFunction) {
            vue.$publicFunction = publicFunction
        }
        vue.mixin({
            created: function() {
                this.$publicFunction = vue.$publicFunction
            }
        })
    }
}
