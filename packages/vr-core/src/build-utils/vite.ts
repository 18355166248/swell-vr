import type {UserConfig} from 'vite'
import path from 'path'

export type CreateViteConfigProps = {
  packagePath: string // 执行打包命令的文件路径
  minify?: boolean
}

export const createViteConfig = ({
  packagePath,
  minify,
}: CreateViteConfigProps): UserConfig => {
  const pathResolve = (..._path: string[]) =>
    path.resolve(packagePath, ..._path)

  const pkg = require(pathResolve('./package.json')) as Record<
    string,
    string | object
  >
  const {name: pkgName} = pkg
  console.log('🚀 ~ file: vite.ts:20 ~ pkg:', pkg)

  return {
    root: pathResolve('./'),
    build: {
      outDir: pathResolve('./dist'),
      lib: {
        entry: pathResolve('src/index.ts'),
      },
      rollupOptions: {
        output: {
          chunkFileNames: () => {
            return '[format]/[name].[format].js'
          },
        },
      },
      sourcemap: true,
      minify,
    },
  }
}
