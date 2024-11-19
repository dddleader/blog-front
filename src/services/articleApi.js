import api from './api'

export const articleApi = {
  // 获取文章列表
  getArticles(params) {
    return api.get('/articles', { params })
  },
  
  // 获取文章详情
  getArticleById(id) {
    return api.get(`/single-article/${id}`)
  }
}