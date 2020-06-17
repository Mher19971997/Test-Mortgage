import Vue from 'vue'
import Router from 'vue-router'
import Informational from '../components/Informational'

import NotFound from '../components/NotFound'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect : 'ru',
        },
        {
            path : '/:lang',
            component:{
                render(c) {return c('router-view')}
            },
            children: [
                {
                    path: '/',
                    component: Informational
                },
                {
                    path: '*',
                    name: 'NotFound',
                    component: NotFound
                }
            ]
        }
    ]
})