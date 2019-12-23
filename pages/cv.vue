<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="C.V."
      subtitle="The places I've been, the things I've done..."
      image="/uploads/cv-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default></template>
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
