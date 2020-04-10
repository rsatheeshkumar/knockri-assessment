import React from 'react'

const Loader = ({ loading }) => {
  return (
    loading && (
      <div className="container">
        <div className="row justify-content-center m-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    )
  )
}

export default Loader
