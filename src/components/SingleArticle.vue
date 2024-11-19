<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" offset-md="2">
        <!-- 加载状态 -->
        <div v-if="loading" class="text-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>

        <!-- 错误提示 -->
        <v-alert v-if="error" type="error" class="mb-4">
          {{ error }}
        </v-alert>

        <!-- 文章内容 -->
        <template v-if="article">
          <v-card class="mb-6">
            <!-- 文章封面 -->
            <v-img
              :src="article.Cover"
              height="300"
              cover
            ></v-img>

            <!-- 文章标题和元信息 -->
            <v-card-text>
              <h1 class="text-h4 mb-4">{{ article.Title }}</h1>
              
              <div class="mb-6 text-subtitle-1 text-grey">
                <v-icon size="small" class="mr-1">mdi-calendar</v-icon>
                {{ article.Date }}
                <v-icon size="small" class="ml-3 mr-1">mdi-tag</v-icon>
                {{ article.Tags ? article.Tags.join(', ') : '' }}
              </div>

              <!-- Markdown 内容 -->
              <div class="markdown-body" v-html="renderedContent"></div>
            </v-card-text>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { articleApi } from '@/services/articleApi'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
  name: 'ArticleDetailView',
  setup() {
    const route = useRoute()
    const loading = ref(false)
    const error = ref(null)
    const article = ref(null)

    // 配置 marked
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      },
      pedantic: false,
      gfm: true,
      breaks: true,
      sanitize: true,
      smartypants: false,
      xhtml: false
    })

    // 计算属性：渲染后的内容
    const renderedContent = computed(() => {
      if (!article.value?.Content) return ''
      return marked.parse(article.value.Content,
        {
          renderer: new marked.Renderer(),
          highlight: function(code, lang) {
            return hljs.highlight(code, { language: lang }).value
          }
        }
      )
    })

    const fetchArticle = async () => {
      const id = route.params.id
      loading.value = true
      error.value = null

      try {
        const response = await articleApi.getArticleById(id)
        article.value = response.data.data
        console.log('文章数据:', article.value)
      } catch (err) {
        error.value = '获取文章失败：' + err.message
        console.error('获取文章失败:', err)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchArticle()
    })

    return {
      loading,
      error,
      article,
      renderedContent
    }
  }
}
</script>

<style>
@import 'github-markdown-css';

/* 自定义样式覆盖 */
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

/* 代码块样式优化 */
.markdown-body pre {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 16px;
  overflow: auto;
}

.markdown-body code {
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 85%;
}

/* 适配暗色主题 */
@media (prefers-color-scheme: dark) {
  .markdown-body {
    color: #c9d1d9;
    background-color: #0d1117;
  }

  .markdown-body pre {
    background-color: #161b22;
  }

  .markdown-body code {
    background-color: rgba(240,246,252,0.15);
  }
}

/* 移动端适配 */
@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
