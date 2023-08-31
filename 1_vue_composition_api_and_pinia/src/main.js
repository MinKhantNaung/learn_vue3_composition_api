import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import ComputedComponent from './components/ComputedComponent.vue'
import StyleBinding from './components/StyleBinding.vue'

const app = createApp(App)

app.use(router)

// components
app.component('ComputedComponent', ComputedComponent)
app.component('StyleBinding', StyleBinding)

app.mount('#app')
