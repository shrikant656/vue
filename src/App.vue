<template>
  <div id="app">
    <div id="nav">
      <router-link to='/'>Home</router-link>
      <router-link to='/about'>About</router-link>
      <router-link to='/user'>User</router-link>
    </div>
    <router-view/>
    <AddTodo @addTodo="newTodo"/>
    <Todos :todos="todo" @delTodo="deleteTodo"/>
  </div>
</template>

<script>
import axios from 'axios';
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo';

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todo: []
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.todo = res.data)
    .catch(err => console.log(err))
  },
  methods: {
    newTodo(newTodo) {
      const {title, completed} = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,
        completed
      })
      .then(res => this.todo = [...this.todo, res.data])
      .catch(res => console.log(err))
    },
    deleteTodo(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.todo = this.todo.filter(todo => todo.id !== id))
      .catch(err => console.log(err))
      
    }
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
