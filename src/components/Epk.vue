<template lang="html">
	<div class="container epk-container main-section">
		
		<h1>Nyleve - Electronic Press Kit</h1>
		<div v-if="!editingCoverImage" class="press-shot-crop" :style="{ 'background-image': 'url(' + epk.coverImage + ')' }">
			<button class="button" @click="editCoverImage">Update press cover shot</button>
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
		<div v-if="editingLowHighRes">
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

				<input type="submit" @click="updateLinks" class="button submit-links" :disabled="!linksAreValid">
				<span class="button" @click="cancelLinks">Cancel</span>
			</form>
		</div>
		
		<h2>Latest release</h2>
		
		<!-- Featured Work -->
		<div class="columns">
			<div class="column" >
				<img v-if="epk.image" :src="epk.image">
				<button class="button" style="display: block;">Update Image</button>
			</div>
			<div class="column">
				<div v-if="!editingTitleDesc">
					<h3> {{ epk.title }} </h3>
					<p> {{ epk.description }} </p>
					<p v-for="(track, index) in epk.tracks.split('\n')">0{{index + 1}}. {{ track }}</p>
					<button class="button" @click="editTitleDesc">Update copy</button> <!-- v-if="userIsAuthenticated" -->
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
		<div class="columns">
			<div class="column">
				<div class="resp-container" v-if="!editingFrame">
					<iframe class="resp-iframe" src="https://www.youtube.com/embed/k8iAfhmbbRQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
			</div>
			<div class="column">
				<div class="resp-container" v-if="!editingFrame">
					<iframe class="resp-iframe" src="https://www.youtube.com/embed/mwWzgh2TXH0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
			</div>
		</div>
		
		<!-- BIO -->
		<div class="columns">
			<div class="column bio-profile">
				<h2>Nyleve Bio</h2>
				
				<p> {{ bio.split('\n')[0] }}</p>
				<span class="button" @click="showBody" v-if="!isShowingFullBody">Show more</span>
				<template v-if="isShowingFullBody">
					<p v-for="(paragraph, index) in sliceItems(1)">{{ paragraph }}</p>
				</template>
				<p class="social-links">
					<a :href="epk.facebook" target="_blank">Facebook</a> |
					<a :href="epk.soundcloud" target="_blank">Soundcloud</a>
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
			lowResLink: '',
			highResLink: '',
			title: '',
			description: '',
			tracks: ''
		}
	},
	methods: {
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
		updateCoverImage() {
			this.editingCoverImage = false
			const coverImageObj = {
				storeLocation: 'epk/image',
				filename: 'coverimage'
			}
			if(this.imageFile) {
				this.imageCoverFile = files[0]
				coverImageObj.coverImage = this.imageAlbumFile
			}

			this.$store.dispatch('updateEpk', coverImageObj)
		},
		updateAlbumImage() {
			this.editingAlbumImage = false
			const albumImageObj = {
				storeLocation: 'epk/coverimage',
				filename: 'albumimage'
			}
			if(this.imageFile) {
				albumImageObj.image = this.imageAlbumFile
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
				linksObj.soundcloud = this.spotifyLink
			}
			if(this.bandcampLink) {
				linksObj.soundcloud = this.bandcampLink
			}
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
.main-section {
	margin-bottom: 0;
}
.epk-container {
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
</style>
