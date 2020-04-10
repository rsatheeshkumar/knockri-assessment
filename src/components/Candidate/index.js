import React from 'react'
import { Link } from 'react-router-dom'

const Candidate = ({ candidate: { id, name, applicationId }, index }) => {
  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>
        <Link
          style={{ color: 'white' }}
          to={{
            pathname: `/user/${id}`,
            state: {
              applicationId: applicationId,
              name: name,
            },
          }}
        >
          <button
            className={
              applicationId
                ? 'btn btn-block btn-success'
                : 'btn btn-block btn-danger'
            }
          >
            {applicationId
              ? 'Application Available'
              : 'Application Unavailable'}
          </button>
        </Link>
      </td>
    </tr>
  )
}

export default Candidate
