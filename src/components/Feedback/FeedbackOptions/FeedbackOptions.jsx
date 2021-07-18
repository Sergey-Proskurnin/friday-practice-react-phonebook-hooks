import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const FeedbackOptions = ({ change }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button
          name="good"
          onClick={(e) => change(e.target.textContent.toLowerCase())}
        >
          Good
        </Button>
        <Button
          name="neutral"
          onClick={(e) => change(e.target.textContent.toLowerCase())}
        >
          Neutral
        </Button>
        <Button
          name="bad"
          onClick={(e) => change(e.target.textContent.toLowerCase())}
        >
          Bad
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default FeedbackOptions;
