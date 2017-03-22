import STORE from './store'

var ACTIONS = {
	_addToList : function(task) {
		var itemsList = STORE.data.items
		itemsList.push({
			name: task,
			complete: false
		})
		STORE.set({
			items: itemsList
		})
	},
	removeItem:function(index){
		var itemsList = STORE.data.items
		itemsList.splice(index,1);
		STORE.set({
			items: itemsList
		})

	},
	completeTask:function(complete,index){
		var itemsList = STORE.data.items
		var completeStatus = (complete) ? false : true
		itemsList[index].complete = completeStatus
		STORE.set({
			items: itemsList
		})

	}
}

export default ACTIONS