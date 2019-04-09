import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyComponent extends Component {
	render() {
		return (
            <div>
	            My Component values {this.props.name} and {this.props.age}
            </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		name: state.test.name,
		age: state.amar.age,
	};
}

export default connect(mapStateToProps)(MyComponent);
