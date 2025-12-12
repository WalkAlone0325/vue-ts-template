import '@/assets/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

// Import global directives
import registerDirectives from './directives'
import registerHooks from './hooks'

const app = createApp(App)

app.use(router)
app.use(store)

registerDirectives(app)
registerHooks(app)

app.mount('#app')
