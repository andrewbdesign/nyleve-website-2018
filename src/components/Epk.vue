<template lang="html">
	<div class="container epk-container main-section" v-if="epk.title">
		
		<h1>Nyleve - Electronic Press Kit</h1>
		<div v-if="!editingCoverImage" class="press-shot-crop" :style="{ 'background-image': 'url(' + epk.coverImage + ')' }">
			<button v-if="userIsAuthenticated" class="button" @click="editCoverImage">Update press cover shot</button>
		</div>

		<div v-if="editingCoverImage">
			<div class="press-shot-crop" :style="{ 'background-image': 'url(' + this.coverImagePreview + ')' }">
				<h1>Preview</h1>
			</div>
			
			<input 
				type="file" 
				style="display: none" 
				ref="fileInput" 
				accept="image/*"
				@change="onFilePicked">
			<button class="button" @click="onPickFile">Upload Cover Image</button>				
			<button @click="updateCoverImage" class="button">Save</button>
			<button @click="cancelCoverImage" class="button">Cancel</button>
		</div>
		
		<p class="img-download">Download a high-resolution (PRINT) press shot <a :href="epk.highRes" target="_blank">HERE</a> | Download a high-resolution (WEB) press shot <a :href="epk.lowRes" target="_blank">HERE</a> </p>
		<div v-if="!editingLowHighRes">
			<button v-if="userIsAuthenticated" class="button" @click="editLinks">Update Links</button>
		</div>
		<div v-if="editingLowHighRes" class="section-copy">
			<form autocomplete="off" id="form" @submit.prevent>
				
				<label for="high-res">High Res (PRINT)</label>
				<input id="high-res" type="text" v-model="highResLink">

				<label for="low-res">Low Res (WEB)</label>
				<input id="low-res" type="text" v-model="lowResLink">
				
				<p>SOCIAL LINKS</p>
				<label for="soundcloud">Soundcloud</label>
				<input id="soundcloud" type="text" v-model="soundcloudLink">
				
				<label for="facebook">Facebook</label>
				<input id="facebook" type="text" v-model="facebookLink">

				<label for="bandcamp">Bandcamp</label>
				<input id="bandcamp" type="text" v-model="bandcampLink">

				<label for="spotify">Spotify</label>
				<input id="spotify" type="text" v-model="spotifyLink">

				<label for="itunes">Itunes</label>
				<input id="itunes" type="text" v-model="itunesLink">

				<input type="submit" @click="updateLinks" class="button submit-links" :disabled="!linksAreValid">
				<span class="button" @click="cancelLinks">Cancel</span>
			</form>
		</div>
		
		
		<!-- Featured Work -->
		
		<div class="columns section-copy">
			<div class="column is-one-third" >
				<h2 class="latest-release">Latest release</h2>
				<div v-if="!editingAlbumImage">
				<img v-if="epk.image" :src="epk.image">
					<button v-if="userIsAuthenticated" @click="editAlbumImage" class="button epk-image-btn">Edit Featured Album</button>
				</div>
				<div v-if="editingAlbumImage">
				<img :src="this.albumImagePreview">
					<input 
						type="file" 
						style="display: none" 
						ref="fileInputImage" 
						accept="image/*"
						@change="onFilePicked">
					<button @click="onPickFileImage" class="button epk-image-btn">Upload</button>
					<button @click="updateAlbumImage" class="button epk-image-btn">Save</button>
					<button @click="cancelAlbumImage" class="button epk-image-btn">Cancel</button>
				</div>

			</div>
			<div class="column">
				<div v-if="!editingTitleDesc" class="latest-release-details">
					<h3> {{ epk.title }} </h3>
					<p class="description"> {{ epk.description }} </p>
					<p v-for="(track, index) in epk.tracks.split('\n')">0{{index + 1}}. {{ track }}</p>
					<button v-if="userIsAuthenticated" class="button" @click="editTitleDesc">Update copy</button>
				</div>
				<div v-if="editingTitleDesc">
					<form autocomplete="off" id="title-desc-form" @submit.prevent>
						<label for="title">Title</label>
						<input id="title" type="text" v-model="title">

						<label for="description">Description</label>
						<input id="description" type="text" v-model="description">

						<label for="tracks">Tracks</label>
						<textarea id="tracks" type="text" v-model="tracks"></textarea>

						<input type="submit" @click="updateTitleDesc" class="button" :disabled="!titleDescAreValid">
						<span class="button" @click="cancelTitleDesc">Cancel</span>
					</form>
				</div>

			</div>
		</div>
		
		<!-- IFRAME -->
		<div class="columns">
			<div class="column">
				<div class="edit-iframe">
					<span class="button" v-if="userIsAuthenticated" @click="editIframe">Edit Iframe</span>
					<div v-if="editingFrame">
						<form autocomplete="off" id="form" @submit.prevent="updateIframe">
							<label for="iframe-url">iframe URL</label>
							<input id="iframe-url" type="text" v-model="iframeUrlPreview">
							<input type="submit" class="button" :disabled="!iframeIsValid">
							<span class="button" @click="cancelEditPost">Cancel</span>
						</form>
						<div class="resp-container">
							<iframe class="resp-iframe" :src="iframeUrlPreview" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>
					</div>
				</div>
				<div class="resp-container" v-if="!editingFrame">
					<iframe class="resp-iframe" :src="iframeUrl.iframeSongs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
			</div>
		</div>

		<!-- VIDEO SECTION -->
		<div class="columns section-copy">
			<div class="column">
				<div v-if="!editingVideoIframes">
					<div class="resp-container" >
						<iframe class="resp-iframe" :src="epk.video1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
					</div>
					<span v-if="userIsAuthenticated" class="button" @click="editVideoIframes">Edit Iframes</span>
				</div>
				<div v-if="editingVideoIframes">
					<div class="resp-container" >
						<iframe class="resp-iframe" :src="iframe1Preview" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
					</div>
					<form id="iframe-1" >
						<label for="iframe1">Video 1 iframe</label>
						<input id="iframe1" v-model="iframe1Preview">
						<span class="button iframe-btn" @click="updateVideoIframes">Update Videos</span>
						<span class="button iframe-btn" @click="cancelVideoIframes">Cancel</span>
					</form>
				</div>
			</div>
			<div class="column">
				<div v-if="!editingVideoIframes">
					<div class="resp-container" >
						<iframe class="resp-iframe" :src="epk.video2" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
					</div>
					<!-- <span class="button" @click="editVideoIframes">Edit Iframes</span> -->
				</div>
				<div v-if="editingVideoIframes">
					<div class="resp-container" >
						<iframe class="resp-iframe" :src="iframe2Preview" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
					</div>
					<form id="iframe-1" >
						<label for="iframe2">Video 2 iframe</label>
						<input id="iframe2" v-model="iframe2Preview">
						<!-- <span class="button iframe-btn" @click="updateVideoIframes">Update Video 2</span> -->
						<!-- <span class="button iframe-btn" @click="cancelVideoIframes">Cancel</span> -->
					</form>
				</div>
			</div>
		</div>
		
		<!-- BIO -->
		<div class="columns section-copy">
			<div class="column bio-profile">
				<h2>Nyleve Bio</h2>
				
				<p> {{ bio.split('\n')[0] }}</p>
				<span class="button" @click="showBody" v-if="!isShowingFullBody">Show more</span>
				<template v-if="isShowingFullBody">
					<p v-for="(paragraph, index) in sliceItems(1)">{{ paragraph }}</p>
				</template>
				<p class="social-links">
					<a v-if="epk.facebook" target="_blank" :href="epk.facebook">Facebook</a> <span v-if="epk.soundcloud">|</span>
					<a v-if="epk.soundcloud" target="_blank" :href="epk.soundcloud">Soundcloud</a> <span v-if="epk.bandcamp">|</span>
					<a v-if="epk.bandcamp" target="_blank" :href="epk.bandcamp">Bandcamp</a> <span v-if="epk.spotify">|</span>
					<a v-if="epk.spotify" target="_blank" :href="epk.spotify">Spotify</a> <span v-if="epk.youtube">|</span>
					<a v-if="epk.youtube" target="_blank" :href="epk.youtube">Youtube</a>
				</p>
			</div>
		</div>

		<hr>

	</div>
