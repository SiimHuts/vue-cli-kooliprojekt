import Vue from 'vue'
import Router from 'vue-router'
import todo from '../../todo/todo'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'todo',
            component: todo
        }
    ]
})
