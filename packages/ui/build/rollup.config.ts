import jsx from 'acorn-jsx'
import path from 'path'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import * as postcssConfig from '../.postcssrc.json'

const globals = {
  react: 'React'
}

const extensions = ['.js', '.tsx', '.ts', '.json']

export default {
  input: './src/index.ts',
  output: {
    dir: 'dist',
    name: 'NeatUI',
    format: 'umd',
    globals: globals
  },
  external: Object.keys(globals),
  acornInjectPlugins: [jsx()],
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
