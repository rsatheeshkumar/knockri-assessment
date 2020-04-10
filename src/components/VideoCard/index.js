import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { postComment } from '../../container/ApplicationContainer/actions'
import { selectQuestions } from '../../container/CandidateContainer/selectors'
import { selectComments } from '../../container/ApplicationContainer/selectors'

const VideoCard = ({
  video,
  applicationId,
  questions,
  comments,
  postComment,
  match,
}) => {
  const [comment, setComment] = useState('')
  const userId = Number(match.params.id)
  const { questionId, src } = video

  const currentComment = comments.filter(
    (c) => c.questionId === questionId && c.userId === userId
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    postComment({
      applicationId,
      questionId,
      comment,
      applicationId,
      userId,
    })
  }

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  return (
    <div className="card video-card">
      <div className="card-body p-0">
        <video className="video" controls>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="card-footer bg-light">
        <div>
          <span className="text-danger">Question : </span>
          <span>{questions[questionId]}</span>
        </div>
        <div className="comments">
          {currentComment.length > 0 ? (
            <Fragment>
              <p className="m-0 text-primary">comments:</p>
              <p>{currentComment[0].comment}</p>
            </Fragment>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>comment</label>
                <textarea
                  type="text"
                  className="form-control"
                  value={comment}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-success btn-block" type="submit">
                submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

const mapState = createStructuredSelector({
  questions: selectQuestions,
  comments: selectComments,
})

const mapDispatch = {
  postComment,
}

export default connect(mapState, mapDispatch)(withRouter(VideoCard))
