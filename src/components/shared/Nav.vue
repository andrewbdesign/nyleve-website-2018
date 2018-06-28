<template>
    <div class="nav">
        <div class="button menu" @click="toggleMenu">
            <span v-if="menu"><img src="./../../../static/close.svg"></span>
            <span v-if="!menu"><img src="./../../../static/menu.svg"></span>
        </div>

        <div class="menu-container">
            <router-link to="/blog">NYLEVE</router-link>
            <router-link to="/blog">News / Blog</router-link>
            <router-link to="/bio">Bio</router-link>
            <router-link to="/tours">Tours</router-link>
            <router-link to="/listen">Listen</router-link>
            <router-link to="/videos">Videos</router-link>
            <a href="https://nyleve.bandcamp.com/" target="_blank">Buy</a>
            <router-link to="/contact">Contact</router-link>
            
            <!-- USER LOGIN -->
            <template v-if="userIsAuthenticated">
                <hr>
                <p>Welcome</p>
                <router-link to="/blog/create">Create Post</router-link>
                <router-link to="/epk">Edit EPK</router-link>
                <button class="button" @click="signOut">Sign out</button>
            </template>

        </div>

        <div class="menu-container mobile-menu" :class="{ active: menu }">
            <span @click="blogBtn">NYLEVE</span>
            <span @click="blogBtn">News / Blog</span>
            <span @click="bioBtn">Bio</span>
            <span @click="toursBtn">Tours</span>
            <span @click="listenBtn">Listen</span>
            <span @click="videosBtn">Videos</span>
            <a href="https://nyleve.bandcamp.com/" target="_blank">Buy</a>
            <span @click="contactBtn">Contact</span>
            
            <!-- USER LOGIN -->
            <template v-if="userIsAuthenticated">
                <hr>
                <p>Welcome</p>
                <span @click="createBtn">Create Post</span>
                <span @click="epkBtn">Edit EPK</span>
                <button class="button" @click="signOut">Sign out</button>
            </template>

        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            signOut() {
                this.$store.dispatch('logout')
                this.$router.push('/')
                localStorage.clear();
            },
            toggleMenu() {
                this.menu = !this.menu
                this.menu ? document.querySelector('.mobile-menu').style.opacity = '1' : document.querySelector('.mobile-menu').style.opacity = '0'
            },
            blogBtn() {
                this.menu = !this.menu
                this.menu ? document.querySelector('.mobile-menu').style.opacity = '1' : document.querySelector('.mobile-menu').style.opacity = '0'
                this.$router.push('/blog')
            },
            bioBtn() {
                this.menu = !this.menu
                this.menu ? document.querySelector('.mobile-menu').style.opacity = '1' : document.querySelector('.mobile-menu').style.opacity = '0'
                this.$router.push('/bio')
            },
            toursBtn() {
                this.menu = !this.menu
                this.menu ? document.querySelector('.mobile-menu').style.opacity = '1' : document.querySelector('.mobile-menu').style.opacity = '0'
                this.$router.push('/tours')
            },
            listenBtn() {
                this.menu = !this.menu
                this.menu ? document.querySelector('.mobile-menu').style.opacity = '1' : document.querySelector('.mobile-menu').style.opacity = '0'
                this.$router.push('/listen')
            },
            videosBtn() {
                this.menu = !this.menu
                this.menu ? document.querySelector('.mobile-menu').style.opacity = '1' : document.querySelector('.mobile-menu').style.opacity = '0'
                this.$router.push('/videos')
            },
            contactBtn() {
                this.menu = !this.menu
                this.menu ? document.querySelector('.mobile-menu').style.opacity = '1' : document.querySelector('.mobile-menu').style.opacity = '0'
                this.$router.push('/contact')
            },
            epkBtn() {
                this.menu = !this.menu
                this.menu ? document.querySelector('.mobile-menu').style.opacity = '1' : document.querySelector('.mobile-menu').style.opacity = '0'
                this.$router.push('/epk')
            },
            createBtn() {
                this.menu = !this.menu
                this.menu ? document.querySelector('.mobile-menu').style.opacity = '1' : document.querySelector('.mobile-menu').style.opacity = '0'
                this.$router.push('/blog/create')
            }
        },
        data() {
            return {
                menu: false
            }
        },
        computed: {
            userIsAuthenticated() {
                return this.$store.getters.user !== null && this.$store.getters.user !== undefined
            }
        }
    }
</script>

<style lang="scss">
.main-container {
    padding-top: 70px;
}
.nav {
    .menu-container {
        position: fixed;
        :first-child {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 18px;
        }
        p {
            color: #fff;
            font-weight: bold;
        }
        a {
            font-weight: normal;
            color: #fff;
            display: block;
            text-decoration: none;
            font-size: .9em;
            margin-bottom: 11px;
        }
    }
    .button {
        background: transparent;
        color: #fff;
        border-radius: 0;
        font-size: 12px;
        &:hover {
            // background: #fff;
            // color: #000;
        }
    }


}

.mobile-menu {
    opacity: 0;
    color: #fff;
    pointer-events: none;
    display: none;
    span, a {
        cursor: pointer;
        display: block;
        padding: 10px;
        margin: 0;
    }
}

.menu {
    opacity: 0;
    position: fixed;
    top: 18px;
    left: 20px;
    z-index: 300;
    width: 40px;
    height: 40px;
    img {
        width: 50px;
        height: 50px;
    }
}
</style>
