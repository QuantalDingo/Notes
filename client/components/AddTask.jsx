import React from 'react';
import axios from 'axios';

class AddTask extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			text: '',
		};

		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.handleChangeText = this.handleChangeText.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		axios.post(`http://localhost:8080/notes`, { title: this.state.title, text: this.state.text })
			.then(this.setState({ title: '', text: '', }))
	}

	handleChangeTitle(e) {
		this.setState({ title: e.target.value });
	}

	handleChangeText(e) {
		this.setState({ text: e.target.value });
	}

	render() {
		return (
			<div>
				<input placeholder="Name" value={this.state.title} type="text" onChange={this.handleChangeTitle} />
				<textarea placeholder="Text" type="text" value={this.state.text} rows="10" cols="60" onChange={this.handleChangeText}></textarea>
				<button onClick={this.handleClick}>
					<i className="fas fa-plus-circle"></i>
				</button>
			</div>
		);
	}
}

module.exports = AddTask;