<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 缓存 -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <!-- 不缓存 -->
    </router-view>
  </div>
</template>

<script>

</script>

<style>
</style>
