import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const JobDescription = ({ description, isFetching, error }) => (
  <div className="description">
    {
      isFetching ?
        <div>Loading...</div>
        : description ?
        <div className="resize">
          <h1 className="description-title">{description.title}</h1>
          <div className="description-general">
            <p className="description-general__text">{description.tel}</p>
            <p className="description-general__text">{description.address}</p>
            <p className="description-general__text">{description.schedule}</p>
          </div>
          <div className="description-about">
            <h3 className="description-title description-title__small">Role description</h3>
            <p className="description-text">{description.description}</p>
            <a href="#" className="description-link">Show more</a>
          </div>
          <div className="description-benefits">
            <h3 className="description-title description-title__small">Benefits</h3>
            <ul className="description-list">
              {
                description.benefits.map((el, index) => <li className="description-list__item" key={index}>{el}</li>)
              }
            </ul>
          </div>
          <Link to="/form" className="description-apply">Apply</Link>
        </div>
        : <h1 className="description-title">{error}</h1>
    }
  </div>
)

JobDescription.propTypes = {
  description: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    schedule: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    benefits: PropTypes.array.isRequired
  }),
  isFetching: PropTypes.bool.isRequired
}
export default JobDescription
