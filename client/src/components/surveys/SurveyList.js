import React, { Component } from "react";
import { PieChart, Legend } from "react-easy-chart";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="surveyList--card" key={survey._id}>
          <div>
            <h5 className="surveyList--title">{survey.title}</h5>
            <div className="surveyList--details">
              <div>
                <div className="surveyList--subject">
                  <span>Subject</span> - {survey.subject}
                </div>
                <div className="surveyList--body">
                  <span>Email Body</span> - {survey.body}
                </div>
                {/*  <button className="button-dark-3">Yes: {survey.yes}</button>
              <button className="button-dark-4">No: {survey.no}</button>*/}
              </div>
              <div className="surveyList--bottom">
                <div>
                  <span>Sent on : </span>{" "}
                  {new Date(survey.dateSent).toLocaleDateString()}
                </div>
                <div>
                  <span>Total Responses : {survey.yes + survey.no} </span>
                </div>
              </div>
            </div>
          </div>
          {this.renderChart(survey)}
        </div>
      );
    });
  }

  renderChart(survey) {
    const pieDataCustom = [
      { key: "Yes", value: survey.yes, color: "#aaac84" },
      { key: "No", value: survey.no, color: "#dce7c5" }
    ];

    const config = [{ color: "#aaac84" }, { color: "#dce7c5" }];
    return (
      <div className="surveyList--chart">
        <PieChart data={pieDataCustom} size={150} />
        <Legend
          data={pieDataCustom}
          dataId={"key"}
          config={config}
          horizontal
        />
      </div>
    );
  }

  render() {
    return (
      <section className="surveyList">
        <div className="primary-title">Dashboard</div>

        {this.renderSurveys()}
      </section>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
