import { createSelector } from 'reselect'

const selectDetails = (state) => state.details

export const selectCandidates = createSelector(
  [selectDetails],
  (details) => details.candidates
)

export const selectQuestions = createSelector(
  [selectDetails],
  (details) => details.questions
)
