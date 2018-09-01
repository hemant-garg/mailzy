import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case false:
        return (
          <li className="button-light">
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      case null:
        return "";
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" className="button-light">
            CREDITS - {this.props.auth.credits}
          </li>,
          <li key="2" className="button-light">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="navbar">
        <Link className="navbar-title" to={this.props.auth ? "/surveys" : "/"}>
          Mail<span>zy</span>
        </Link>
        <ul className="navbar-list">{this.renderContent()}</ul>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
