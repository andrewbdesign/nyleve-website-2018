import Vue from 'vue';
import Vuex from 'vuex';
// import * as firebase from 'firebase'

Vue.use(Vuex);
// Details
// me@nyleve.com
// nyleve1234

export const store = new Vuex.Store({
    state: {
        // 1. BLOG
        blogs: [
            {title: 'First post', date: 'October 6, 2018', copy:'Stage fright or performance anxiety is the anxiety, fear, or persistent phobia which may be aroused in an individual by the requirement to', image: ''},
            {title: 'EP Review', date: 'October 10, 2018', copy:'A camera is an optical instrument for recording or capturing images, which may be stored locally, transmitted to another location, or both.', image: 'https://www.billboard.com/files/styles/article_main_image/public/media/ODESZA-live-red-rocks-amphitheatre-2017-a-billboard-1548.jpg'},
            {title: 'relaxation', date: 'October 16, 2018', copy:'Photographic film is a strip or sheet of transparent plastic film base coated on one side with a gelatin emulsion containing microscopically', image: 'https://static1.squarespace.com/static/562d414ae4b08c9d7b3b1128/t/597a0bf617bffc7e459d27e9/1501170726731/IMG_1129-Edit.jpg'},
        ],
        // 2. BIO
        bio: {
            body: 'Sydney singer-songwriter, producer, multi-instrumentalist\nStarting off solely as a singer, Nyleve began to experiment with songwriting and production to craft heavily layered pieces that blends acoustic guitars and ethereal electronic textures with melancholic melodies and unconventional structures. His Musical Influences range from Steve Reich, Radiohead, Jeff Buckley, D’angelo and Ryuichi Sakamoto.\nAs a Self taught musician, Nyleve has relied on his inspirations and his intuition to guide him towards learning how to write and record music. After creating a string of fragmented works under numerous monikers he has released his debut EP ‘An Empty Space Between’ in 2017 under his name.\nNyleve’s debut EP An Empty Space Between was recorded & mixed in its entirety in his bedroom in between long bouts of self-imposed isolation. During these contemplative moments away from an overwhelmingly noisy and overly connected world he dives into himself to explore themes of loneliness, helplessness, depression, escapism, lost love, disconnectedness, loss, grief and being okay with that. Months later he has finally come out of the trenches to share his otherworldly songs.\nHe is currently preparing for live shows to promote his newly released EP.'
        },
        // 3. Videos
        videos: [
            {url: 'https://www.youtube.com/embed/ZXWCbZdrkUM'},
            {url: 'https://www.youtube.com/embed/gHsUaS9r5R8'},
            {url: 'https://www.youtube.com/embed/SxVNOnPyvIU'},
        ],
        // 4. Listen
        works: [
            {title: 'An Empty Space Between', url:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/359882759%3Fsecret_token%3Ds-C7uUO&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true'},
            {title: 'What is up fam', url:'https://open.spotify.com/embed/album/0gSmTwEd1wJS1v1lbFWZDv'},
        ],
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
        }
    },
    mutations: {

    },
    actions: {

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
        }
    }
})

