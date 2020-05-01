<template>
    <div>
        <form @submit="onSubmit">
            <input type="text" name="title" v-model="title">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
    name: 'add-todo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            const newData = {
                // id: uuid.v4(),
                title: this.title,
                completed: false
            }
            this.$emit('addTodo', newData);
            this.title = '';
        }
    }
}
</script>

<style scoped>
form {
        display: flex;
        }
        input[type="text"] {
        flex: 10;
        padding: 5px;
        }
        input[type="submit"] {
        flex: 2;
    }
</style>