</template>

<script>
export default {
	computed: {
		epk() {
			return this.$store.getters.epk
		},
		iframeUrl() {
			return this.$store.getters.epk
		},
		bio() {
			return this.$store.getters.bio
		},
		iframeIsValid() {
			return this.iframeUrl !== ''
		},
		userIsAuthenticated() {
			return this.$store.getters.user !== null && this.$store.getters.user !== undefined
		},
		linksAreValid() {
			return this.lowResLink !== '' && this.highResLink !== '' && this.facebookLink !== '' && this.soundcloudLink !== ''
		},
		titleDescAreValid() {
			return this.title !== '' && this.description !== ''
		}
	},
	data () {
		return {
			isShowingFullBody: false,
			editingFrame: false,
			editingLowHighRes: false,
			editingTitleDesc: false,
			editingCoverImage: false,
			editingAlbumImage: false,
			editingVideoIframes: false,
			coverImagePreview: '',
			albumImagePreview: '',
			imageCoverFile: '',
			imageAlbumFile: '',
			albumImagePreview: '',
			iframeUrlPreview: '',
			soundcloudLink: '',
			facebookLink: '',
			bandcampLink: '',
			spotifyLink: '',
			itunesLink: '',
			lowResLink: '',
			highResLink: '',
			title: '',
			description: '',
			tracks: '',
			videoIframe1: '',
			videoIframe2: '',
			iframe1Preview: '',
			iframe2Preview: ''
		}
	},
	methods: {
		editVideoIframes() {
			this.editingVideoIframes = true
			if (this.epk.video1) {
				this.iframe1Preview = this.epk.video1
			}
			if (this.epk.video2) {
				this.iframe2Preview = this.epk.video2
			}
		},
		cancelVideoIframes() {
			this.editingVideoIframes = false
			this.iframe1Preview = ''
			this.iframe2Preview = ''
		},
		updateVideoIframes() {
			this.editingVideoIframes = false
			const iframeVideoObj = {}
			if (this.iframe1Preview) {
				iframeVideoObj.video1 = this.iframe1Preview
			}
			if (this.iframe2Preview) {
				iframeVideoObj.video2 = this.iframe2Preview
			}
			this.$store.dispatch('updateEpk', iframeVideoObj)
		},
		onFilePicked(e) {
            const files = e.target.files
            let filename = files[0].name
            if (filename.lastIndexOf('.') <= 0) {
                return alert('Please add a valid image')
			}
			if (this.editingCoverImage) {
				const fileReader = new FileReader()
				fileReader.addEventListener('load', () => {
					this.coverImagePreview = fileReader.result
				})
				fileReader.readAsDataURL(files[0])
				this.imageCoverFile = files[0]
			} else if (this.editingAlbumImage) {
				const fileReader = new FileReader()
				fileReader.addEventListener('load', () => {
					this.albumImagePreview = fileReader.result
				})
				fileReader.readAsDataURL(files[0])
				this.imageAlbumFile = files[0]
			}
		},
        onPickFile(e) {
            e.preventDefault()
            this.$refs.fileInput.click()
		},
		onPickFileImage(e) {
            e.preventDefault()
            this.$refs.fileInputImage.click()
        },
		updateCoverImage() {
			this.editingCoverImage = false
			const coverImageObj = {
				storeLocation: 'epk/coverImage',
				filename: 'coverimage',
				coverImage: this.imageCoverFile
			}
			this.$store.dispatch('updateEpk', coverImageObj)
		},
		updateAlbumImage() {
			this.editingAlbumImage = false
			const albumImageObj = {
				storeLocation: 'epk/image',
				filename: 'albumimage',
				image: this.imageAlbumFile
			}
			this.$store.dispatch('updateEpk', albumImageObj)
		},
		editAlbumImage() {
			this.editingAlbumImage = true
			if (this.$store.getters.epk.image) {
				this.albumImagePreview = this.$store.getters.epk.image
			}
		},
		cancelAlbumImage() {
			this.editingCoverImage = false
			this.albumImagePreview = ''
			this.imageFile = ''
		},
		editCoverImage() {
			this.editingCoverImage = true
			console.log(this.$store.getters.epk.coverImage)
			if (this.$store.getters.epk.coverImage) {
				this.coverImagePreview = this.$store.getters.epk.coverImage
			}
		},
		cancelCoverImage() {
			this.editingCoverImage = false
			this.coverImagePreview = ''
			this.imageFile = ''
		},
		editTitleDesc() {
			this.editingTitleDesc = true
			if (this.$store.getters.epk.title) {
				this.title = this.$store.getters.epk.title
			}
			if (this.$store.getters.epk.description) {
				this.description = this.$store.getters.epk.description
			}
			if (this.$store.getters.epk.tracks) {
				this.tracks = this.$store.getters.epk.tracks
			}
		},
		cancelTitleDesc() {
			this.editingTitleDesc = false
			this.title = ''
			this.description = ''
			this.tracks = ''
		},
		updateTitleDesc() {
			this.editingTitleDesc = false
			const titleDescObj = {}
			if(this.title) {
				titleDescObj.title = this.title
			}
			if(this.description) {
				titleDescObj.description = this.description
			}
			if(this.tracks) {
				titleDescObj.tracks = this.tracks
			}
			this.$store.dispatch('updateEpk', titleDescObj)
		},
		editLinks() {
			this.editingLowHighRes = true
			if (this.$store.getters.epk.lowRes) {
				this.lowResLink = this.$store.getters.epk.lowRes
			}
			if (this.$store.getters.epk.highRes) {
				this.highResLink = this.$store.getters.epk.highRes
			}
			if (this.$store.getters.epk.facebook) {
				this.facebookLink = this.$store.getters.epk.facebook
			}
			if (this.$store.getters.epk.soundcloud) {
				this.soundcloudLink = this.$store.getters.epk.soundcloud
			}
			if (this.$store.getters.epk.bandcamp) {
				this.bandcampLink = this.$store.getters.epk.bandcamp
			}
			if (this.$store.getters.epk.spotify) {
				this.spotifyLink = this.$store.getters.epk.spotify
			}
			if (this.$store.getters.epk.itunes) {
				this.itunesLink = this.$store.getters.epk.itunes
			}
		},
		cancelLinks() {
			this.editingLowHighRes = false
			this.lowResLink = ''
			this.highResLink = ''
			this.facebookLink = ''
			this.soundcloudLink = ''
		},
		updateLinks() {
			this.editingLowHighRes = false
			const linksObj = {}
			if(this.lowResLink) {
				linksObj.lowRes = this.lowResLink
			}
			if(this.highResLink) {
				linksObj.highRes = this.highResLink
			}
			if(this.facebookLink) {
				linksObj.facebook = this.facebookLink
			}
			if(this.soundcloudLink) {
				linksObj.soundcloud = this.soundcloudLink
			}
			if(this.spotifyLink) {
				linksObj.spotify = this.spotifyLink
			}
			if(this.bandcampLink) {
				linksObj.bandcamp = this.bandcampLink
			}

			if(this.itunesLink) {
				linksObj.itunes = this.itunesLink
			}
			// console.log('linksObj', linksObj)
			this.$store.dispatch('updateEpk', linksObj)
		},
		updateIframe() {
			this.editingFrame = false
			const iframeObj = {
				iframeSongs: this.iframeUrlPreview
			}
			this.$store.dispatch('updateEpk', iframeObj)
		},

		cancelEditPost() {
			this.editingFrame = false
			this.iframeUrlPreview = this.iframeUrl.iframeSongs
		},
		editIframe() {
			this.editingFrame = true
			this.iframeUrlPreview = this.iframeUrl.iframeSongs
		},

		showBody() {
			this.isShowingFullBody = true
    	},
		sliceItems(start) {
			var endIs = this.bio.split('\n').length
			return this.bio.split('\n').slice(start, endIs);
		}
	}
}
</script>

