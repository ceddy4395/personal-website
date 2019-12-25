<template>
  <footer class="site-footer">
    {{ $siteConfig.siteName }} &copy; {{ new Date().getFullYear() }} - All
    Rights Reserved
    <br />
    <a
      href="https://www.facebook.com/cedricwillekens.1"
      class="fa fa-facebook"
    />
    <a href="https://www.instagram.com/ceddy4395" class="fa fa-instagram" />
    <!--    Made with <span style="color: #e25555;">&#9829;</span> with Nuxt.js and-->
    <!--    Netlify-->
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
footer {
  background: #eee;
  padding: 20px 10px;
  text-align: center;
  transition: 0.5s ease all;
}
</style>
