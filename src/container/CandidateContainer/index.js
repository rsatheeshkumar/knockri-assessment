import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Candidate from '../../components/Candidate'
import { getCandidates, getQuestions } from './actions'
import { selectCandidates } from './selectors'

const CandidateContainer = ({ candidates, getCandidates, getQuestions }) => {
  useEffect(() => {
    getCandidates()
    getQuestions()
  }, [])

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1 className="text-center m-3">Candidate List</h1>
        </div>
      </div>
      <div className="table-responsive-sm">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th className="text-center">Application Status</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <Candidate
                key={candidate.id}
                candidate={candidate}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapState = createStructuredSelector({
  candidates: selectCandidates,
})

const mapDispatch = {
  getCandidates,
  getQuestions,
}

export default connect(mapState, mapDispatch)(CandidateContainer)
