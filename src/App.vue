<template>
  <v-app>
    <!-- 导航栏 -->
    <app-nav-drawer v-model="drawer" />
    
    <!-- 顶部应用栏 -->
    <app-header @toggle-drawer="drawer = !drawer" />

    <!-- 主要内容区域 -->
    <v-main>
      <RouterView />
    </v-main>

    <!-- 页脚 -->
    <app-footer />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import AppNavDrawer from '@/components/AppNavDrawer.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const drawer = ref(false)


</script>

<style scoped>
.v-navigation-drawer .v-list-item {
  margin-top: 10px;
}
.v-main {
  background-color: #f5f5f5;
}

.v-card {
  transition: transform 0.3s;
}

.v-card:hover {
  transform: translateY(-5px);
}
</style>
