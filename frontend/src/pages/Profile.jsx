import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Component
class Profile extends Component {
  auth() {  // To check if the user is auth or not
    const authorization = this.props.username === "" ?
      (
        <Redirect to="/"></Redirect>
      ) :
      (
        <div>
          Bienvenido {this.props.username}, este es tu Perfil!
        </div>
      );
    return authorization;
  };
  render() {
    return (
      <div className="container topSpace d-flex justify-content-center">
        {this.auth()}
      </div>
    );
  };
};
const mapStateToProps = (state) => {
  return {
    username: state.username
  };
};
export default connect(mapStateToProps)(Profile);
