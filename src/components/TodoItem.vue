<template>
    <div class="todo-item" :class="{'is-complete': todoItem.completed}">
        <p>
            <input type="checkbox"
            @click="markComplete()">
            {{todoItem.title}}
            <button class="del" 
            @click="$emit('todoComplete', todoItem.id)">x</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'todo-item',
    props: {
        todoItem: {
            type: Object,
            default: ({})
        }
    },
    methods: {
        markComplete() {
            this.todoItem = !this.todoItem
        }
    }
}
</script>


<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>
