import {buildUtils} from '@swellvr/vr-core'
import {defineConfig} from 'vite'
import type {UserConfig} from 'vite'

export const pkgPath = __dirname

type CreateViteConfigProps = {
  minify?: boolean
}

const createViteConfig = (option: CreateViteConfigProps = {}): UserConfig => {
  const {minify} = option

  return buildUtils.createViteConfig({
    packagePath: pkgPath,
    minify,
  })
}

export const minifyConfig = createViteConfig({minify: true})
export const unMinifyConfig = createViteConfig({minify: false})

export default defineConfig(unMinifyConfig)
