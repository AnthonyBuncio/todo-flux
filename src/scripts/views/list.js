import React from 'react'
import ReactDOM from 'react-dom'

import STORE from '../store'
import ACTIONS from '../actions'

var List = React.createClass({
	componentWillMount : function() {
		STORE.on('addTask', () => {
			this.setState(STORE.data)
		})
	},
	getInitialState : function() {
		return STORE.data
	},
	render : function() {
		return (
			<div className="list-container">
				<ShowList 
				items={this.state.items}
				/>
			</div>
			)
	}
})

var ShowList = React.createClass({
	_makeList : function() {
		return this.props.items.map((task) => {
			return <ListItem
						key={task.id}
						oneTask={task}
						allTasks={this.props.items}
						/>
		})
	},
	render : function() {
		return (
			<ul className="list">
				<h1 className="list-title">What are we doing today..</h1>
				{this._makeList()}
			</ul>
			)
	}
})

var ListItem = React.createClass({
	_completeTask : function() {
		var index = this.props.allTasks.indexOf(this.props.oneTask)
		var focusTask = this.props.allTasks[index].complete
		ACTIONS.completeTask(focusTask,index)
	},

	_deleteTask : function() {
		var index = this.props.allTasks.indexOf(this.props.oneTask)
		ACTIONS.removeItem(index)
	},

	render : function() {
		var completeItem = (this.props.oneTask.complete) ? 'complete' : ''
		return (
			<li className={completeItem}>
				<p>{this.props.oneTask.name}</p>
				<i className={`material-icons ${completeItem}`} onClick={this._completeTask}>done</i>
				<span onClick={this._deleteTask}> delete</span>
			</li>
			)
	}
})


export default List