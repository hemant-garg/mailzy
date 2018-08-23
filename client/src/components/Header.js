import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case false:
        return (
          <li className="nav-item">
            <a href="/auth/google" className="nav-link">
              Login with Google
            </a>
          </li>
        );
      case null:
        return "";
      default:
        return [
          <li className="nav-item" key="1">
            <Payments />
          </li>,
          <li className="nav-item" key="3">
            <button className="btn btn-secondary">
              CREDITS - {this.props.auth.credits}
            </button>
          </li>,
          <li className="nav-item" key="2">
            <a href="/api/logout" className="nav-link">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to={this.props.auth ? "/surveys" : "/"}
          >
            Mailzy
          </Link>
          <ul className="navbar-nav ml-auto">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
