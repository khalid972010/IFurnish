import React from "react";
import "../styles/category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faChain,
  faChair,
  faCouch,
  faQuestion,
  faRug,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

const Category = (props) => {
  return (
    <div>
      <div className="checkbox-wrapper-16 ">
        <label className="checkbox-wrapper">
          <input className="checkbox-input" type="checkbox" />
          <span className="checkbox-tile">
            <span className="checkbox-icon">
              <FontAwesomeIcon
                icon={
                  props.type === "Chair"
                    ? faChair
                    : props.type === "Bed"
                    ? faBed
                    : props.type === "Couch"
                    ? faCouch
                    : props.type === "Rug"
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
