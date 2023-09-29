import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import ComputedComponent from './components/ComputedComponent.vue'
import StyleBinding from './components/StyleBinding.vue'
import ConditionalRender from './components/ConditionalRender.vue'

const app = createApp(App)

app.use(router)

// v-focus in main globally
app.directive('focus', {
    mounted(el, binding, vNode, prevNode) {
        console.log(binding)
        el.style.color = 'yellow'
    }
})

// injecting props form app
app.provide('main', 'Main value from app')

// components
app.component('ComputedComponent', ComputedComponent)
app.component('StyleBinding', StyleBinding)
app.component('ConditionalRender', ConditionalRender)

app.mount('#app')
