import React from 'react'

const Alert = ({ message }) => {
  return (
    message && (
      <div className="container">
        <div className="row justify-content-center m-5">
          <div class="alert alert-danger" role="alert">
            Error While fetching data
          </div>
        </div>
      </div>
    )
  )
}

export default Alert
