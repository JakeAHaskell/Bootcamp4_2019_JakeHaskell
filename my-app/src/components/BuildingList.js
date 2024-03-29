import React from 'react';

class BuildingList extends React.Component {
	render() {
		const { data, filterText } = this.props;

		const buildingList = data.filter(name => {
			return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
			.map(directory => {
				return (
					<tr key={directory.id} onClick={() => this.props.selectedUpdate(directory.id)}>
						<td> {directory.code} </td>
						<td> {directory.name} </td>
					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;