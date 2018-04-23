import React from 'react';
import axios from 'axios';

class TaskItem extends React.Component {

	constructor(props) {
		super(props);

		this.handleTaskDelete = this.handleTaskDelete.bind(this, this.props.item._id);
	}

	handleTaskDelete(id) {
		axios.delete(`http://localhost:8080/notes/${id}`);
	}

	render() {
		return (
			<li>
				<div className="task-list-item">
					<h3>{this.props.item.title}</h3>
					{this.props.item.text}
					<button id="delete-button" onClick={this.handleTaskDelete}><i className="fas fa-trash fa-lg"></i></button>
				</div>

				<style jsx>{`
					.task-list-item{
						display: flex;
						flex-direction: column;
						max-width: 500px;
						background: white;
						border-radius: 5px;
						padding: 10px;
						box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
						font-weight: 300;
					}

					#delete-button{
						background: white;
						border: none;
						color: grey;
						height: 20px;
						width: 20px;
						margin: 5px;
					}

					#delete-button:hover{
						color: black;
					}

					li{
						list-style-type: none;
						margin-bottom: 10px;
					}

					h3{
						font-weight: 500;
						margin-top: 0;
					}
				`}</style>
			</li>
		);
	}
}

export default TaskItem;