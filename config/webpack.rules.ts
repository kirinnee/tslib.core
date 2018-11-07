import {RuleSetRule, RuleSetUseItem} from "webpack";



/*===================
  TS LOADER
 ===================== */

let uses: RuleSetUseItem[] = [
	{loader: 'ts-loader'}
];

let scripts: RuleSetRule = {
	test: /\.tsx?$/,
	exclude: /(node_modules|bower_components)/,
	use: uses
};

let rules: RuleSetRule[] = [
	scripts,
];

export {rules};
