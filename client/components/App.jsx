import React from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import axios from 'axios';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
		};
	}

	componentWillMount() {
		axios.get(`http://localhost:8080/notes`)
			.then((response) => {
				this.setState({ tasks: response.data });
			});
	}

	render() {
		return (
			<div>
				<TaskList tasks={this.state.tasks} />
				<AddTask />
			</div>
		);
	}
}

module.exports = App;