import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import postcssmodules from 'postcss-modules';


// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/'
    }
  ]

  plugins: [
    sass(),
    postcss({
      plugins: [
        postcssmodules({
          camelCase: true,
          generateScopedName: '[name]_[local]__[hash:base64:5]',
        }),
      ],
    }),
  ]
};
