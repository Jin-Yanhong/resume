const path = require('path');
const { defineConfig } = require('@vue/cli-service');

function resolve(dir) {
	return path.join(__dirname, dir);
}

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
	configureWebpack: {
		devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
		performance: {
			hints: false,
		},
		optimization: {
			splitChunks: {
				minSize: 102400,
				maxSize: 2097152,
			},
		},
		resolve: {
			alias: {
				'@': resolve('/src'),
			},
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
