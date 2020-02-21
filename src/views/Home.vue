<template>
	<div class="home">
		<SearchHead :config="config" @search="search" @searchItemChange="searchItemChange">
			<template v-slot:append>
				<el-button @click="download" type="">下载</el-button>
			</template>
		</SearchHead>
	</div>
</template>

<script>
// @ is an alias to /src
import SearchHead from '@/components/SearchHead.vue';
import config from './homeConfig';
export default {
	name: 'home',
	components: {
		SearchHead,
	},
	data() {
		return {
			config,
		};
	},
	methods: {
		download() {
			console.log(this.config);
		},
		search(params) {
			console.log('home-search', params);
		},
		searchItemChange(item) {
			console.log('searchItemChange', item);
		},
	},
};
</script>
