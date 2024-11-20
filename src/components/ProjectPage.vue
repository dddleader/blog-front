<template>
  <v-container>
    <h1 class="text-h3 mb-6 text-center">我的项目</h1>
    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="12" md="4">
        <v-card class="project-card">
          <v-img :src="project.image" height="200" cover></v-img>
          <v-card-title>{{ project.name }}</v-card-title>
          <v-card-text>
            <p class="text-body-1 mb-4">{{ project.description }}</p>
            <v-chip-group>
              <v-chip
                v-for="tech in project.technologies"
                :key="tech"
                color="primary"
                variant="outlined"
                size="small"
              >
                {{ tech }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              variant="text"
              :href="project.github"
              target="_blank"
              class="mr-2"
            >
              <v-icon left>mdi-github</v-icon>
              源码
            </v-btn>
            <v-btn
              color="secondary"
              variant="text"
              :href="project.demo"
              target="_blank"
              v-if="project.demo"
            >
              <v-icon left>mdi-open-in-new</v-icon>
              演示
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: '个人博客系统',
    description: '使用 Vue 3 和 Go 开发的现代化个人博客系统，支持文章管理、评论系统和后台管理功能。采用前后端分离架构，实现了良好的用户体验和管理效率。',
    image: 'https://picsum.photos/id/3/500/300',
    technologies: ['Vue 3', 'Vuetify', 'Go', 'MySQL', 'Redis'],
    github: 'https://github.com/yourusername/blog',
    demo: 'https://your-blog-demo.com'
  },
  {
    id: 2,
    name: 'GO-Chat轻量级即时通讯系统',
    description: '基于Vue 3 和 Go 开发的轻量级即时通讯系统，使用docker进行部署',
    image: 'https://picsum.photos/id/4/500/300',
    technologies: [ 'Go', 'MySQL', 'Redis','docker','etcd'],
    github: 'https://github.com/yourusername/chatbot',
    demo: 'https://your-chatbot-demo.com'
  },

])
</script>

<style scoped>
.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1) !important;
}

.v-card-text {
  flex-grow: 1;
}

.v-chip {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
