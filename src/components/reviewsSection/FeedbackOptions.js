import React from "react";
import Styles from "./FeedbackOptions.module.css";
const FeedbackOptions = (props) => {
  const { onLeaveFeedback } = props;
  return (
    <>
      <button
        className={Styles.btnReview}
        onClick={() => onLeaveFeedback(["good"])}
      >
        Good
      </button>
      <button
        className={Styles.btnReview}
        onClick={() => onLeaveFeedback(["neutral"])}
      >
        Neutral
      </button>
      <button
        className={Styles.btnReview}
        onClick={() => onLeaveFeedback(["bad"])}
      >
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
