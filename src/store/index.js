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
        tours: [],
        epk: {
            iframeSongs: '',
            lowRes: '',
            highRes: '',
            title: '', 
            description: '',
            tracks: '',
            facebook: '',
            soundcloud: '',
            coverImage: '',
            itunes: '',
            image: '',
            video1: '', //'https://www.youtube.com/embed/k8iAfhmbbRQ',
            video2: '' // 'https://www.youtube.com/embed/mwWzgh2TXH0'
        },
        user: null,
        epkLoaded: null
    },
    mutations: {
        epkLoaded(state, payload) {
            state.epkLoaded = payload
        },
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
        addTour(state, payload) {
            state.tours.push(payload)
        },
        setLoadedTours(state, payload) {
            state.tours = payload
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
        },
        updateEpk(state, payload) {
            if (payload.iframeSongs) {
                state.epk.iframeSongs = payload.iframeSongs
            }
            if (payload.lowRes) {
                state.epk.lowRes = payload.lowRes
            }
            if (payload.highRes) {
                state.epk.highRes = payload.highRes
            }
            if (payload.title) {
                state.epk.title = payload.title
            }
            if (payload.description) {
                state.epk.description = payload.description
            }
            if (payload.tracks) {
                state.epk.tracks = payload.tracks
            }
            if (payload.facebook) {
                state.epk.facebook = payload.facebook
            }
            if (payload.soundcloud) {
                state.epk.soundcloud = payload.soundcloud
            }
            if (payload.bandcamp) {
                state.epk.bandcamp = payload.bandcamp
            }
            if (payload.spotify) {
                state.epk.spotify = payload.spotify
            }
            if (payload.itunes) {
                state.epk.itunes = payload.itunes
            }
            if (payload.image) {
                state.epk.image = payload.image
            }
            if (payload.coverImage) {
                state.epk.coverImage = payload.coverImage
            }
            if (payload.video1) {
                state.epk.video1 = payload.video1
            }
            if (payload.video2) {
                state.epk.video2 = payload.video2
            }

        }
    },
    actions: {
        updatePost({commit}, payload) {
            console.log('store, updating post', payload)
            let postId = payload.id
            let postObj = {
                title: payload.title,
                date: payload.date,
                copy: payload.copy,
                image: payload.image,
                iframeUrl: payload.iframeUrl
            }
            let imageUrl
            let hasNoImage = payload.image === null
            console.log('hasNoImage', hasNoImage)

            if (hasNoImage) {
                firebase.database().ref('blogs/' + postId).set(postObj)
                    .then(() => {
                        return firebase.database().ref('blogs').once('value')
                    })
                    .then(data => {
                        const blogPosts = []
                        const obj = data.val()
                        for(let key in obj) {
                            blogPosts.push({
                                id: key,
                                title: obj[key].title,
                                date: obj[key].date,
                                copy: obj[key].copy,
                                image: obj[key].image,
                                iframeUrl: obj[key].iframeUrl
                            })
                        }
                        commit('setLoadedPosts', blogPosts)
                    })
                    .catch(error => {
                        console.log('error has no image', error)
                    })
            } else {
                const filename = payload.image.name
                const ext = filename.slice(filename.lastIndexOf('.'))
                firebase.storage().ref('blogs/' + postId + '.' + ext).put(payload.image)
                    .then(fileData => {
                        imageUrl = fileData.metadata.downloadURLs[0]
                        postObj.image = imageUrl
                        return firebase.database().ref('blogs').child(postId).update({image: imageUrl})
                    })
                    .then(() => {
                        return firebase.database().ref('blogs').once('value')
                    })
                    .then(data => {
                        const blogPosts = []
                        const obj = data.val()
                        for(let key in obj) {
                            blogPosts.push({
                                id: key,
                                title: obj[key].title,
                                date: obj[key].date,
                                copy: obj[key].copy,
                                image: obj[key].image,
                                iframeUrl: obj[key].iframeUrl
                            })
                        }
                        commit('setLoadedPosts', blogPosts)
                    })
                    .catch(error => {
                        console.log('error HAS image', error)
                    })
            }
        },
        deletePost({commit}, payload) {
            let postId = payload.id
            firebase.database().ref('blogs/' + postId).remove()
                .then(() => {
                    if (payload.image === '') {
                        return
                    } else {
                        let res = payload.image.split(postId)
                        let ext = res[1].split('?')[0]
                        let fileName = postId + ext
                        return firebase.storage().ref('blogs/' + fileName).delete()
                    }
                })
                .then(() => {
                    return firebase.database().ref('blogs').once('value')
                })
                .then(data => {
                    const blogPosts = []
                    const obj = data.val()
                    for(let key in obj) {
                        blogPosts.push({
                            id: key,
                            title: obj[key].title,
                            date: obj[key].date,
                            copy: obj[key].copy,
                            image: obj[key].image,
                            iframeUrl: obj[key].iframeUrl
                        })
                    }
                    commit('setLoadedPosts', blogPosts)
                })
                .catch(error => {
                    console.log('error image', error)
                })
        },
        loadEpk({commit}) {
            firebase.database().ref('epk').once('value')
                .then(data => {
                    const obj = data.val()
                    commit('updateEpk', obj)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        updateEpk({commit}, payload) {

            let imageUrl
            let hasNoImage = payload.image === null
            console.log('payload updateEPK', payload, hasNoImage, '<-- has no image') 
            if (payload.image || payload.coverImage) {
                let filename
                let payloadImageDirectory
                if (payload.storeLocation === 'epk/coverImage') {
                    payloadImageDirectory = payload.coverImage
                    filename = payload.coverImage.name
                } else if (payload.storeLocation === 'epk/image') {
                    payloadImageDirectory = payload.image
                    filename = payload.image.name
                }
                const ext = filename.slice(filename.lastIndexOf('.'))
                return firebase.storage().ref(payload.storeLocation + '/' + filename + ext).put(payloadImageDirectory)
                    .then(fileData => {
                        imageUrl = fileData.metadata.downloadURLs[0]
                        if (payload.storeLocation === 'epk/coverImage') {
                            return firebase.database().ref('epk').update({coverImage: imageUrl})
                        } else if(payload.storeLocation === 'epk/image') {
                            return firebase.database().ref('epk').update({image: imageUrl})
                        }
                    })
                    .then(() => {
                        return firebase.database().ref('epk').once('value')
                    })
                    .then(data => {
                        const obj = data.val()
                        console.log('epk obj-----', obj)
                        commit('updateEpk', obj)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } else {
                firebase.database().ref('epk').update(payload)
                    .then(() => {
                        console.log('updated EPK!')
                        console.log(payload)
                        return firebase.database().ref('epk').once('value')
                    })
                    .then(data => {
                        const obj = data.val()
                        commit('updateEpk', obj)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }

        },
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
                .catch(error => {
                    console.log(error)
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
                            image: obj[key].image,
                            iframeUrl: obj[key].iframeUrl
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
                iframeUrl: payload.iframeUrl
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
                    return firebase.storage().ref('blogs/' + key + ext).put(payload.image)
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
        updateVideo({commit}, payload) {
            let videoId = payload.id
            let videoUrl = payload.url
            firebase.database().ref('videos/' + videoId).set({url: videoUrl})
                .then(() => {
                    return firebase.database().ref('videos').once('value')
                })
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
        deleteVideo({commit}, payload) {
            const videoId = payload.id
            firebase.database().ref('videos/' + videoId).remove()
                .then(() => {
                    console.log('video successfully removed')
                    return firebase.database().ref('videos').once('value')
                })
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
        deleteTour({commit}, payload) {
            let tourId = payload.id
            firebase.database().ref('tours/' + tourId).remove()
                .then(() => {
                    console.log('tour successfully removed')
                    return firebase.database().ref('tours').once('value')
                })
                .then(data => {
                    const tourList = []
                    const obj = data.val()
                    for(let key in obj) {
                        tourList.push({
                            id: key,
                            url: obj[key].url,
                            rsvp: obj[key].rsvp,
                            title: obj[key].title,
                            description: obj[key].description,
                            date: obj[key].date
                        })
                    }
                    commit('setLoadedTours', tourList)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        updateTour({commit}, payload) {
            let tourId = payload.id
            const tourObj = {
                url: payload.url,
                rsvp: payload.rsvp,
                title: payload.title,
                description: payload.description,
                date: payload.date,
            }
            firebase.database().ref('tours/' + tourId).set(tourObj)
                .then(() => {
                    return firebase.database().ref('tours').once('value')
                })
                .then(data => {
                    const tourList = []
                    const obj = data.val()
                    for(let key in obj) {
                        tourList.push({
                            id: key,
                            url: obj[key].url,
                            rsvp: obj[key].rsvp,
                            title: obj[key].title,
                            description: obj[key].description,
                            date: obj[key].date
                        })
                    }
                    commit('setLoadedTours', tourList)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadTours({commit}) {
            firebase.database().ref('tours').once('value')
                .then(data => {
                    const tourList = []
                    const obj = data.val()
                    for(let key in obj) {
                        tourList.push({
                            id: key,
                            url: obj[key].url,
                            rsvp: obj[key].rsvp,
                            title: obj[key].title,
                            description: obj[key].description,
                            date: obj[key].date
                        })
                    }
                    commit('setLoadedTours', tourList)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        addTour({commit}, payload) {
            let tourObj = {
                title: payload.title,
                description: payload.description,
                date: payload.date,
                url: payload.url,
                rsvp: payload.title
            }
            let key
            firebase.database().ref('tours').push(tourObj)
                .then(data => {
                    key = data.key
                    return key
                })
                .then(data => {
                    let newObj = {
                        ...tourObj,
                        id: key
                    }
                    commit('addTour', newObj)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        updateSong({commit}, payload) {
            const songId = payload.id
            const songObj = {
                url: payload.url,
                title: payload.title
            }
            firebase.database().ref('works/' + songId).set(songObj)
                .then(() => {
                    return firebase.database().ref('works').once('value')
                })
                .then(data => {
                    const songList = []
                    const obj = data.val()
                    for(let key in obj) {
                        songList.push({
                            id: key,
                            url: obj[key].url,
                            title: obj[key].title
                        })
                    }
                    commit('setLoadedSongs', songList)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteSong({commit}, payload) {
            const songId = payload.id
            firebase.database().ref('works/' + songId).remove()
                .then(() => {
                    return firebase.database().ref('works').once('value')
                })
                .then(data => {
                    const songList = []
                    const obj = data.val()
                    for(let key in obj) {
                        songList.push({
                            id: key,
                            url: obj[key].url,
                            title: obj[key].title
                        })
                    }
                    commit('setLoadedSongs', songList)
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
        epkLoaded(state) {
            return state.epkLoaded
        },
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
        },
        epk(state) {
            return state.epk
        },
        tours(state) {
            return state.tours
        }
    }
})

