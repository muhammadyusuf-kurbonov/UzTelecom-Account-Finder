import './assets/main.css'
import './scss/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css'; //Optional default CSS

const app = createApp(App)

app.use(createPinia())
app.use(SimpleTypeahead)
app.mount('#app')
