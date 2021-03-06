import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import icon from '../earthquake.png';

export class MapContainer extends Component {
	constructor() {
		super();
		this.state = {
			activeMarker: {},
		};
	}
	dropMarker = () =>
	{
		//returns all the markers
		return this.props.quakeArray.map((earthquake, index) =>
		{
			let myTitle = `mag: ${earthquake.properties.mag} at: ${earthquake.properties.place}`;
			let myName = `earthquake${index}`;
			return(
				<Marker
					className="quake-marker"
					title={myTitle}
					id={myName}
					name={myName}
					icon={icon}
					position={{lat: earthquake.geometry.coordinates[1], lng: earthquake.geometry.coordinates[0]}}
				/>
			);
		});
	}
  render() {
		const style = {
			width: '100%',
			height: '400px'
		}
    return (
      <Map google={this.props.google}
					style={style}
					initialCenter={{
            lat: 0,
            lng: 145,
          }}
          zoom={3}
          onClick={this.onMapClicked}> 

				{ this.dropMarker() }
				
      </Map>
    );
  }
}

// const LoadingContainer = (props) => (
//   <div className="loading-container">Fancy loading container!</div>
// )

export default GoogleApiWrapper({
	apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'),
	// LoadingContainer: LoadingContainer
})(MapContainer)


// const Pin = ({ text }) => <div>{text}</div>;

// class Map extends Component {
	
// 	constructor()
// 	{
// 		super();
// 	}

// 	static defaultProps = {
// 		center: {
// 			lat: 0,
// 			lng: 90
// 		},
// 		zoom: 0
// 	};
 
	// returnPins = () =>
	// {
	// 	//returns all the pins
	// 	return this.props.quakeArray.map((earthquake, index) =>
	// 	{
	// 		return(
	// 			<Pin
	// 				className="pin"
	// 				lat={earthquake.geometry.coordinates[1]}
	// 				lng={earthquake.geometry.coordinates[0]}
	// 				text={earthquake.properties.mag}
	// 			/>
	// 		);
	// 	});
		
// 	}

// 	render() {
// 		return (
// 			// Important! Always set the container height explicitly
// 			<div className="pinContainer">
// 				<GoogleMapReact
// 					bootstrapURLKeys={{ key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg" }}
// 					defaultCenter={this.props.center}
// 					defaultZoom={this.props.zoom}
// 				>
// 					{this.returnPins()}
// 				</GoogleMapReact>
// 			</div>
// 		);
// 	}
// }
 
//export default Map;