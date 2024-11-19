<template>
    
    <!-- 主要内容区域 -->
    <v-main>
      <v-container>
        <!-- 个人简介 -->
        <v-row class="mb-6">
          <v-col cols="12">
            <v-card class="text-center pa-6">
              <v-avatar size="120" class="mb-4">
                <v-img src="/avatar.jpg" alt="头像"></v-img>
              </v-avatar>
              <h1 class="text-h4 mb-2">MUDUDU</h1>
              <p class="text-subtitle-1 mb-4">立志成为全栈</p>
              <p class="text-body-1">I love coding</p>
              <v-row justify="center" class="mt-4">
                <v-btn icon class="mx-2" href="https://github.com/dddleader" target="_blank">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
                <v-btn icon class="mx-2">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon class="mx-2">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <!-- 最新文章 -->
        <h2 class="text-h5 mb-4">最新文章</h2>
        <v-row>
          <v-col v-for="article in articles" :key="article.id" cols="12" md="6">
            <v-card>
              <v-img :src="article.cover" height="200" cover></v-img>
              <v-card-title>{{ article.title }}</v-card-title>
              <v-card-subtitle>{{ article.date }} · {{ article.category }}</v-card-subtitle>
              <v-card-text>{{ article.summary }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="text">
                  阅读更多
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- 项目展示 -->
        <h2 class="text-h5 my-6">个人项目</h2>
        <v-row>
          <v-col v-for="project in projects" :key="project.id" cols="12" md="4">
            <v-card>
              <v-img :src="project.image" height="150" cover></v-img>
              <v-card-title>{{ project.name }}</v-card-title>
              <v-card-text>
                <p>{{ project.description }}</p>
                <v-chip-group class="mt-2">
                  <v-chip v-for="tech in project.technologies" :key="tech" size="small">
                    {{ tech }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="text" :href="project.github" target="_blank">
                  查看源码
                  <v-icon end>mdi-github</v-icon>
                </v-btn>
                <v-btn color="secondary" variant="text" :href="project.demo" target="_blank">
                  演示
                  <v-icon end>mdi-open-in-new</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: '深入理解Vue3组合式API',
          date: '2024-03-15',
          category: '前端开发',
          summary: '本文详细介绍了Vue3组合式API的使用方法和最佳实践...',
          cover: 'https://picsum.photos/id/1/500/300',
        },
        {
          id: 2,
          title: 'TypeScript高级特性详解',
          date: '2024-03-10',
          category: '编程语言',
          summary: '探索TypeScript中的高级类型和实用技巧...',
          cover: 'https://picsum.photos/id/2/500/300',
        },
      ],
      projects: [
        {
          id: 1,
          name: '个人博客系统',
          description: '基于Vue3和Node.js的现代化博客系统',
          image: 'https://picsum.photos/id/3/500/300',
          technologies: ['Vue3', 'Node.js', 'MongoDB'],
          github: 'https://github.com',
          demo: 'https://demo.com',
        },
        {
          id: 2,
          name: '在线笔记应用',
          description: '支持Markdown的实时协作笔记应用',
          image: 'https://picsum.photos/id/4/500/300',
          technologies: ['React', 'Firebase', 'TypeScript'],
          github: 'https://github.com',
          demo: 'https://demo.com',
        },
        {
          id: 3,
          name: 'AI图像处理工具',
          description: '基于机器学习的图像处理Web应用',
          image: 'https://picsum.photos/id/5/500/300',
          technologies: ['Python', 'TensorFlow', 'Flask'],
          github: 'https://github.com',
          demo: 'https://demo.com',
        },
      ],
    }
  },
}
</script>