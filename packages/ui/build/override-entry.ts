import { readFileSync, writeFileSync } from 'fs'
import { resolve, basename, extname } from 'path'
import * as yargs from 'yargs'
import * as packageInfo from '../package.json'

const CURRENT_FILENAME = basename(__filename, extname(__filename))

const MAIN_FIELD_MAP = {
  development: 'src/index.ts',
  production: 'dist/index.js'
}

const describe = `Valid env: "${Object.keys(MAIN_FIELD_MAP).join('" | "')}"`

yargs
  .scriptName(CURRENT_FILENAME)
  .command({
    command: '$0 [env]',
    describe: '根据环境重写package.json的main字段',
    builder(cmd) {
      return cmd.option('env', {
        type: 'string',
        default: 'development',
        describe
      })
    },
    handler({ env }) {
      if (typeof env !== 'string') {
        throw new TypeError(describe)
      }

      let field = MAIN_FIELD_MAP.development

      if (env in MAIN_FIELD_MAP) {
        field = MAIN_FIELD_MAP[<keyof typeof MAIN_FIELD_MAP>env]
      }

      const packageJsonPath = resolve(__dirname, '../package.json')

      const packageJson = readFileSync(packageJsonPath, 'utf8')

      const buildPackage = packageJson.replace(packageInfo.main, field)

      writeFileSync(packageJsonPath, buildPackage)
    }
  })
  .version(false)
  .help()
  .strict(true)
  .parse()
