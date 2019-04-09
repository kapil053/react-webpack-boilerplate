import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header.container';
import MyComponent from './MyComponent';
import Footer from './Footer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/todos").then((x) => {
			return x.json();
		}).then((products) => {
			this.setState({ products })
		})
	}

    render() {
        return (
            <div>
                <h2 id="heading">React Bootcamp</h2>
	            <Header />
	            <MyComponent />
	            <Footer />
            </div>
        )
    }
}


export default App;
