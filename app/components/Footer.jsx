import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
            <div>
	            My age is {this.props.myAge}
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		myAge: state.amar.age,
	};
}

export default connect(mapStateToProps)(Footer);
