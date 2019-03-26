import request from '~/request'

export const frontEnd = {
  queryArticles () {
    return request.get('/front-end/articles')
  },
  getArticle (id) {
    return request.get(`/front-end/article/${id}`)
  }
}
export const travel = {
  queryArticles () {
    return request.get('/travel/articles')
  },
  getArticle (id) {
    return request.get(`/travel/article/${id}`)
  }
}
export const essay = {
  queryArticles () {
    return request.get('/essay/articles')
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
