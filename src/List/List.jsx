import React, {Component} from 'react';

class List extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			quakeArray: this.props.quakeArray
		}
	}

	quakeListElements()
	{
		//Returns list elements from this.state.quakeArray
	}

	render()
	{
		return(
			<div className="quakeContainer">
				<h1>HERE IS THE LIST COMPONENT</h1>
				{this.state.quakeArray}
			</div>
		);
	}
}

export default List;