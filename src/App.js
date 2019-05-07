import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Map from './Map/Map';
import List from './List/List';

class App extends Component
{
	constructor()
	{
		super();
		this.state =
		{
			quakeArray: [] //An array of earthquakes
		}
		this.handleAddEarthquakes();
	}


	handleAddEarthquakes = async () => {
		const searchURL = `https://cors-anywhere.herokuapp.com/http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson`;
		const result = await fetch(searchURL);
		const parsedResult = await result.json();
		this.setState({
			quakeArray: await parsedResult.features //.filter(planet => planet.population !== "unknown") 
		});
		console.log("updated quakeArray: " + this.state.quakeArray);

		// this.setState(
		// {
		// 	quakeArray: await [...this.state.quakeArray,[1,2,3,4]]
		// });
		// console.log("updated quakeArray: " + this.state.quakeArray);
	}


	render()
	{
		return (
			<div className="App">
				<h1>react-geo-quakes</h1>
				<Map></Map>
				<List quakeArray={this.state.quakeArray}></List>
			</div>
		);
	}
}

export default App;
