import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div class="card text-center" key={survey._id}>
          <h5 class="card-header">{survey.title}</h5>
          <div class="card-body">
            <h5 class="card-title">{survey.subject}</h5>
            <p class="card-text">{survey.body}</p>
            <button class="btn btn-success">Yes: {survey.yes}</button>
            <button class="btn btn-danger">No: {survey.no}</button>
          </div>
          <div class="card-footer text-muted">
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
