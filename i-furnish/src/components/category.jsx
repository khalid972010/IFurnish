import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faChair,
  faCouch,
  faQuestion,
  faRug,
} from "@fortawesome/free-solid-svg-icons";

const Category = (props) => {
  const [isSelected, setSelected] = useState(false);

  const handleButtonClick = () => {
    setSelected(!isSelected);
  };

  return (
    <div className="checkbox-wrapper-16" onClick={props.onClick}>
      <button
        className={isSelected ? "selected" : ""}
        onClick={handleButtonClick}>
        <span className="checkbox-tile">
          <span className="checkbox-icon" style={{ paddingRight: 10 }}>
            <FontAwesomeIcon
              icon={
                props.type === "chair"
                  ? faChair
                  : props.type === "bed"
                  ? faBed
                  : props.type === "couch"
                  ? faCouch
                  : props.type === "rug"
                  ? faRug
                  : faQuestion
              }
            />
          </span>
          <span className="checkbox-label" style={{ paddingRight: 10 }}>
            {props.type[0].toUpperCase() + props.type.slice(1)}
          </span>
        </span>
      </button>
    </div>
  );
};

export default Category;
