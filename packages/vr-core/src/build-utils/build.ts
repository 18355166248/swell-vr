import type {UserConfig} from 'vite'
import {build as viteBuild} from 'vite'
import path from 'path'
import rimraf from 'rimraf'
import {InlineConfig} from 'vitest'

const WATCH = Boolean(process.env.WATCH)

export type ChangeConfigFn = (config: UserConfig) => InlineConfig

export type BuildOptionsProps = {
  minifyConfig: UserConfig
  unMinifyConfig: UserConfig
  packagePath: string
  changeConfigFn?: ChangeConfigFn
}

export async function build(config: BuildOptionsProps) {
  const {minifyConfig, unMinifyConfig, packagePath} = config

  const pathResolve = (..._path: string[]) =>
    path.resolve(packagePath, ..._path)

  // clear dist
  rimraf.sync(pathResolve('./dist/**/*'))

  if (!WATCH) {
    await viteBuild(change)
  }
}
