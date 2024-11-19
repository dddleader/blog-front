import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArticleView from '@/views/ArticleView.vue'
import SingleArticle from '@/components/SingleArticle.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: HomeView,
      alias: ['/home']
    },
    { 
      path: '/articles', 
      name: 'articles',
      component: ArticleView 
    },
    {
      path: '/single-article/:id',
      name: 'single-article',
      component: SingleArticle
    }
  ],
})

export default router
