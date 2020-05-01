<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todoItem="todo" @todoComplete="$emit('delTodo',todo.id)"/>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  name: 'Todos',
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      default: []
    }
  }
}
</script scoped>

<style>

</style>
