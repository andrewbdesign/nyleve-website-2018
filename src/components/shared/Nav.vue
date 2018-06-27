<template>
    <div class="nav">
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
    </div>
</template>

<script>
    export default {
        methods: {
            signOut() {
                this.$store.dispatch('logout')
                this.$router.push('/')
                localStorage.clear();
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
            background: #fff;
            color: #000;
        }
    }

}
</style>
