export const setPodcasts = (state, podcasts) => {
  state.podcasts = podcasts
}

export const setPage = (state, { current, max }) => {
  state.page.current = current
  state.page.max = max || state.page.max
}
