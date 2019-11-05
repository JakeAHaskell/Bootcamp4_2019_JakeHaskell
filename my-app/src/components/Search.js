import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		const val = this.value.value;
		this.props.filterUpdate(val);
	}
	render() {
		return (
			<form>
				<input type="text"
					   placeholder="Type to Filter"
					   onChange={this.filterUpdate.bind(this)}
					   ref={(value) => {this.value = value}}/>
			</form>
		);
	}
}
export default Search;