import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Listen from '@/components/Listen'
import Buy from '@/components/Buy'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog'
import Bio from '@/components/Bio'
import Epk from '@/components/Epk'
import CreateBlogPost from '@/components/BlogCreator'
import Videos from '@/components/Videos'
import NotFoundPage from '@/components/NotFoundPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/listen',
            component: Listen
        },
        {
            path: '/buy',
            component: Buy
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/blog/create',
            component: CreateBlogPost
        },
        {
            path: '/bio',
            component: Bio
        },
        {   path: '/videos',
            component: Videos
        },
        {
            path: '/epk',
            component: Epk
        },
        {   path: '*',
            component: NotFoundPage
        },

    ]
})
