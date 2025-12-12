import compression from 'vite-plugin-compression'

export default (env: Record<string, string>) => {
  const { VITE_BUILD_COMPRESS } = env

  if (VITE_BUILD_COMPRESS) {
    const compressList = VITE_BUILD_COMPRESS.split(',')
    if (compressList.includes('gzip')) {
      return compression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 10240,
        deleteOriginFile: false
      })
    }
    if (compressList.includes('brotli')) {
      return compression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 10240,
        deleteOriginFile: false
      })
    }
  }
}
