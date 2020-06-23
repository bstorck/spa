<template>
	<div class="bg-white border border-2 rounded shadow-md">
		<div class="font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0">
			{{ title }}
		</div>
		<form @submit.prevent="updateUser()" class="w-full flex flex-wrap p-6">
			<div class="w-1/2 pr-5 ">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label> <input autofocus="autofocus" class="form-input w-full" id="name" v-model="user.name">
			</div>
			<div class="w-1/2 pr-5 ">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label> <input autofocus="autofocus" class="form-input w-full" id="email" v-model="user.email">
			</div>
			<div class="flex-shrink mr-6">
				<button class="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
					Update
				</button>
			</div>
		</form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				user: {},
				title: null
			};
		},
		mounted() {
			axios.get('/data/user/' + this.$route.params.id).then((response) => {
				this.setUser(response.data);
			});
		},
		methods: {
			updateUser() {
				axios.post('/data/user/' + this.$route.params.id, this.user).then((response) => {
					this.setUser(response.data);
					this.$nextTick(() => {
						this.$root.user = _.cloneDeep(response.data);
					});
				});
			},
			setUser(user) {
				this.user = user;
				this.setTitle(user);
			},
			setTitle(user) {
				this.title = `${user.name} ${user.email}`;
			}
		}
	};
</script>