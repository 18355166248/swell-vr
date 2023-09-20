import type {UserConfig, InlineConfig} from 'vite'
import {build as viteBuild} from 'vite'
import path from 'path'
import {sync} from 'rimraf'

const WATCH = Boolean(process.env.WATCH)

export type ChangeConfigOptions = {
  packagePath: string
  watch?: boolean
}

export function changeViteConfig(
  config: UserConfig,
  options: ChangeConfigOptions,
): InlineConfig {
  const {watch, packagePath} = options

  const pathResolve = (..._path: string[]) =>
    path.resolve(packagePath, ..._path)

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
      packagePath,
      watch: WATCH,
    }),
  )
}
