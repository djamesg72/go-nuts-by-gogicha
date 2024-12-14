import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'wolf-and-eggs',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      baseUrl: 'https://djamesg72.github.io/wolf-and-eggs/',
      serviceWorker: null // disable service workers,
    }
  ],
  globalStyle: 'src/globals/style.css',
  plugins: [
    sass()
  ],
};
