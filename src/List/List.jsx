import React, {Component} from 'react';

class List extends Component
{
	constructor()
	{
		super();
	}

	render()
	{
		return(
			<div class="quakeContainer">
				<h1>HERE IS THE LIST COMPONENT</h1>
				<ul>
					{this.props.earthquakesList()}
				</ul>
			</div>
		);
	}
}

export default List;