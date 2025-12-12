import type { App } from 'vue'
import { parseTime } from '@/utils'

export default (app?: App) => {
  if (app) {
    app.config.globalProperties.parseTime = parseTime
  }

  return { parseTime }
}
