import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  dataTestId,
  ...props
}) => (
    <div
      data-testid= {dataTestId}
      className={`EventCard${small ? " EventCard--small" : ""}`}
      {...props}
    >
      <div className="EventCard__imageContainer">
        <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
        <div className="EventCard__label">{label}</div>
      </div>
      <div className="EventCard__descriptionContainer">
        <div className="EventCard__title">{title}</div>
        <div className="EventCard__month" data-testid="month-element">{getMonth(date)}</div>
      </div>
    </div>
  );

EventCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string,
  small: PropTypes.bool,
  label: PropTypes.string.isRequired,
  dataTestId: PropTypes.string
};

EventCard.defaultProps = {
  imageSrc: "",
  imageAlt: "image",
  title:"",
  small: false,
  label:"",
  dataTestId: "card-testid"
}

export default EventCard;
