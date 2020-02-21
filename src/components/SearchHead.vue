<template>
	<div class="searchHead">
		<el-form
			:model="initConfig.model"
			:inline="initConfig.formConfig.inline"
			status-icon
			:ref="initConfig.formConfig.ref || 'ruleForm'"
			:label-width="initConfig.formConfig.labelWidth"
			class="demo-ruleForm"
		>
			<template v-for="(val, key) in initConfig.model">
				<el-form-item
					:key="key"
					:label="initConfig.formItems[key].config.label"
					:prop="key"
					:rules="initConfig.formItems[key].config.rules"
				>
					<el-input
						v-if="initConfig.formItems[key].type === 'input'"
						:type="initConfig.formItems[key].config.type"
						v-model="initConfig.model[key]"
						:placeholder="initConfig.formItems[key].config.placeholder"
						@change="searchItemChange($event, key)"
					></el-input>
					<el-select
						v-if="initConfig.formItems[key].type === 'select'"
						v-model="initConfig.model[key]"
						:placeholder="initConfig.formItems[key].config.placeholder"
						@change="searchItemChange($event, key)"
					>
						<el-option
							v-for="option in initConfig.formItems[key].config.selectOptions"
							:key="JSON.stringify(option)"
							:label="option.label"
							:value="option.value"
							:disabled="option.disabled"
						></el-option>
					</el-select>
					<el-date-picker
						v-if="initConfig.formItems[key].type === 'date'"
						:type="initConfig.formItems[key].config.type"
						v-model="initConfig.model[key]"
						:format="initConfig.formItems[key].config.format || 'yyyy-MM-dd'"
						:value-format="initConfig.formItems[key].config.valueFormat || 'yyyy-MM-dd'"
						:placeholder="initConfig.formItems[key].config.placeholder"
						@change="searchItemChange($event, key)"
					>
					</el-date-picker>
				</el-form-item>
			</template>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">搜索</el-button>
				<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
				<slot name="append"></slot>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
/**
 * searchHead components
 *
 * @params config {obj} 搜索配置
 * @params config.formConfig {obj} el-form配置
 * @params config.model {obj} el-form的model
 * @params config.formItems {obj} 各个el-form-item配置
 * @params config.formItems[key].config {obj} 每种输入框的独特配置
 *
 * search {function}  返回所有参数详情
 * searchItemChange {function} 返回变化项对应的值 return {[key]: value}
 */
import cloneDeep from 'lodash/cloneDeep';
export default {
	props: ['config'],
	data() {
		return {
			initConfig: {
				// model: {
				// 	name: '',
				// 	region: 'shanghai',
				// 	startDate: '2019-12-31',
				// 	phone: '',
				// },
				// formConfig: {
				// 	ref: 'ruleForm',
				// 	inline: true,
				// 	labelWidth: '100px',
				// 	statusIcon: true,
				// },
				// formItems: {
				// 	name: {
				// 		type: 'input',
				// 		config: {
				// 			type: 'text',
				// 			label: '酒店编号：',
				// 			placeholder: '请输入酒店编号',
				// 			rules: [
				// 				{ required: true, message: '请输入活动名称', trigger: 'blur' },
				// 				{
				// 					min: 3,
				// 					max: 5,
				// 					message: '长度在 3 到 5 个字符',
				// 					trigger: 'blur',
				// 				},
				// 			],
				// 		},
				// 	},
				// 	region: {
				// 		type: 'select',
				// 		config: {
				// 			label: '活动区域：',
				// 			placeholder: '请选择区域',
				// 			selectOptions: [
				// 				{
				// 					value: 'shanghai',
				// 					label: '上海',
				// 				},
				// 				{
				// 					value: 'beijing',
				// 					label: '北京',
				// 				},
				// 				{
				// 					value: 'tianjin',
				// 					label: '天津',
				// 					disabled: true,
				// 				},
				// 			],
				// 			rules: [
				// 				{ required: true, message: '请选择活动区域', trigger: 'change' },
				// 			],
				// 		},
				// 	},
				// 	startDate: {
				// 		type: 'date',
				// 		config: {
				// 			type: 'date',
				// 			label: '开始日期：',
				// 			valueFormat: 'yyyy-MM-dd',
				// 			placeholder: '请选择起始时间',
				// 			rules: [{ required: true, message: '请选择日期', trigger: 'change' }],
				// 		},
				// 	},
				// 	phone: {
				// 		type: 'input',
				// 		config: {
				// 			type: 'text',
				// 			label: '手机号：',
				// 			placeholder: '请输入手机号',
				// 			rules: [
				// 				{
				// 					validator: (rule, value, callback) => {
				// 						if (!value) {
				// 							return callback(new Error('手机号必填'));
				// 						}
				// 						setTimeout(() => {
				// 							if (value.length !== 11) {
				// 								callback(new Error('请输入正确的11位手机号'));
				// 							} else {
				// 								if (value[0] != 1) {
				// 									callback(new Error('手机号首位必须是1开头'));
				// 								} else {
				// 									callback();
				// 								}
				// 							}
				// 						}, 1000);
				// 					},
				// 					trigger: 'blur',
				// 				},
				// 			],
				// 		},
				// 	},
				// },
			},
		};
	},
	created() {
		this.initConfig = cloneDeep(this.config);
	},
	mounted() {},
	methods: {
		searchItemChange(val, key) {
			this.$emit('searchItemChange', { [key]: val });
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.$emit('search', this.initConfig.model);
				} else {
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
	},
};
</script>

<style>
.searchHead {
	background-color: gainsboro;
}
</style>
