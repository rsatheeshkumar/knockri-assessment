import { createSelector } from 'reselect'

const application = (state) => state.application

export const selectApplication = createSelector(
  [application],
  (application) => application.application
)

export const selectComments = createSelector(
  [application],
  (application) => application.comments
)
