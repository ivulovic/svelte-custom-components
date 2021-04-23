import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
const terser = require('rollup-plugin-terser').terser
import pkg from './package.json';


const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{
			file: pkg.main, 'format': 'umd', name, plugins: [
				terser(),
			]
		}
	],
	plugins: [
		svelte({
			customElement: true,
		}),
		resolve()
	]
}

/** SECOND WAY */


// const buildRoot = `dist`;// ${pkg.version}

// function toRollupConfig({ src, dest, name }) {
// 	return ({
// 		input: src,
// 		output: [
// 			{
// 				file: `${buildRoot}/${dest}/index.js`, 'format': 'umd', name, plugins: [
// 					terser(),
// 				]
// 			},
// 			// {
// 			// 	file: `${buildRoot}/${dest}/index.mjs`, 'format': 'es'
// 			// },
// 		],
// 		plugins: [
// 			svelte({
// 				customElement: true
// 			}),
// 			resolve(),
// 		]
// 	})
// };

// export default [
// 	toRollupConfig({
// 		src: 'src/components/component-name/index.svelte',
// 		dest: 'component-name',
// 		name: 'ComponentName',
// 	}),
// 	toRollupConfig({
// 		src: 'src/components/component-surname/index.svelte',
// 		dest: 'component-surname',
// 		name: 'ComponentSurname',
// 	}),
// ];