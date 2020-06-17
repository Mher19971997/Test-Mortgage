import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import Header from './layout/Header'

import i18n from './i18n'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('app-header', Header);

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
    let language = to.params.lang;
    if(!language){
        language = 'ru'
    }
    i18n.locale = language
    next()
})

new Vue({
    store,
    el: '#app',
    router,
    template: '<App/>',
    i18n,
    render: h => h(App)
})