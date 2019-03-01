import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const JobDescription = ({description, isFetching, error}) => {
  return (
    <div className="description">
      {
        isFetching ?
          <div>Loading...</div>
          : description ?
          <div className="resize">
            <h1 className="description-title">{description.title}</h1>
            <div className="description-general">
              <p className="description-general__text">{description.tel}</p>
              <p className="description-general__text">{description.location}</p>
              <p className="description-general__text">{description.time}</p>
            </div>
            <div className="description-about">
              <h3 className="description-title description-title__small">Role description</h3>
              <p className="description-text">{description.role_description}</p>
              <a href={description.more_link} className="description-link">Show more</a>
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
  );
}

JobDescription.propTypes = {
  description: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    more_link: PropTypes.string.isRequired,
    role_description: PropTypes.string.isRequired,
    benefits: PropTypes.array.isRequired,
  }),
  isFetching: PropTypes.bool,
}
export default JobDescription
