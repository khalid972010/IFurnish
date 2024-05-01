import React from "react";
import "../styles/category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faChair,
  faCouch,
  faQuestion,
  faRug,
} from "@fortawesome/free-solid-svg-icons";

const Category = (props) => {
  return (
    <div>
      <div className="checkbox-wrapper-16 " onClick={props.onClick}>
        <label className="checkbox-wrapper">
          <input className="checkbox-input" type="checkbox" readOnly />
          <span className="checkbox-tile">
            <span className="checkbox-icon">
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
            <span className="checkbox-label">{props.type}</span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Category;
