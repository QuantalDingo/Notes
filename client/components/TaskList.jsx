import React from 'react';
import TaskItem from './TaskItem.jsx';

class TaskList extends React.Component {

	render() {

		const listItems = (
			this.props.tasks.map((item) =>
				<TaskItem item={item} key={item._id} />
			)
		);

		return (
			<ul>{listItems}</ul>
		);
	}
}

module.exports = TaskList;