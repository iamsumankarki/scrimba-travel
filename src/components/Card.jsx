function Card({ item }) {
  console.log("item", item);

  return (
    <div className="card">
      <div className="card__figure">
        <img src={item.imageUrl} alt="" className="card__figure-image" />
      </div>
      <div className="card__content">
        <div className="card__location">
          <img
            src="/images/pointer.svg"
            alt=""
            className="card__location-image"
          />
          <h2 className="card__location-place">{item.location}</h2>
          <a
            href={item.googleMapsUrl}
            target="_blank"
            className="card__location-link"
          >
            View on Google Maps
          </a>
        </div>
        <h3 className="card__title">{item.title}</h3>
        <div className="card__date">
          <span>{item.startDate}</span>
          {" - "}
          <span>{item.endDate}</span>
        </div>
        <div className="card__description">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
