import { UserConfig } from 'vite';

type CreateViteConfigProps = {
    packagePath: string;
    minify?: boolean;
};
declare const createViteConfig: ({ packagePath, minify, }: CreateViteConfigProps) => UserConfig;

type index_CreateViteConfigProps = CreateViteConfigProps;
declare const index_createViteConfig: typeof createViteConfig;
declare namespace index {
  export { type index_CreateViteConfigProps as CreateViteConfigProps, index_createViteConfig as createViteConfig };
}

export { index as buildUtils };
