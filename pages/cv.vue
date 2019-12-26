<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="C.V."
      subtitle="The places I've been, the things I've done..."
      image="/uploads/cv-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="columns">
          <div class="column is-4">
            <h3 class="subtitle">
              Dinghy Sailing
            </h3>
          </div>
          <div class="column">
            <CVItem
              title="Optimist"
              explanation=" learned sailing at the age of 7 in a local club in Belgium.  At the age of 9 I was asked tojoin ’GoSailing European Team’, a team which consisted of many youth sailors, someof which are now participating at the Olympics."
              year="2005-2012"
              :regattas="[
                'Winner Coupe D’ete Carentec, France - 2008',
                'inner Coupe D’ automne Maubison, France - 2008',
                '4th Belgian Championship - 2009',
                'Winner Belgian Championship - 2010',
                'Winner overall year ranking - 2010'
              ]"
            />
            <CVItem
              title="29er, (Helmsmen)"
              explanation="At  the  age  of  12  I  switched  from  the  optimist  to  the  29er.   I  sailed  for  one  yeartogether  with  Julius  Hallstrom  in  Sweden.   We  were  the  youngest  team  that  yearparticipating in the Swedish circuit and we qualified ourselves to train for the YouthWorld Championship together with 1 other team."
              year="2011-2012"
              :regattas="[
                '2nd at the Olympisk Regatta KSSS in Stockholm, Sweden - 2011',
                '14th at the RYA Volvo Youth National Championships - 2012',
                '4th at Swedish Youth Nationals - 2012'
              ]"
            />
            <CVItem
              year="2013-2014"
              title="Laser"
              explanation="After moving from Sweden to Italy, I didn’t manage to find a new sailing partner forthe 29er and therefore I decided to start with the laser.  I trained together with theCircolo Vela Torbole Squat on Lake Garda."
              :regattas="[
                '39th Laser 4.7 worlds Balaton, Hungary - 2013',
                '1st Laser Radial Europa cup Slovenia - 2014',
                '25th Laser Radial worlds Poland - 2014'
              ]"
            />
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <h3 class="subtitle">
              Keel boats
            </h3>
          </div>
          <div class="column">
            <CVItem
              title="J22"
              explanation="After starting my degree at TU Delft,  I joined a student sailing association.  Here Iimmediately got recruited for their J22 squat.  I spent a whole year as a trimmer onboard.  During this year we competed in the following events:"
              year="2017 & 2019"
              :regattas="[
                '6th at the J22 Van Uden Reco Stellendam, The Netherlands - 2017',
                '6th at the J22 Worlds in Scheveningen, The Netherlands - 2017',
                '1st at the Sneekweek in Sneek, The Netherlands - 2017',
                '3rd at the J22 Dutch Nationals in Medemblik, The Netherlands - 2017',
                '1st at the Sneekweek in Sneek, The Netherlands - 2018',
                '15th at the J22 worlds in Warnemunde, Germany - 2019'
              ]"
            />
            <CVItem
              title="J111 - The Red Herring"
              explanation="I joined the Red Herring team in 2018.  With this boat we sail the one-design circuit inEurope.  On board I’m mastan/bowman as well as responsible for navigation and allthe navigation software & hardware."
              year="2018-now"
              :regattas="[
                '2nd at the J111 European Championship in Cowes, England - 2018',
                '3rd at the Pre Worlds in Breskens, The Netherlands - 2018',
                '7th at the J111 Worlds in Breskens, The Netherlands - 2018',
                '1st at the Van Uden Reco Medemblik, The Netherlands - 2018',
                '4th at the J111 European Championship in Hamble, England - 2019',
                '3rd overall in the J111 European Circuit - 2019'
              ]"
            />
            <CVItem
              title="Agile 42 - Karma sailing team"
              explanation="The karma is custom made 42 foot boat designed by VMG Yachting.  I joined the teamright after the boat was build and she started racing for the first time.  Currently I’mtheir permanent bowman."
              year="2018-2019"
              :regattas="[
                '2nd at the Delta Weekend in Colijnsplaat, The Netherlands - 2019',
                '4th at the Dutch nationals IRC in Breskens, The Netherlands - 2019'
              ]"
            />
            <CVItem
              title="Others"
              explanation="Outside of the teams/boats above I have given my dedication to and have been a fulltime member of, I have also sailed some events with a one of team.  These include thefollowing:"
              :regattas="[
                'Offshore Sailing Worlds Scheveningen, The Netherlands - Trimmer on board theRed Herring J111 (11th overall and 5th in ORC)',
                'Copa del Rey 2019 Palma, Spain - Bowman on board Checkmate X-37 (16th)',
                '1000 miles on a VO65, Malta to Valencia (The Austrian Ocean Race Project)'
              ]"
            />
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <h3 class="subtitle">
              Matchracing & Teamracing
            </h3>
          </div>
          <div class="column">
            <CVItem
              title="Nestor Trophy (Dutch Student Team Racing circuit)"
              explanation="After joining the studentassociation I got invited to join them for team racing as a skipper."
              :regattas="[
                '4th at Monaco Team Sailing Event in 2010',
                'Winner Nestor Trophy November 2018, The Netherlands',
                'Winner Nestor Trophy July 2019, The Netherlands',
                'Winner 2019 overall season, The Netherlands'
              ]"
            />
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <h3 class="subtitle">
              Additional skills
            </h3>
          </div>
          <CVItem
            :regattas="[
              '' + 'Winch maintenance',
              'General boat maintenance',
              'On board electronics',
              'On board software'
            ]"
          />
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
import CVItem from '../components/CVItem'
export default {
  components: { CVItem },
  head() {
    return {
      title: `C.V. | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
