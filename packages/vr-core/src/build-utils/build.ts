import type {UserConfig, InlineConfig} from 'vite'
import {build as viteBuild} from 'vite'
import path from 'path'
import {sync} from 'rimraf'
import dts from 'vite-plugin-dts'

const WATCH = Boolean(process.env.WATCH)

export type ChangeConfigOptions = {
  packagePath: string
  watch?: boolean
  getDTS?: boolean
}

export function changeViteConfig(
  config: UserConfig,
  options: ChangeConfigOptions,
): InlineConfig {
  const {watch, packagePath, getDTS} = options

  const pathResolve = (..._path: string[]) =>
    path.resolve(packagePath, ..._path)

  if (!config.plugins) config.plugins = []

  if (getDTS) {
    config.plugins.push(
      dts({
        insertTypesEntry: true,
        tsconfigPath: pathResolve('./tsconfig.json'),
      }),
    )
  }

  if (watch && config.build) {
    config.build.watch = {
      include: pathResolve('./src/**/*'),
    }
  }
  return {
    ...config,
    configFile: false,
  }
}

export type ChangeConfigFn = (
  config: UserConfig,
  options: ChangeConfigOptions,
) => InlineConfig

export type BuildOptionsProps = {
  minifyConfig: UserConfig
  unMinifyConfig: UserConfig
  packagePath: string
  changeConfigFn?: ChangeConfigFn
}

export async function build(config: BuildOptionsProps) {
  const {
    minifyConfig,
    unMinifyConfig,
    packagePath,
    changeConfigFn = changeViteConfig,
  } = config

  const pathResolve = (..._path: string[]) =>
    path.resolve(packagePath, ..._path)

  // clear dist
  sync(pathResolve('./dist'))

  if (!WATCH) {
    await viteBuild(
      changeConfigFn(minifyConfig, {
        packagePath,
      }),
    )
  }

  await viteBuild(
    changeConfigFn(unMinifyConfig, {
      getDTS: true,
      packagePath,
      watch: WATCH,
    }),
  )
}
