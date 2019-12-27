<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Contact Me"
      subtitle=""
      image="/uploads/contact-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Hello!
              </p>
              <p class="subtitle">
                What can I do for you?
              </p>
              <figure class="image is-1by1 ">
                <opti-image
                  :src="require('~/assets/uploads/contact-person.jpeg').src"
                  :srcset="
                    require('~/assets/uploads/contact-person.jpeg').srcSet
                  "
                />
              </figure>
              <br />
              <div class="content">
                <p>
                  <strong>
                    Feel free to contact me regarding any questions
                  </strong>
                </p>
                <p>
                  If you have any questions/comments feel free to contact me through the contact form. I'm always happy to get in touch for new sailing opportunities and will reply asap.
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <contact-form />
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
export default {
  components: { ContactForm },
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
