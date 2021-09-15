import React from "react";
import "../assets/styles/Feeds.css";

const FeedsInputOptions = ({ title, Icon, color }) => {
  return (
    <div className="singleOptionContainer">
      {Icon && <Icon style={{ color: color }} />}
      {title && <h5>{title}</h5>}
    </div>
  );
};

export default FeedsInputOptions;
