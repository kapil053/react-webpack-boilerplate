import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
	constructor(props) {
		console.log('constructor')
		super(props);
		this.state = {
		};
	}

    render() {
        return (
            <div>
                This is Contact {this.props.match.params.xyz} and {this.props.match.params.abc}
                <Link to="/">
	                go to app
                </Link>
            </div>
        )
    }
}


export default Contact;
