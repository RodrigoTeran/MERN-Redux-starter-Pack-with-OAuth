import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import $ from "jquery";
import { findDOMNode } from "react-dom";

// ICONS
import HomeIcon from "@material-ui/icons/Home";
import LogoutIcon from "@material-ui/icons/MeetingRoom";

// Component
class BottomMenuBar extends Component {
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
				<Link to="/profile" className="nav-link cool-link" title="Perfil" onClick={this.closeAnimation}>
					<img src={`${this.props.imgId}`} alt="Perfil" title="Perfil" className="rounded-circle img-fluid" style={{
						width: "25px"
					}}></img><span className="bottom-nav-link"> Perfil</span>
				</Link>
			)
		const authorization = this.props.username === "" ?
			(
				<React.Fragment>
					<li className="nav-item">
						<Link to="/" className="nav-link bottom-nav-link cool-link" onClick={this.closeAnimation} title="Inicio">
							<HomeIcon></HomeIcon> Inicio
						</Link>
					</li>
					<li className="nav-item">
						<a href="/auth/google" className="nav-link bottom-nav-link cool-link" onClick={this.closeAnimation}>
							Google
            </a>
					</li>
				</React.Fragment>
			) :
			(
				<React.Fragment>
					<li className="nav-item">
						<Link to="/" className="nav-link bottom-nav-link cool-link" onClick={this.closeAnimation} title="Inicio">
							<HomeIcon></HomeIcon> Inicio
						</Link>
					</li>
					<li className="nav-item">
						{profileImg}
					</li>
					<li className="nav-item">
						<a href="/auth/logout" className="nav-link bottom-nav-link cool-link" onClick={this.closeAnimation} title="Cerrar Sesión">
							<LogoutIcon></LogoutIcon> Cerrar Sesión
            </a>
					</li>
				</React.Fragment>
			);
		return authorization;
	};
	animate = () => {	// Close and open Menu
		const links = findDOMNode(this.refs.links);
		if ($(links).hasClass("open")) {
			$(links).removeClass("open");
		} else {
			$(links).addClass("open");
		};
	};
	closeAnimation = () => {	// Close Menu when link is clicked
		const links = findDOMNode(this.refs.links);
		$(links).removeClass("open");
	};
	// Hooks
	componentDidMount() {
		this.getUser();
	};
	render() {
		return (
			<React.Fragment>
				<div className="footer-nav">
					<nav className="navbar navbar-expand-lg navbar-dark fixed-bottom py-3">
						<div className="container-fluid">
							<Link to="/" className="nav-name cool-link">Starter Pack</Link>
							<div className="hamburger" onClick={this.animate}>
								<div className="line"></div>
								<div className="line"></div>
								<div className="line"></div>
							</div>
						</div>
					</nav>
					<ul className="navbar-nav nav-links" ref="links">
						{this.auth()}
					</ul>
				</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(BottomMenuBar);
