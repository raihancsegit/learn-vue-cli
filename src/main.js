import Vue from 'vue'
import App from './App.vue'
//import Student from './Student.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './router'



Vue.use(VueRouter)


const router = new VueRouter({
    routes: Routes,
    mode:'history'
});

Vue.use(VueResource)
new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})
