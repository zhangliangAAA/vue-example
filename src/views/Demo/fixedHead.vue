<template>
	<div class="scrollFixed">
		<SearchForm :formOptions="formOptions" @onSearch="onSearch"></SearchForm>
	</div>
</template>

<script>
import SearchForm from '@/components/SearchForm/index.vue';

export default {
	data: function() {
		const self = this;
		return {
			formOptions: [
				{
					label: '意见内容',
					prop: 'content',
					element: 'el-input',
					initValue: '初始值',
					placeholder: '请输入您的意见',
					maxlength: 4,
					size: 'medium',
					events: {
						change(val) {
							console.log('change--', val);
							self.changeV(val);
						},
						blur(val) {
							console.log('blur--', val);
							self.changeV(val);
						},
					},
				},
				{
					label: '类型',
					prop: 'type',
					element: 'el-select',
					options: [
						{ label: '给点意见', value: '1' },
						{ label: '售后问题', value: '2' },
					],
				},
				{
					label: '状态',
					prop: 'status',
					element: 'el-select',
					options: [],
				},
				{
					label: '提交时间',
					prop: 'timeRange',
					type: 'daterange',
					element: 'el-date-picker',
				},
			],
		};
	},
	components: {
		SearchForm,
	},
	mounted() {
		setTimeout(() => {
			this.formOptions[2].options = [
				{ label: '给点回到', value: '1' },
				{ label: '售后问题订单', value: '2' },
			];
		}, 3000);
	},
	methods: {
		onSearch(val) {
			console.log(val);
		},
		changeV(val) {
			console.log('methods-changeV', val);
		},
	},
};
</script>

<style scoped lang="scss"></style>
