import React from "react";

const BadgeIconButton = (props) => {
  const { badgeNumber, icon, badgeIconButtonWrapper, onClick } = props;
  return (
    <div>
      <button onClick={onClick} className={`btn ${badgeIconButtonWrapper}`}>
        <span className="badge-icon badge-container">
          <i className={icon}></i>
          {badgeNumber ? (
            <span className="badge-status-default badge-status-number badge-button-text">
              {badgeNumber}
            </span>
          ) : null}
        </span>
      </button>
    </div>
  );
};

export default BadgeIconButton;
