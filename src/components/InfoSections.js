// InfoSections.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faUtensils,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/InfoSections.css";

const InfoSections = () => (
  <div className="info-sections">
    <div className="info-section">
      <div className="bull">
        <FontAwesomeIcon icon={faBullseye} />
      </div>
      <div className="bulls">
        <h3>Goals</h3>
      </div>
    </div>
    <div className="info-section">
      <div className="bull">
        <FontAwesomeIcon icon={faUtensils} />
      </div>
      <div className="bulls">
        <h3>Popular Dishes</h3>
      </div>
    </div>
    <div className="info-section">
      <div className="bull">
        <FontAwesomeIcon icon={faBookOpen} />
      </div>
      <div className="bulls">
        <h3>Menus</h3>
      </div>
    </div>
  </div>
);

export default InfoSections;
