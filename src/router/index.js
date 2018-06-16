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
import ComingSoon from '@/components/ComingSoon'
import NotFoundPage from '@/components/NotFoundPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/listen',
            name: 'Listen',
            component: Listen
        },
        {
            path: '/buy',
            name: 'Buy',
            component: Buy
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/blog/create',
            name: 'Create',
            component: CreateBlogPost
        },
        {
            path: '/bio',
            name: 'Bio',
            component: Bio
        },
        {
            path: '/epk',
            name: 'EPK',
            component: Epk
        },
        {   path: '*',
            name: '404 Page',
            component: NotFoundPage
        }
    ]
})
