export default {
	model: {
		name: '',
		region: 'shanghai',
		startDate: '2019-12-31',
		phone: '',
	},
	formConfig: {
		ref: 'ruleForm',
		inline: true,
		labelWidth: '100px',
		statusIcon: true,
	},
	formItems: {
		name: {
			type: 'input',
			config: {
				type: 'text',
				label: '酒店编号：',
				placeholder: '请输入酒店编号',
				rules: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{
						min: 3,
						max: 5,
						message: '长度在 3 到 5 个字符',
						trigger: 'blur',
					},
				],
			},
		},
		region: {
			type: 'select',
			config: {
				label: '活动区域：',
				placeholder: '请选择区域',
				selectOptions: [
					{
						value: 'shanghai',
						label: '上海',
					},
					{
						value: 'beijing',
						label: '北京',
					},
					{
						value: 'tianjin',
						label: '天津',
						disabled: true,
					},
				],
				rules: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
			},
		},
		startDate: {
			type: 'date',
			config: {
				type: 'date',
				label: '开始日期：',
				valueFormat: 'yyyy-MM-dd',
				placeholder: '请选择起始时间',
				rules: [{ required: true, message: '请选择日期', trigger: 'change' }],
			},
		},
		phone: {
			type: 'input',
			config: {
				type: 'text',
				label: '手机号：',
				placeholder: '请输入手机号',
				rules: [
					{
						validator: (rule, value, callback) => {
							if (!value) {
								return callback(new Error('手机号必填'));
							}
							setTimeout(() => {
								if (value.length !== 11) {
									callback(new Error('请输入正确的11位手机号'));
								} else {
									if (value[0] != 1) {
										callback(new Error('手机号首位必须是1开头'));
									} else {
										callback();
									}
								}
							}, 1000);
						},
						trigger: 'blur',
					},
				],
			},
		},
	},
};
