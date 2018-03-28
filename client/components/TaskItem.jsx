import React from 'react';

class TaskItem extends React.Component {
	render() {
		return (
			<li>
				<div>
					<div>{this.props.item.title}</div>
					<div>{this.props.item.text}</div>
					<button><i className="fas fa-trash"></i></button>
				</div>
			</li>
		);
	}
}

module.exports = TaskItem;