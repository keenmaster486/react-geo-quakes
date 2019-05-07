import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Pin = ({ text }) => <div>{text}</div>;




class Map extends Component {
	
	constructor()
	{
		super();
	}

	static defaultProps = {
		center: {
			lat: 0,
			lng: 90
		},
		zoom: 0
	};
 
	returnPins = () =>
	{
		//returns all the pins
		return this.props.quakeArray.map((earthquake, index) =>
		{
			return(
				<Pin
					className="pin"
					lat={earthquake.geometry.coordinates[1]}
					lng={earthquake.geometry.coordinates[0]}
					text={earthquake.properties.mag}
				/>
			);
		});
		
	}

	render() {
		return (
			// Important! Always set the container height explicitly
			<div className="pinContainer">
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg" }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
					{this.returnPins()}
				</GoogleMapReact>
			</div>
		);
	}
}
 
export default Map;