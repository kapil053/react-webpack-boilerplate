import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    name: 'SendinBlue'
		};
	}

	componentWillReceiveProps(newProps) {
		if(newProps.class !== this.props.class) {
			alert('new value')
		}
	}

	handleChange(e) {
	    e.preventDefault();
	    this.setState({
	        name: 'New SendinBlue'
        })
    }
	render() {
		return (
            <div>
               My name is {this.props.anshul}
               <div>
	               <button onClick={() => this.props.handleName(this.state.name)}>
		               change name
	               </button>
               </div>
            </div>
		);
	}
}

export default Header;
