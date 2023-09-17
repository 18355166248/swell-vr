import n from"path";

// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const s=({packagePath:e,minify:o})=>{const t=(...r)=>n.resolve(e,...r),i=require(t("./package.json"));return console.log("\u{1F680} ~ file: vite.ts:20 ~ pkg:",i),{root:t("./"),build:{outDir:t("./dist"),lib:{entry:t("src/index.ts")},rollupOptions:{output:{chunkFileNames:()=>"[format]/[name].[format].js"}},sourcemap:!0,minify:o}}},a={__proto__:null,createViteConfig:s};export{a as buildUtils};
