<template lang="html">
    <div class="">
        <div class="contact-container">
            <a target="_blank" :href="facebook">Facebook</a> | <a target="_blank" :href="youtube">Youtube</a>
            <a class="email" href="mailto:nyleve@gmail.com"> {{ email }} </a>
            <!-- <p>Sign up Newsletter</p> -->
            <!-- <input class="input-name" type="text" name="Name" value="" placeholder="Name"> -->
            <!-- <input class="input-email" type="text" name="Email" value="" placeholder="Email"> -->
            <!-- <button id="signup" class="signup-btn" type="button" name="button">Sign up</button> -->

            <p>Sign up Newsletter</p>
            <div id="mc_embed_signup">
              <form action="https://nylevemusic.us17.list-manage.com/subscribe/post?u=b19734bd4f6f63f9f5c77ee10&amp;id=1f9ec419ca" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                  <!-- <div class="indicates-required">Note:<span class="asterisk">*</span> indicates required</div> -->
                  <div class="mc-field-group">
                  	<!-- <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label> -->
                  	<input type="email" value="" name="EMAIL" class="required email input-email" id="mce-EMAIL" placeholder="Email">
                  </div>
                	<div id="mce-responses" class="clear">
                		<div class="response" id="mce-error-response" style="display:none"></div>
                		<div class="response" id="mce-success-response" style="display:none"></div>
                	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b19734bd4f6f63f9f5c77ee10_1f9ec419ca" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button signup-btn"></div>
                </div>
              </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            facebook: 'https://www.facebook.com',
            youtube: 'https://www.youtube.com',
            email: 'Nyleve@gmail.com'
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-container {
    position: relative;
    margin: auto;
    text-align: left;
    background: rgba(255,255,255,0.1);
    padding: 80px 26px;
    line-height: 1.5;
    top: 143px;
    h1 {
        margin: 0;
        font-size: 1.2em;
        margin-bottom: 20px;
    }
    p {
        margin: 0;
        font-size: .9em;
        line-height: 1.8;
    }
    a {
        font-size: .9em;
        line-height: 1.8;
        color: #fff;
        text-decoration: none;
        &:hover {
            color: #e2e2e2;
        }
    }
    .email {
        display: block;
        margin-bottom: 30px;
    }
    .input-name,
    .input-email {
        width: 190px;
        height: 18px;
        margin-top: 10px;
        border: none;
        padding: 6px;
        margin-right: 5px;
    }
    .signup-btn {
        display: block;
        margin-top: 20px;
        width: 120px;
        height: 30px;
        border: none;
        background: #fff;
    }

    .indicates-required {
      font-size: 13px;
    }
}
</style>
