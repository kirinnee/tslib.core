import * as path from "path";
import {opti} from "./webpack.optimizer";
import webpack from "webpack";
import {rules} from "./webpack.rules";
import {Entry} from "webpack";
import {Kore} from "@kirinnee/core";

let core = new Kore();
core.ExtendPrimitives();

let entry:Entry = {
    index: "./src/index.ts"
};


function GenerateConfig(entry: Entry, filename: string, mode: "development"|"production"|"none", target: string, index: boolean) : webpack.Configuration {
    let outDir = path.resolve(__dirname, index ? "../" : "../dist");
    let config : webpack.Configuration = {
        entry: entry,
        output: {
            path: outDir,
            filename: filename,
            libraryTarget: "umd",
            globalObject: "(typeof window !== 'undefined' ? window : this)"
        },
	    resolve: {
		    extensions: ['.ts', '.tsx', '.js']
	    },
        mode: mode,
        devtool: "source-map", 
        module: {rules: rules}
    };
    if (target === "node") {
        config.target = "node";
        config.node = {__dirname: false, __filename: false};
    }
    if (target === "web") config.target = "web";
    if (mode === "production") config.optimization = opti;

    return config;
}

let target;
target = "node"; 

module.exports = [
    GenerateConfig(entry, '[name].min.js', 'production', target, false),
    GenerateConfig(entry, '[name].js', 'development', target, false),
    GenerateConfig(entry, 'index.js', 'production', target, true)
];