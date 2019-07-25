<template>
    <div>
        <transition name="fade-transform" mode="out-in">
            <keep-alive v-if="$route.meta.keepAlive">
                <!-- 缓存 -->
                <router-view :key="key" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" :key="key">
                <!-- 不缓存 -->
            </router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            key() {
                return this.$route.path
            }
        }
    }
</script>

<style scoped>

</style>
