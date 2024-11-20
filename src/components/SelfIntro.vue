<template>
  <v-container>
    <!-- 个人信息卡片 -->
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="mx-auto pa-6" elevation="3">
          <!-- 头像部分 -->
          <div class="text-center mb-6">
            <v-avatar size="180" class="elevation-4">
              <v-img
                src="/avatar.jpg"
                alt="头像"
                cover
              ></v-img>
            </v-avatar>
            <h1 class="text-h4 mt-4">MUDUDU</h1>
            <div class="text-subtitle-1 text-medium-emphasis">全栈开发工程师</div>
          </div>

          <!-- 分割线 -->
          <v-divider class="mb-6"></v-divider>

          <!-- 自我介绍 -->
          <div class="text-body-1">
            <v-row>
              <v-col cols="12" md="6">
                <div class="mb-4">
                  <v-icon color="primary" class="mr-2">mdi-account</v-icon>
                  <span class="font-weight-medium">关于我</span>
                </div>
                <p class="text-medium-emphasis ml-8">
                  热爱编程和技术，专注于 Web 开发和系统架构设计。
                  擅长 Go、Vue.js 等技术栈，热衷于学习新技术和分享经验。
                </p>
              </v-col>

              <v-col cols="12" md="6">
                <div class="mb-4">
                  <v-icon color="primary" class="mr-2">mdi-briefcase</v-icon>
                  <span class="font-weight-medium">技能特长</span>
                </div>
                <v-chip-group class="ml-8">
                  <v-chip
                    v-for="skill in skills"
                    :key="skill"
                    color="primary"
                    variant="outlined"
                    size="small"
                  >
                    {{ skill }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>

            <!-- 联系方式 -->
            <v-row class="mt-6">
              <v-col cols="12">
                <div class="mb-4">
                  <v-icon color="primary" class="mr-2">mdi-link-variant</v-icon>
                  <span class="font-weight-medium">联系方式</span>
                </div>
                <div class="d-flex flex-wrap gap-4 ml-8">
                  <v-btn
                    v-for="link in socialLinks"
                    :key="link.icon"
                    :href="link.url"
                    target="_blank"
                    variant="text"
                    :prepend-icon="link.icon"
                  >
                    {{ link.text }}
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SelfIntro',
  data() {
    return {
      skills: [
        'Go',
        'Vue.js',
        'JavaScript',
        'Node.js',
        'MySQL',
        'Docker',
        'Git'
      ],
      socialLinks: [
        {
          icon: 'mdi-github',
          text: 'GitHub',
          url: 'https://github.com/dddleader'
        },
        {
          icon: 'mdi-email',
          text: 'Email',
          url: 'mailto:your.email@example.com'
        },
        {
          icon: 'mdi-web',
          text: 'Blog',
          url: 'https://your-blog-url.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
.gap-4 {
  gap: 1rem;
}

/* 头像悬停效果 */
.v-avatar {
  transition: transform 0.3s ease;
}

.v-avatar:hover {
  transform: scale(1.05);
}

/* 卡片悬停效果 */
.v-card {
  transition: box-shadow 0.3s ease;
}

.v-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2) !important;
}
</style>
