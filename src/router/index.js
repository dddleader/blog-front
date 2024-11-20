import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArticleView from '@/views/ArticleView.vue'
import SingleArticle from '@/components/SingleArticle.vue'
import SelfIntro from '@/components/SelfIntro.vue'
import ProjectView from '@/components/ProjectPage.vue'
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
    },
    {
      path: '/about',
      name: 'about',
      component: SelfIntro
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView
    }
  ],
})

export default router
