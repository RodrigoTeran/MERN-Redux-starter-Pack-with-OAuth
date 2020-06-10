import React, { Component } from "react";
import { connect } from "react-redux";

// Component
class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container topSpace d-flex justify-content-center">
					Bienvenido {this.props.username}, este es la Página Principal!
        </div>
			</React.Fragment>
		);
	};
};
const mapStateToProps = (state) => {
	return {
		username: state.username
	};
};

export default connect(mapStateToProps)(Home);
