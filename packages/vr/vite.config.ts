import {buildUtils} from '@swellvr/vr-core'
import {defineConfig} from 'vite'
import type {UserConfig} from 'vite'

const pkgPath = __dirname

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

const unMinifyConfig = createViteConfig({minify: false})

export default defineConfig(unMinifyConfig)
