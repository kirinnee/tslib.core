import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";

interface IPage {
	chunks: [string,string][];
	pages: Page[]
}

interface Page{
	template: string;
	output:string;
	chunks: string[];
	title: string;
}

export function ConvertToOption(p:Page) : HtmlWebpackPlugin.Options{
	let opts: HtmlWebpackPlugin.Options = {
		title: p.title || "Index",
		filename: p.output || "index.html",
		chunk: p.chunks || ["index"]
	};
	return opts;
}

export {IPage, Page};