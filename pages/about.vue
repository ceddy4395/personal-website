<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="About Me"
      subtitle="Sailor for life..."
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Sailor</h3>
          <p>
            <strong>
              A sailor in heart and soul. Every hour spent on the water is an
              hour spent learning and getting beter!
            </strong>
          </p>
          <p>
            I'm a 21 year old student living in Delft, The Netherlands. I'm
            currently studying computer science and engineering at the TU Delft.
            Outside of my study hours you will always be able to find me on the
            water. Sailing is my passion, I've been doing it since the age of 7
            and would not like to do anything else.
          </p>

          <h3>Learning never stops</h3>
          <p>
            My passion for sailing comes from the fact that learning never
            stops. Every hour I spent on the water is always about improving,
            being able to go that 1% faster around the race course.
          </p>
          <h3>Past experiences</h3>
          <p>
            I started sailing at the age of 7, in the optimist at a local club
            in Belgium. From there, I was quickly asked to join the national
            team and the sailing became more and more competitive. Since then I
            have never looked back and the boats have only started to get bigger
            and faster. Right now I'm mainly sailing keelboats ranging from 20
            ft sport boats to full on VO65 ocean racers.
          </p>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-horizontal">
            <div class="tile is-parent is-4">
              <article class="tile is-child box">
                <a href="https://www.facebook.com/J111RedHerring/">
                  <p class="title">
                    Team Red Herring
                  </p>
                  <p class="subtitle">
                    J111 - NED 9111
                  </p>
                  <figure class="image is-1by1">
                    <opti-image
                      width="500"
                      height="500"
                      :src="require('~/assets/uploads/red-herring.jpg').src"
                      :srcset="
                        require('~/assets/uploads/red-herring.jpg').srcSet
                      "
                    />
                  </figure>
                </a>
              </article>
            </div>

            <div class="tile is-parent is-4">
              <article class="tile is-child box">
                <a href="https://www.facebook.com/karmasailingteam/">
                  <p class="title">
                    Karma Sailing team
                  </p>
                  <p class="subtitle">
                    Agile 42 - NED 8999
                  </p>
                  <figure class="image is-1by1">
                    <opti-image
                      width="500"
                      height="500"
                      :src="
                        require('~/assets/uploads/karma-sailing-team.jpg').src
                      "
                      :src-set="
                        require('~/assets/uploads/karma-sailing-team.jpg')
                          .srcSet
                      "
                    />
                  </figure>
                </a>
              </article>
            </div>
            <div class="tile is-parent is-4">
              <article class="tile is-child box">
                <a href="https://www.facebook.com/NED1514Broach">
                  <p class="title">
                    Team De Jeugd
                  </p>
                  <p class="subtitle">
                    J22 - NED 1514
                  </p>
                  <figure class="image is-1by1">
                    <opti-image
                      width="500"
                      height="500"
                      :src="
                        require('~/assets/uploads/J22-team-de-jeugd.jpg').src
                      "
                      :src-set="
                        require('~/assets/uploads/J22-team-de-jeugd.jpg').srcSet
                      "
                    />
                  </figure>
                </a>
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <article class="tile is-child box">
              <a href="https://www.facebook.com/NED1514J22/">
                <p class="title">
                  Team Duckies
                </p>
                <p class="subtitle">
                  J22 - NED 1514
                </p>
                <figure class="image is-1by1">
                  <opti-image
                    width="500"
                    height="500"
                    :src="require('~/assets/uploads/j22-team-duckies.jpg').src"
                    :src-set="
                      require('~/assets/uploads/j22-team-duckies.jpg').srcSet
                    "
                  />
                </figure>
              </a>
            </article>
          </div>
          <!--          <div class="tile is-parent is-4">-->
          <!--            <article class="tile is-child box">-->
          <!--              <p class="title">-->
          <!--                Team Homanit-->
          <!--              </p>-->
          <!--              <p class="subtitle">-->
          <!--                Melges 32-->
          <!--              </p>-->
          <!--              <figure class="image is-1by1">-->
          <!--                <opti-image width="500" height="500" />-->
          <!--              </figure>-->
          <!--            </article>-->
          <!--          </div>-->
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
