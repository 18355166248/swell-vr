import type {UserConfig, LibraryFormats} from 'vite'
import path from 'path'

export type CreateViteConfigProps = {
  packagePath: string // 执行打包命令的文件路径
  minify?: boolean
  formats?: LibraryFormats[]
  externalMap?: Record<string, string>
  dedupe?: string[]
}

export const pascalCase = (str: string) =>
  str
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')

export const createViteConfig = ({
  packagePath,
  minify,
  formats = ['cjs', 'es', 'umd', 'iife'],
  externalMap = {},
  dedupe = [],
}: CreateViteConfigProps): UserConfig => {
  const pathResolve = (..._path: string[]) =>
    path.resolve(packagePath, ..._path)

  const pkg = require(pathResolve('./package.json')) as Record<
    string,
    string | object
  >
  const {name} = pkg
  const pkgName = name as string

  return {
    root: pathResolve('./'),
    build: {
      outDir: pathResolve('./dist'),
      lib: {
        entry: pathResolve('src/index.ts'),
        name: pascalCase(pkgName.split('/').pop() as string),
        formats,
      },
      rollupOptions: {
        output: {
          globals: externalMap,
          chunkFileNames: () => {
            return '[format]/[name].[format].js'
          },
        },
        external: Object.keys(externalMap),
      },
      sourcemap: true,
      minify,
    },
    resolve: {
      dedupe,
    },
  }
}
