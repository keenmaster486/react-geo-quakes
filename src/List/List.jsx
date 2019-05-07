import React, {Component} from 'react';

class List extends Component
{
	constructor()
	{
		super();
	}

	componentDidMount()
	{
	};

	quakeListElements()
	{
		//Returns list elements from this.state.quakeArray
		if (this.props.quakeArray === [] || !this.props.quakeArray || this.props.quakeArray === undefined || this.props.quakeArray === "") {return false;}

		console.log("TEST: " + this.props.quakeArray);

		return this.props.quakeArray.map((earthquake, index) => {
			return (<li key={index}>At {earthquake.properties.place} at lat/long: {earthquake.geometry.coordinates[1]}, {earthquake.geometry.coordinates[0]} and at a depth of {earthquake.geometry.coordinates[2]} km there is an earthquake with
					{
						earthquake.properties.mag ?
						` magnitude ${earthquake.properties.mag}`
						: ' no magnitude data'
					} and
					{
						earthquake.properties.tsunami ?
						' triggered a tsunami'
						: ' did not trigger a tsunami'
					}.
				</li>)
		});

		// return(
		// 	<li>{this.props.quakeArray[0].properties.place}</li>
		// );


	}

	render()
	{
		//console.log("TEST: " + this.props.quakeArray);
		return(
			<div className="quake-container">
				<ul>
					{this.quakeListElements()}
				</ul>
			</div>
		);
	}
}

export default List;