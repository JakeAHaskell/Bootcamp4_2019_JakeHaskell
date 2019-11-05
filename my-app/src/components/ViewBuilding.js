import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {
	deleteBuilding(){
		this.props.removeBuilding(this.props.selectedBuilding)
	}
	render() {
		const { data, selectedBuilding } = this.props;

		let display = (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);

		let build = data.find((el) => el.id == selectedBuilding);

		if(build){
			let coords = null;
			if(build.coordinates){
				coords = (
					<div>
						<h3>Latitude: {build.coordinates.latitude}</h3>
						<h3>Longitude: {build.coordinates.longitude}</h3>
					</div>
				);
			}
			let addy = null;
			if(build.address){
				addy = (
					<div>
						<h3>Address: {build.address}</h3>
					</div>
				);
			}
			display = (
				<div>
					<h3>ID: {build.id}</h3>
					<h3>Code: {build.code}</h3>
					<h3>Name: {build.name}</h3>
					{coords}
					{addy}
					<RemoveBuilding removeBuilding={this.deleteBuilding.bind(this)}/>
				</div>
			);
		}
		return display;
	}
}
export default ViewBuilding;