import axios from 'axios'

export const getPodcasts = (page = 1) => {
  return axios.get(`${process.env.API_ENDPOINT}/all_podcasts?page=${page}`)
}

export const getPodcast = (id) => {
  return axios.get(`${process.env.API_ENDPOINT}/podcasts/${id}`)
}
