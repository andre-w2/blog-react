import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, content }) => (
  <>
    <div className="card mt-3">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <p className="card-text">{content}</p>
      </div>
    </div>
  </>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
