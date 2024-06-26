import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        svgProps: {
          className: 'icon'
        },
        prettier: false,
        dimensions: false
      }
    }),
    monacoEditorPlugin({})
  ],
  server: {
    host: '0.0.0.0',
    cors: true,
    port: 8910,
    proxy: {
      ['/admin-api']: {
        target: 'http://122.51.179.83:9000',
        ws: false,
        changeOrigin: true,
        rewrite: path => path.replace(new RegExp(`^/`), '')
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
