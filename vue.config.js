const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	publicPath: process.env.VUE_APP_PUBLIC_PATH,
	devServer: {
		open: true,
		port: 8090,
		client: {
			overlay: false,
		},
	},
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = process.env.VUE_APP_APP_NAME;
			return args;
		});
		config.plugin('define').tap(definitions => {
			Object.assign(definitions[0], {
				__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
			});
			return definitions;
		});
	},
});
