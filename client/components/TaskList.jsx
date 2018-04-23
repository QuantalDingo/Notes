import React from 'react';
import TaskItem from './TaskItem.jsx';
import axios from 'axios';

class TaskList extends React.Component {

	render() {

		const listItems = (
			this.props.tasks.map((item) =>
				<TaskItem item={item} key={item._id}/>
			)
		);

		return (
			<div className="task-list">
				<ul>{listItems}</ul>

				<style jsx>{`
					ul{
						padding: 0;
					}
				`}</style>
			</div>
		);
	}
}

export default TaskList;