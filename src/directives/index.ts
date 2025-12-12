import type { App } from 'vue'
import highlight from './highlight'

export default (app: App) => {
  app.directive('highlight', highlight)
}
