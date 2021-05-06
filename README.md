<blockquote align="center">
  <p>
    ⚠️
  </p>
  <p>
    <strong>EXPERIMENTAL</strong>
  </p>
  <p>
    You probably shouldn't use this unless you're me.
  </p>
</blockquote>

<h1 align="center">vite-plugin-stitches</h1>

<p align="center">
  <strong>
    A tiny helper to configure SSR for <a href="https://github.com/modulz/stitches">Stitches</a> in <a href="https://vitejs.dev">Vite</a> ✨
  </strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-stitches">
    <img alt="NPM Version" src="https://badgen.net/npm/v/vite-plugin-stitches" />
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-stitches">
    <img alt="Types Included" src="https://badgen.net/npm/types/vite-plugin-stitches" />
  </a>
  <a href="https://github.com/joe-bell/vite-plugin-stitches/blob/main/LICENSE">
    <img alt="Apache-2.0 License" src="https://badgen.net/github/license/joe-bell/vite-plugin-stitches" />
  </a>
  <a href="https://www.npmjs.com/package/vite-plugin-stitches">
    <img alt="NPM Downloads" src="https://badgen.net/npm/dm/vite-plugin-stitches" />
  </a>
  <a href="https://twitter.com/joebell_">
    <img alt="Follow @joebell_ on Twitter" src="https://img.shields.io/twitter/follow/joebell_.svg?style=social&label=Follow" />
  </a>
</p>

<br />

# Usage

1. Install the package via your favourite package manager:

   ```sh
   npm i vite-plugin-stitches
   ```

2. Export `getCssString` from you [Stitches config](https://stitches.dev/docs/installation#create-your-config-file)

   ```tsx
   // your-stitches-config
   import { createCss } from "@stitches/core";

   export const { getCssString } = createCss({
     // your config
   });
   ```

3. Import your `getCssString` into `vite.config.js` and add to `ViteStitches()`:

   > **Note**: in it's current iteration, `vite-plugin-stitches` doesn't transpile ts/esm files for you. You'll need to do this manually

   ```js
   import { getCssString } from "your-stitches-config";
   import ViteStitches from "vite-plugin-stitches";

   export default defineConfig({
     plugins: [ViteStitches({ getCssString })],
   });
   ```
