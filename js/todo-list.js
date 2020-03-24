Vue.component('todo-item', {
    props : [ 'todo' ],
    template:`<li >{{ todo.text }}
        <button type="button" v-on:click="$emit('remove', todo.id)">Remove</button></li>`
});

Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `
  })


var app = new Vue({
    el: '#app', 
    data : {
        taskAddItem : '',
        list : [
            { id: 1, text: 'Estudiar Vue', exist : true },
            { id: 2, text: 'Componentes', exist : true }
        ],
        errorSpan : false,
        messageError : ''
    },
    methods : {
        addTask : function() {
            if (this.taskAddItem.trim().length === 0) {
                this.errorSpan = true;
                this.messageError = 'Debe estar lleno';
                return false;
            }
            this.errorSpan = false;
            this.messageError = '';
            this.list.push(
                { id : this.generateId(), text : this.taskAddItem, exist : true }
            );
            this.clearTaskForm();
        },
        clearTaskForm : function () {
            this.taskAddItem = '';
        },
        generateId : function () {
            return this.lastId() + 1;
        },
        lastId : function () {
            let ids = this.list.map(function (item) {
                return item.id;
            });
            return Math.max(...ids);
        },
        showError : function (todo_item) {
            
        },
        removeTodo (idToRemove) {
			this.list = this.list.filter(todo => {
				return todo.id !== idToRemove
			})
		}
    },
    computed : {

    },
  })