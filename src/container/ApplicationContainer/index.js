import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import VideoCard from '../../components/VideoCard'
import { getApplications, getComments, removeApplications } from './actions'
import { selectApplication } from './selectors'
import { selectLoading } from '../../redux/global/selector'

const ApplicationContainer = ({
  getApplications,
  getComments,
  removeApplications,
  application,
  location,
  loading,
}) => {
  const { applicationId, name } = location.state

  useEffect(() => {
    if (applicationId) {
      getApplications(applicationId)
      getComments()
    } else {
      removeApplications()
    }
  }, [])

  return (
    <div className="container">
      <h1 className="text-center m-3">{name}</h1>
      {application.videos ? (
        <div className="card-deck m-1">
          {application.videos.map((video) => (
            <VideoCard
              key={video.questionId}
              video={video}
              applicationId={applicationId}
            />
          ))}
        </div>
      ) : (
        !loading && (
          <h1 className="text-danger text-center m-3">No Data found</h1>
        )
      )}
    </div>
  )
}

const mapState = createStructuredSelector({
  application: selectApplication,
  loading: selectLoading,
})

const mapDispatch = {
  getApplications,
  getComments,
  removeApplications,
}

export default connect(mapState, mapDispatch)(ApplicationContainer)
