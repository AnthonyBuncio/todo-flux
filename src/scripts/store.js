import Backbone from 'backbone'

var STORE = Object.assign({}, Backbone.Events, {
	data : {
		items : []
	},
	set : function(obj) {
		this.data = Object.assign(this.data, obj)
		this.trigger('addTask')
	}
})

export default STORE