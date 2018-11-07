import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin'; 
import {Options} from "webpack";

let opti : Options.Optimization = {};

opti  = {
	minimizer: [
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: {
					drop_console: true,
					unsafe: true 
				},
				output: {comments: false},
			}
		})
	]
};

export {opti};