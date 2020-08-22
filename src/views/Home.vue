<template>
	<div class="home">
		<SearchHead :config="config" @search="search" @searchItemChange="searchItemChange">
			<template v-slot:append>
				<el-button @click="download" type="">下载</el-button>
			</template>
		</SearchHead>
		<!-- <vue-qr text="Hello world!" :callback="test" qid="testid"></vue-qr>
		<a :href="dataUrl" download>下载二维码</a>
		<img :src="dataUrl" /> -->
		<el-button>按钮cookie</el-button>
	</div>
</template>

<script>
// @ is an alias to /src
import VueQr from 'vue-qr';
import SearchHead from '@/components/SearchHead.vue';
import config from './homeConfig';
export default {
	name: 'home',
	components: {
		SearchHead,
		VueQr,
	},
	data() {
		return {
			config,
			dataUrl: '',
		};
	},
	methods: {
		test(dataUrl) {
			console.log(dataUrl);
			this.dataUrl = dataUrl;
		},
		downloadQr() {},
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
