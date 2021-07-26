import React from "react";
import PropTypes from "prop-types";
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
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
