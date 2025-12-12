import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import autoprefixer from 'autoprefixer'
import createPlugins from './vite'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    plugins: createPlugins(env, command === 'build'),
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_PORT),
      open: true,
      proxy: {
        [env.VITE_API_PROXY_PATH]: {
          target: env.VITE_API_PROXY_TARGET,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_API_PROXY_PATH}`), '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                atRule.remove()
              }
            }
          }
        ]
      }
    },
    // 预编译
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia', 'axios']
    }
  }
})
