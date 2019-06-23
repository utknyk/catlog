import React from 'react';
import {connect} from 'react-redux';
import Home from './components/Home/home';
import Admin from './components/Admin/admin';
import { BrowserRouter as Router, Route } from "react-router-dom"

const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}

class App extends React.Component{
	render(){
		return(
			<Router>
				<Route exact path="/" component={Home} />
				<Route path="/admin" component={Admin} />
			</Router>
			);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
