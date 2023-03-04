
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AboutMe from './Arouter/AboutMe';
import Education from './Arouter/Education';
import Interests from './Arouter/Interests';
import Projects from './Arouter/Projects';
import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App-header">
			
			<center>
				<h1>My Profile</h1>
				<Link to="/AboutMe">AboutMe</Link>
			    <br></br>
				<Link to="/Education">Education</Link>
			    <br></br>
				<Link to="/Interests">Interests</Link>
			    <br></br>
				<Link to="/Projects">Projects</Link>
				</center>
			
		<Routes>
		<Route exact path='/AboutMe' element={< AboutMe />}></Route>
		<Route exact path='/Education' element={< Education/>}></Route>
		<Route exact path='/Interests' element={< Interests />}></Route>
		<Route exact path='/Projects' element={< Projects />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
