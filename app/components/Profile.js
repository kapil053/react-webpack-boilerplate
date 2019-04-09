import React, { Component } from 'react';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: {}
		};
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.match.params.id}`).then((x) => {
			return x.json();
		}).then((products) => {
			this.setState({ products })
		})
	}

	render() {
		console.log('props', this.props.history)
        return (
            <div>
	            {
	            	this.state.products.title
	            }
	            <button onClick={() => this.props.history.goBack()}>
		            back
	            </button>
            </div>
        )
    }
}


export default Profile;
