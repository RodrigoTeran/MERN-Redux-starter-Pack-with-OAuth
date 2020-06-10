import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// ICONS
import HomeIcon from "@material-ui/icons/Home";
import LogoutIcon from "@material-ui/icons/MeetingRoom";

// Components
import DropDown from "./DropDown";

// Component
class MenuBar extends Component {
  getUser() {
    fetch("/menu", {  // Hacer un req a esta ruta
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => { // El JSON de response
        this.props.updateUser(data);
      });
  };
  auth() {  // To check if the user is auth or not
    const profileImg = this.props.imgId === null ? (
      <div></div>
    ) :
      (
        <Link to="/profile" className="nav-link cool-link" title="Perfil">
          <img src={`${this.props.imgId}`} alt="Perfil" title="Perfil" className="rounded-circle img-fluid" style={{
            width: "25px"
          }}></img>
        </Link>
      )
    const authorization = this.props.username === "" ?
      (
        <React.Fragment>
          <li>
            <DropDown></DropDown>
          </li>
        </React.Fragment>
      ) :
      (
        <React.Fragment>
          <li className="nav-item mr-3">
            {profileImg}
          </li>
          <li className="nav-item mr-3">
            <a href="/auth/logout" className="nav-link cool-link" title="Cerrar Sesión">
              <LogoutIcon></LogoutIcon>
            </a>
          </li>
        </React.Fragment>
      );
    return authorization;
  };
  // Hooks
  componentDidMount() {
    this.getUser();
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top top-nav">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-name cool-link">Starter Pack</Link>
              </li>
            </ul>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto pr-5 nav-links">
                <li className="nav-item mr-3">
                  <Link to="/" className="nav-link cool-link" title="Inicio">
                    <HomeIcon></HomeIcon>
                  </Link>
                </li>
                {this.auth()}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  };
};
const mapStateToProps = (state) => {
  return {
    username: state.username,
    imgId: state.imgId
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (data) => {
      dispatch({
        type: "UPDATE_USER",
        username: data.username,
        imgId: data.imgId
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);