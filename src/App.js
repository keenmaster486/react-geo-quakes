import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Map from './Map/Map';
import List from './List/List';

class  App extends Component
{
	earthquakesList = () =>
	{
		return(
			<li>Test</li>
		);
	}
	render()
	{
		return (
			<div className="App">
				<h1>react-geo-quakes</h1>
				<Map></Map>
				<List earthquakesList={this.earthquakesList}></List>
			</div>
		);
	}
}

export default App;
