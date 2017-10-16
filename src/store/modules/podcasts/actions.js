import * as api from '@/api/podcasts'

export const getPodcasts = ({ commit }, page = 1) => {
  api.getPodcasts(page).then((response) => {
    commit('setPodcasts', response.data.data)
    commit('setPage', {
      current: page,
      max: response.data.meta.pagination.total_pages
    })
  })
}
