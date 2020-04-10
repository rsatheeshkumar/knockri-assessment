import { createSelector } from 'reselect'

const global = (state) => state.global

export const selectError = createSelector([global], (global) => global.error)

export const selectLoading = createSelector(
  [global],
  (global) => global.loading
)
