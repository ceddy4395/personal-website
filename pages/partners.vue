<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Partners & Sponsors"
      subtitle=""
      image="/uploads/cv-hero.jpg"
    />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <h3 class="subtitle is-3">
          Looking for a partner or a sponsoree?
        </h3>
        Unfortunately, sailing is not a cheap sport, with all the travelling and
        gear needed to practice what I'm good at comes a certain cost. In order
        to be able to cover these costs I rely on help from partners and
        sponsors, in return for something ofcourse! ;)
        <h2 class="subtitle is-4">
          So what can I offer you?
        </h2>
        <font-awesome-icon :icon="['fab', 'adversal']" /> Brand Recognition
        <br />
        <font-awesome-icon :icon="['far', 'file-powerpoint']" /> Presentations
        <br />
        <font-awesome-icon :icon="['fas', 'info-circle']" /> Ask me for more
        idea's or suggest an idea! I'm always open to new things.
        <br />
        <h2 class="subtitle is-4">
          Don't want to sponsor, but still want to help?
        </h2>
        Please share this page with friends and family so I can continue doing
        what I love and am good at!
        <div>
          <iframe
            src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwillekens.dev&layout=button&size=large&appId=111038289592943&width=77&height=28"
            width="77"
            height="28"
            style="border:none;overflow:hidden"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </template>
      <template v-slot:sidebar>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Partners & Sponsors | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
<style scoped>
iframe {
  padding: 5px 2px;
}
</style>
