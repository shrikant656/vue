import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'about',
            path: '/about',
            component: () => import('./views/About')
        },
        {
            name: 'User',
            path: '/user',
            component: () => import('./views/User'),
            children: [
                {
                    name: 'UserStart',
                    path: '/',
                    component: () => import('./views/UserStart')
                },
                {
                    name: 'UserDetail',
                    path: ':id',
                    component: () => import('./views/UserDetail')
                },
                {
                    name: 'UserEdit',
                    path: ':id/edit',
                    component: () => import('./views/UserEdit')
                }
            ]
        }
    ]
})