<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <!-- 加载状态 -->
        <div v-if="loading" class="text-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>

        <!-- 错误提示 -->
        <v-alert v-else-if="error" type="error" class="mb-4">
          {{ error }}
        </v-alert>

        <!-- 文章列表 -->
        <template v-else>
      <v-card
        v-for="article in articleList.articles"
        :key="article.ID"
        class="mb-6"
        elevation="2"
      >
        <v-img
          :src="getFullImageUrl(article.Cover)"
          height="200"
          cover
        ></v-img>

        <v-card-text>
          <h2 class="text-h5 mb-2">{{ article.Title }}</h2>
          
          <div class="mb-3 text-caption text-grey">
            <v-icon size="small" class="mr-1">mdi-calendar</v-icon>
            {{ article.Date }}
            <v-icon size="small" class="ml-3 mr-1">mdi-tag</v-icon>
            {{ article.Tags ? article.Tags.join(', ') : '' }}
          </div>

          <p class="text-body-1">{{ article.Summary }}</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="text"
            @click="readMore(article.ID)"
          >
            阅读更多
          </v-btn>
        </v-card-actions>
      </v-card>

          <!-- 分页 -->
          <v-pagination
            v-if="articleList.total > 0"
            v-model="currentPage"
            :length="Math.ceil(articleList.total / articleList.pageSize)"
            @update:model-value="fetchArticles"
          ></v-pagination>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { articleApi } from '@/services/articleApi'
import { useImageUrl } from '@/composables/useImageUrl'

const router = useRouter()
const { getFullImageUrl } = useImageUrl()
const loading = ref(false)
const error = ref(null)
const currentPage = ref(1)
const articleList = ref({
  articles: [],
  total: 0,
  page: 1,
  pageSize: 10
})

// 获取文章列表
const fetchArticles = async (page = 1) => {
  loading.value = true
  error.value = null
  
  try {
    const response = await articleApi.getArticles({
      page: page,
      pageSize: 10
    })
    console.log('API Response:', response.data)
    articleList.value = response.data.data
    console.log(articleList.value.total)
  } catch (err) {
    error.value = '获取文章列表失败：' + err.message
    console.error('获取文章失败:', err)
  } finally {
    loading.value = false
  }
}

// 查看文章详情
const readMore = (articleId) => {
  router.push(`/single-article/${articleId}`)
}

// 监听分页变化
// 为翻页添加监听
watch(currentPage, (newPage) => {
  fetchArticles(newPage)
})

// 组件挂载时获取数据
onMounted(() => {
  fetchArticles()
})
</script>

<style scoped>
.v-card {
  transition: transform 0.2s;
}

.v-card:hover {
  transform: translateY(-4px);
}
</style>
