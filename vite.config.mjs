// Use ESM syntax to avoid CJS deprecation warning
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: true,
              meaninglessFileNames: ['index', 'styles'],
              pure: true,
              // This makes class names more readable in development
              // Example: ComponentName__StyledElement instead of sc-bdVaJa bDWbJq
              classNamePrefix: process.env.NODE_ENV !== 'production' ? '' : 'sc-'
            }
          ]
        ]
      }
    })
  ],
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
  },
  server: {
    open: true
  },
  esbuild: {
    loader: 'jsx',
    include: /\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
