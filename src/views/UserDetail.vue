<template>
    <div>
        <h1>User Detail</h1>
        <p>User: {{$route.params.id}}</p>
        <router-link tag="button" :to="{name: 'UserEdit', params: { id: $route.params.id }}"> Edit </router-link>
        <!-- <router-link tag="button" :to="'/user/' + $route.params.id + '/edit'"> Edit </router-link> -->
    </div>
</template>

<script>
export default {
    name: 'UserDetail'
}
</script>

<style>

</style>
