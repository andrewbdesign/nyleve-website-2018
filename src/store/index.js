import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase'

Vue.use(Vuex);
// Details
// me@nyleve.com
// nyleve1234

export const store = new Vuex.Store({
    state: {
        blogs: [],
        videos: [],
        works: [],
        bio: {body: ''},
        // 5. Buy
        albums: [
            {
                title: 'An Empty Space Between',
                image: 'http://via.placeholder.com/350x350',
                url: 'https://www.google.com/',
                tracks: [
                    {track: 'As It So Happens'},
                    {track: 'An Empty Space Between'},
                    {track: 'Lately & Afterwards'},
                    {track: 'Again & Again'},
                    {track: 'Lindfield'},
                    {track: 'And So On'}
                ]
            }
        ],
        // 6. EPK
        epk: {
            title: 'EPK',
            coverImage: 'http://via.placeholder.com/350x350',
            lowRes: 'http://via.placeholder.com/300x300',
            highRes: 'http://via.placeholder.com/600x600',
            showcaseAlbum: {
                title: 'An Empty Space Between (EP) 2018',
                description: 'Singer-Songwriter, Alternative, Art-rock, Electronic, Folk',
                image: 'http://via.placeholder.com/350x350',
                tracks: [
                    {track: 'As It So Happens'},
                    {track: 'An Empty Space Between'},
                    {track: 'Lately & Afterwards'},
                    {track: 'Again & Again'},
                    {track: 'Lindfield'},
                    {track: 'And So On'}
                ]
            },
            iframeSongs: 'https://open.spotify.com/embed/album/0gSmTwEd1wJS1v1lbFWZDv',
            facebook: 'https://www.facebook.com/nylevemusic/',
            soundcloud: 'https://soundcloud.com/nylevemusic/sets/an-empty-space-between/s-C7uUO',
        },
        user: null
    },
    mutations: {
        createPost(state, payload) {
            state.blogs.push(payload)
        },
        setUser(state, payload) {
            state.user = payload
        },
        setLoadedPosts(state, payload) {
            state.blogs = payload
        },
        addVideo(state, payload) {
            state.videos.push(payload)
        },
        setLoadedVideos(state, payload) {
            state.videos = payload
        },
        addSong(state, payload) {
            state.works.push(payload)
        },
        setLoadedSongs(state, payload) {
            state.works = payload
        },
        updateBio(state, payload) {
            state.bio.body = payload
        }
    },
    actions: {
        loadBio({commit}) {
            firebase.database().ref('bio').once('value')
                .then(data => {
                    const obj = data.val()
                    const bioIs = obj.body
                    commit('updateBio', bioIs)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        updateBio({commit}, payload) {
            firebase.database().ref('bio').set({ body: payload.body })
                .then(() => {
                    let bodyObj = {
                        body: payload.body
                    }
                    commit('updateBio', bodyObj.body)
                })
        },
        loadPosts({commit}) {
            firebase.database().ref('blogs').once('value')
                .then(data => {
                    const blogPosts = []
                    const obj = data.val()
                    for(let key in obj) {
                        blogPosts.push({
                            id: key,
                            title: obj[key].title,
                            date: obj[key].date,
                            copy: obj[key].copy,
                            image: obj[key].image
                        })
                    }
                    commit('setLoadedPosts', blogPosts)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        createPost({commit}, payload) {
            const newPost = {
                title: payload.title,
                date: payload.date,
                copy: payload.copy,
                image: payload.image,
            }
            let imageUrl
            let key
            let hasNoImage = payload.image !== null
            firebase.database().ref('blogs').push(newPost)
                .then(data => {
                    key = data.key
                    return key
                })
                .then(key => {
                    if (!hasNoImage) {
                        return key
                    }
                    const filename = payload.image.name
                    const ext = filename.slice(filename.lastIndexOf('.'))
                    return firebase.storage().ref('blogs/' + key + '.' + ext).put(payload.image)
                })
                .then(fileData => {
                    if (!hasNoImage) {
                        return key
                    }
                    imageUrl = fileData.metadata.downloadURLs[0]
                    return firebase.database().ref('blogs').child(key).update({image: imageUrl})
                })
                .then(() => {
                    let newObj
                    if (!hasNoImage) {
                        newObj = {
                            ...newPost,
                            image: '',
                            id: key
                        }
                    } else {
                        newObj = {
                            ...newPost,
                            image: imageUrl,
                            id: key
                        }
                    }
                    commit('createPost', newObj)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadVideos({commit}) {
            firebase.database().ref('videos').once('value')
                .then(data => {
                    const videoList = []
                    const obj = data.val()
                    for(let key in obj) {
                        videoList.push({
                            id: key,
                            url: obj[key].url
                        })
                    }
                    commit('setLoadedVideos', videoList)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        addVideo({commit}, payload) {
            let videoObj = {
                url: payload.url
            }
            let key
            firebase.database().ref('videos').push(videoObj)
                .then(data => {
                    key = data.key
                    return key
                })
                .then(data => {
                    let newObj = {
                        ...videoObj,
                        id: key
                    }
                    commit('addVideo', newObj)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadSongs({commit}) {
            firebase.database().ref('works').once('value')
                .then(data => {
                    const songList = []
                    const obj = data.val()
                    for(let key in obj) {
                        songList.push({
                            id: key,
                            url: obj[key].url,
                            title: obj[key].title,
                        })
                    }
                    commit('setLoadedSongs', songList)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        addSong({commit}, payload) {
            let songObj = {
                url: payload.url,
                title: payload.title
            }
            let key
            firebase.database().ref('works').push(songObj)
                .then(data => {
                    key = data.key
                    return key
                })
                .then(data => {
                    let newObj = {
                        ...songObj,
                        id: key
                    }
                    commit('addSong', newObj)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        signUserIn({commit}, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    const newUser = {
                        id: user.uid
                    }
                    commit('setUser', newUser)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        logout({commit}) {
            firebase.auth().signOut()
            commit('setUser', null)
            console.log('Successfully logged out')
        }
        
    },
    getters: {
        blogs(state) {
            return state.blogs
        },
        videos(state) {
            return state.videos
        },
        works(state) {
            return state.works
        },
        albums(state) {
            return state.albums
        },
        bio(state) {
            return state.bio.body
        },
        epk(state) {
            return state.epk
        }, 
        user(state) {
            return state.user
        }
    }
})

