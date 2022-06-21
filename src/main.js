import { createApp } from 'vue'
import App from './App.vue'
// import $ from 'jquery'
import './components/bootstrap.min.css'
import './components/style.css'
import AOS from 'aos'



// createApp(App, {
//   //render: h => h(App),
//   mounted() {
//     AOS.init({ offset: 120, // offset (in px) from the original trigger point
//       // delay: 1000, // values from 0 to 3000, with step 50ms
//       once: true,})
//   },
// }).mount('#app')

export const app = createApp(App)
app.AOS = new AOS.init({ offset: 120, once: true });

app.use(AOS).mount('#app')