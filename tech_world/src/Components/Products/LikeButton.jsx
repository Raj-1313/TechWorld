import React from "react";
import like from "./LikeButton.module.css";

const LikeButton = () => {
  return (
    <div>
      <label className={like.like}>
        <input type="checkbox" id={like.srikant} />
        <div className={like.hearth} />
      </label>
    </div>
  );
};

export default LikeButton;
