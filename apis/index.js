import request from '~/request'

export const frontEnd = {
  queryArticles (params) {
    return request.get('/front-end/articles', {params})
  },
  getArticle (id) {
    return request.get(`/front-end/article/${id}`)
  }
}
export const travel = {
  queryArticles (params) {
    return request.get('/travel/articles', {params})
  },
  getArticle (id) {
    return request.get(`/travel/article/${id}`)
  }
}
export const essay = {
  queryArticles (params) {
    return request.get('/essay/articles', {params})
  },
  getArticle (id) {
    return request.get(`/essay/article/${id}`)
  }
}

export default {
  frontEnd,
  travel,
  essay
}
