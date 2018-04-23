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
			.then(this.setState({ title: '', text: '', }));
	}

	handleChangeTitle(e) {
		this.setState({ title: e.target.value });
	}

	handleChangeText(e) {
		this.setState({ text: e.target.value });
	}

	render() {
		return (
			<div id="add-component">
				<input id="add-title" placeholder="Name" value={this.state.title} type="text" onChange={this.handleChangeTitle} />
				<textarea id="add-text" placeholder="Text" type="text" value={this.state.text} rows="5" onChange={this.handleChangeText}></textarea>
				<button id="add-button" onClick={this.handleClick}>
					Add to-do
				</button>

				<style jsx>{`
					#add-button{
						border-radius: 24px;
						border: none;
						background-color: #ff5722;
						height: 40px;
						width: 100px;
						color: white;
						font-weight: 500;
						box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
						align-self: center;
					}

					#add-button:active{
						opacity: .75;
        				transform: scale(.97);
        				transition: all 100ms ease;
					}

					#add-button:hover {
						opacity: .9;
						transition: all 100ms ease;
					}

					#add-title, #add-text{
						border: none;
					}

					#add-title{
						font-weight: 500;
						font-size: 125%;
					}

					#add-text{
						resize: none;
						font-weight: 300;
						margin-top: 5px;
					}

					#add-component{
						display: flex;
						flex-direction: column;
						border-radius: 5px;
						width: 100%;
						max-width: 500px;
						background: white;
						padding: 10px;
						box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
					}
				`}</style>
			</div>
		);
	}
}

module.exports = AddTask;