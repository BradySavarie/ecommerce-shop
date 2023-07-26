/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@mui/styled-engine': resolve(
        __dirname,
        'node_modules/@mui/styled-engine-sc'
      ),
    },
  },
  base: '/ecommerce-shop/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
