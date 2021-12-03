import { defineConfig } from 'rollup'
import path from 'path'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import * as postcssConfig from '../.postcssrc.json'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
}

const extensions = ['.js', '.tsx', '.ts', '.json']

const outputDir = 'dist'

const getUmdOutputConfig = (env = 'development') => {
  const config = {
    name: 'NeatUI',
    format: 'umd',
    globals: globals
  }
  const dir = `${outputDir}/umd/`
  switch (env) {
    case 'production':
      config.file = `${dir}neat-ui.production.min.js`
      config.plugins = [terser()]
      break
    case 'development':
    default:
      config.file = `${dir}neat-ui.development.js`
      break
  }
  return config
}

const tsOutDir = process.env.BUNDLE_FORMAT === 'cjs' ? 'dist/node' : 'dist'

const config = defineConfig({
  input: './src/index.ts',
  external: Object.keys(globals),
  plugins: [
    nodeResolve({
      extensions
    }),
    postcss(postcssConfig)
  ]
})

switch (process.env.BUNDLE_FORMAT) {
  case 'umd':
    config.output = [
      getUmdOutputConfig('development'),
      getUmdOutputConfig('production')
    ]
    config.plugins.push(
      babel({
        extensions,
        babelHelpers: 'runtime',
        exclude: /node_modules/,
        configFile: path.resolve(__dirname, '../babel.config.json')
      })
    )
    break
  case 'esm':
  case 'cjs':
  default:
    config.output = {
      dir: tsOutDir,
      format: process.env.BUNDLE_FORMAT
    }
    config.plugins.push(
      typescript({
        outDir: tsOutDir
      }),
      commonjs({
        extensions,
        include: /node_modules/
      })
    )
    break
}

export default config
