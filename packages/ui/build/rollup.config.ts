import path from 'path'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import * as postcssConfig from '../.postcssrc.json'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
}

const extensions = ['.js', '.tsx', '.ts', '.json']

const outputDir = 'dist/umd'

export default {
  input: './src/index.ts',
  output: [
    {
      file: `${outputDir}/neat-ui.development.js`,
      name: 'NeatUI',
      format: 'umd',
      globals: globals
    },
    {
      file: `${outputDir}/neat-ui.production.min.js`,
      name: 'NeatUI',
      format: 'umd',
      globals: globals,
      plugins: [terser()]
    }
  ],
  external: Object.keys(globals),
  plugins: [
    nodeResolve({
      extensions
    }),
    babel({
      extensions,
      babelHelpers: 'runtime',
      exclude: /node_modules/,
      configFile: path.resolve(__dirname, '../babel.config.json')
    }),
    postcss(postcssConfig)
  ]
}
