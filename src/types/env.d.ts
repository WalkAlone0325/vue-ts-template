/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const Component: DefineComponent<{}, {}, any>
  export default Component
}

declare interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_CONTEXT_PATH: string
  readonly VITE_PORT: string
  readonly VITE_API_PROXY_PATH: string
  readonly VITE_API_PROXY_TARGET: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
