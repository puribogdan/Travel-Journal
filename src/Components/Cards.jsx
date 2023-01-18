import React from 'react';

export default function Cards(props) {
  return (
    <>
      <div className="card">
        <img src={props.imageUrl} alt="Fiji" className="card__img" />
        <div className="card__text">
          <div className="card__location-container">
            {' '}
            <img src="/location_logo.png" alt="gps logo" />
            <h2 className="card__location">{props.location}</h2>
            <a href={props.googleMapsUrl} className="card__link">
              View on Google Maps
            </a>
          </div>

          <h1 className="card__title">{props.title}</h1>
          <h3 className="card__date">
            {props.startDate} - {props.endDate}
          </h3>
          <p className="card__description">{props.description}</p>
        </div>
      </div>
    </>
  );
}
