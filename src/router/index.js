import Vue from 'vue'
import VueRouter from 'vue-router'
import hello from '@/component/HelloWorld'
import scientific from '@/component/Scientific'

Vue.use(Router)

export default new Router({
    routes:[
        {path: '/', component: Hello},
        {path: '/scientific', component: Scientific}
    ]
})