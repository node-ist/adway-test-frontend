import React from 'react'

const ApplyForm = ({ errors, touched, field }) => (
  errors[field] && touched[field] ? <p className="form-error">{errors[field]}</p> : ''
)

export default ApplyForm
