import React from "react";
import "../styles/Feedback.css";

const Feedback = () => (
  <div className="feedback">
    <div className="he">
      <h2>Customer's Feedback</h2>
    </div>
    <div className="colapse">
      <div className="feedback-item">
        <div className="name">RISHI</div>
        <div className="emmet">
          <p>⭐⭐⭐⭐⭐</p>
          <p>Great service!</p>
        </div>
      </div>
      <div className="border"></div>
      <div className="feedback-item">
        <div className="name">NIKHIL</div>
        <div className="emmet">
          <p>⭐⭐⭐⭐</p>
          <p>Will order again.</p>
        </div>
      </div>
      <div className="border"></div>
      <div className="feedback-item">
        <div className="name">CHINNY</div>
        <div className="emmet">
          <p>⭐⭐⭐⭐⭐</p>
          <p>Awesome Ambience..!</p>
        </div>
      </div>
    </div>
  </div>
);

export default Feedback;
