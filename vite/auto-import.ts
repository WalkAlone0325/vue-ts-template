import AutoImport from 'unplugin-auto-import/vite'

export default () => {
  return AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    dts: 'src/types/auto-imports.d.ts',
    eslintrc: {
      enabled: true,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true
    },
    resolvers: [],
    vueTemplate: true
  })
}
