<template>
	<div>
		<div :key="index" class="" v-for="(user, index) in users">
			<div class="font-semibold border border-2 rounded shadow-md text-gray-700 py-3 px-6 mb-2">
				{{ user.name }}
				<router-link :to="{ name: 'user', params: { id: user.id }}" class="float-right no-underline text-blue-500 text-sm" v-if="user.id === $root.user.id">
					Edit
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Users',
		data() {
			return {
				users: []
			};
		},
		mounted() {
			axios.get('/data/users')
			.then((response) => {
				this.users = response.data;
			});
		}
	};
</script>
