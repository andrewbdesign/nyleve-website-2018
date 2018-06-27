<template lang="html">
  <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half main-section">
                <h1>Sign In</h1>
                <form id="form" @submit.prevent="signIn">
                    <label for="email">Email</label>
                    <input id="email" type="text" v-model="userDetail.email">
                    
                    <label for="password">Password</label>
                    <input id="password" type="password" v-model="userDetail.password">
                    
                    <input type="submit" class="button login-btn" :disabled="!formIsValid" value="Log in">
                </form>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    computed: {
        formIsValid() {
            return this.userDetail.email !== '' && this.userDetail.password !== ''
        },
        user() {
            return this.$store.getters.user
        }
    },
    data() {
        return {
            userDetail: {
                email: '',
                password: ''
            }
        }
    },
    watch: {
        user(value) {
            if (value !== null && value !== undefined) {
                this.$router.push('/blog')
            }
        }
    },
    methods: {
        signIn() {
            const loginObj = {
                email: this.userDetail.email,
                password: this.userDetail.password
            }
            console.log('login object', loginObj)
            this.$store.dispatch('signUserIn', loginObj)
            
        }
    }
}
// email: nyleve@music.com 
// pw: firedragon
</script>

<style lang="scss" scoped>
input, textarea {
    width: 100%;
    margin-bottom: 30px;
}
.login-btn {
    width: initial;
    line-height: 0;
}
</style>
