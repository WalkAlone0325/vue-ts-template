export { }

declare module 'axios' {
  interface AxiosInstance<T = unknown> {
    code: number
    msg: string
    data?: T
    rows?: T
    total?: number
  }
}
