import React from 'react';
import logo from './logo.svg';
import './App.css';

import Map from './Map/Map';
import List from './List/List';

function App() {
	return (
		<div className="App">
			<h1>react-geo-quakes</h1>
			<Map></Map>
			<List></List>
		</div>
	);
}

export default App;
