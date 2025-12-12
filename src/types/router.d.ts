import type { RouteMeta as VRouteMeta } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta extends VRouteMeta {
    title?: string
    icon?: string
    link?: string
  }

  interface _RouteRecordBase {
    hidden?: boolean
    query?: Record<string, any>
  }

  interface _RouteRecordBase {
    children?: RouteRecordRaw[],
    path?: string
    title?: string
  }

  interface TagView {
    fullPath?: string
    name?: string
    path?: string
    title?: string
    meta?: RouteMeta
    query?: LocationQuery
  }
}

export { }