<style lang="scss" scoped>

h1 {
    font-family: 'Source Serif Pro', serif;
    font-size: 3em;
    font-weight: 700;
    margin: 0;
    margin-bottom: 30px;
    color: #000;
}
.main-section {
	margin-bottom: 0;
	padding: 2em 0 !important;
}
.section-copy {
	padding: 0 2em;
}
.epk-image-btn {
	width: initial;
	display: inline-block;
}

input {
	width: 100%;
}
.iframe-btn {
	margin: 0;
}
.latest-release {
	font-size: 2em;
	font-weight: bold;
}
.latest-release-details {
	margin-top: 2.7em;
	color: #000;
	h3 {
		font-size: 1em;
		font-weight: bold;
	}
	.description {
		font-size: 0.9em;
		padding: 1em 0;
	}
}

.epk-container {
	max-width: 760px;
	input[type="text"], textarea {
		width: 100%;
		margin: 5px;
	}
	textarea {
		height: 100px;
	}
	.button {
		margin: 20px 0;
	}
	h1, .img-download{
		text-align: center;
	}
	.img-download {
		margin: 10px 0 20px;
		font-size: 12px;
	}
	.press-shot-crop {
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		width: 100%;
		height: 282px;
		position: relative;
		.button {
			position: absolute;
			margin: auto;
			left: 0;
			bottom: 0;
			margin: 0;
			line-height: 0;
		}
		h1 {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			width: 180px;
			height: 70px;
		}
	}
	.press-shot-crop:hover button{
		opacity: 1;
	}
}
.bio-profile {
	p {
		margin-bottom: 20px;
	}
}
.social-links {
	text-align: center;
}
.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    margin-bottom: 2em;
    .resp-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
}
.button {
	line-height: 0;
}
.submit-links {
	width: initial;
}

@media (max-width: 845px){
    .epk-container {
        width: 90%;
    }
}

</style>
