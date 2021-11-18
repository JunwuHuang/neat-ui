import jsx from 'acorn-jsx'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'

export default {
  input: './src/index.ts',
  output: {
    dir: 'dist',
    name: 'NeatUI',
    format: 'umd',
    globals: {
      react: 'React'
    }
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    nodeResolve({
      extensions: ['.js', '.tsx', '.ts']
    }),
    commonjs({
      ignoreGlobal: true,
      include: /node_modules/
    }),
    typescript(),
    postcss()
  ],
  external: ['react']
}
