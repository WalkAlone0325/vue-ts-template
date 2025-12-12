import Components from 'unplugin-vue-components/vite'
// import { } from 'unplugin-vue-components/resolvers'

export default () => {
  return Components({
    resolvers: [],
    dts: 'src/types/components.d.ts'
  })
}
