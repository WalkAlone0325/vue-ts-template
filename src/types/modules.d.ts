// import download from '@/hooks/useDownload'
import { parseTime } from '@/utils'

export { }

declare module 'vue' {
  export interface ComponentCustomProperties {
    // 全局方法挂载
    // $download: typeof download
    parseTime: typeof parseTime
  }
}
