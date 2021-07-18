import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Container from "@material-ui/core/Container";

class Section extends Component {
  render() {
    return (
      <Container>
        <FeedbackOptions change={this.props.handleChange} />
        {!!this.props.total && (
          <Statistics
            positive={this.props.positiveFeedback}
            total={this.props.total}
            stats={this.props.stats}
          />
        )}
      </Container>
    );
  }
}

export default Section;
