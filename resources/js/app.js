require('./bootstrap');

import VueRouter from 'vue-router';
import User from './components/User';
import Users from './components/Users';

Vue.use(VueRouter);
const routes = [
	{
		name: 'home',
		path: '/',
		component: {template: '<div>Your Logged In Bro!!</div>'}
	},
	{
		name: 'users',
		path: '/users',
		component: Users
	},
	{
		name: 'user',
		path: '/user/:id',
		component: User
	}
];
const router = new VueRouter({
	mode: 'history',
	routes
});
const app = new Vue({
	el: '#app',
	props: ['auth'],
	router,
	data() {
		return {
			user: {}
		};
	},
	mounted() {
		if (this.$el.attributes.auth.value) {
			this.user = JSON.parse(this.$el.attributes.auth.value);
		}
	}
});