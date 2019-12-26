import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import {
  faComment,
  faFilePowerpoint
} from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faAdversal } from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'
import CategoriesGrid from '../components/grids/CategoriesGrid'
import DisqusComments from '../components/DisqusComments'
import IntersectionObserver from '../components/IntersectionObserver'
import LoadingSpinner from '../components/LoadingSpinner'
import MainSection from '../components/MainSection'
import NewsLetterSlideOut from '../components/NewsLetterSlideOut'
import PostsGrid from '../components/grids/PostsGrid'
import SiteFooter from '../components/SiteFooter'
import SiteHero from '../components/SiteHero'
import SiteLogo from '../components/SiteLogo'
import SiteNav from '../components/SiteNav'
import ResourceGrid from '~/components/grids/ResourceGrid'

library.add(
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faComment,
  faTwitter,
  faInfoCircle,
  faAdversal,
  faFilePowerpoint
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.component(CategoriesGrid.name, CategoriesGrid)
Vue.component(DisqusComments.name, DisqusComments)
Vue.component(IntersectionObserver.name, IntersectionObserver)
Vue.component(LoadingSpinner.name, LoadingSpinner)
Vue.component(MainSection.name, MainSection)
Vue.component(NewsLetterSlideOut.name, NewsLetterSlideOut)
Vue.component(PostsGrid.name, PostsGrid)
Vue.component(SiteFooter.name, SiteFooter)
Vue.component(SiteHero.name, SiteHero)
Vue.component(SiteLogo.name, SiteLogo)
Vue.component(SiteNav.name, SiteNav)
Vue.component(ResourceGrid.name, ResourceGrid)
