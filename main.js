import Vue from 'vue'
import App from './App'
// import Viewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'
// Vue.use(Viewer)
// Viewer.setDefaults({
//   Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
// })

// import basics from './pages/basics/home.vue'
// Vue.component('basics',basics)

// import components from './pages/component/home.vue'
// Vue.component('components',components)

// import plugin from './pages/plugin/home.vue'
// Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

// 
import my from './pages/navPage/my.vue'
Vue.component('my',my)

import index from './pages/navPage/lostAndFoundHall.vue'
Vue.component('index',index)



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



