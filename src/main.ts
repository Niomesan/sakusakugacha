import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

createApp(App)
  .use(router)
  .use(VueViewer)
  .mount('#app')
