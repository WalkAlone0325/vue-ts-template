import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import createAutoImport from './auto-import'
import createComponents from './components'
import createCompression from './compression'
import createUnocss from './unocss'
import type { PluginOption } from 'vite'

export default (viteEnv: Record<string, string>, isBuild = false): PluginOption[] => {
  // const vitePlugins = []
  return [
    vue(),
    vueJsx(),
    vueDevTools(),
    createAutoImport(),
    createComponents(),
    createCompression(viteEnv),
    createUnocss(),
  ]
}
