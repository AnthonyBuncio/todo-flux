import React from 'react'
import ReactDOM from 'react-dom'

import ACTIONS from '../actions'

var Header = React.createClass({
	render : function() {
		return (
			<div className="header">
				<h1>Tadoo</h1>
				<FormComponent />
			</div>
			)
	}
})

var FormComponent = React.createClass({
	_handleSubmit : function(eventObj) {
		eventObj.preventDefault()
		var newTask = eventObj.target.task.value
		console.log(newTask)
		ACTIONS._addToList(newTask)
		eventObj.target.task.value = ''
	},
	render : function() {
		return (
			<form onSubmit={this._handleSubmit}>
				<input name='task' placeholder="Enter an activity.." />
			</form>
			)
	}
})

export default Header