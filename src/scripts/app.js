import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import Header from './views/header'
import List from './views/list'

var TodoApp = React.createClass({
	render : function() {
		return (
			<div className="todo-container">
				<Header />
				<List />
			</div>
			)
	}
})

const app = function() {
  ReactDOM.render(<TodoApp />, document.querySelector('.container'))
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..