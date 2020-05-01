<template>
    <div>
        <h1>User Page</h1>
        <button @click="navigateToHome">Navigate to home</button>
        <router-link to='/user/1'>User 1</router-link>
        <router-link to='/user/2'>User 2</router-link>
        <router-link to='/user/3'>User 3</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'User',
    methods: {
        navigateToHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>
