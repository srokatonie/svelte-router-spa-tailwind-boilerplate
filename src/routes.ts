import Layout from './views/components/Layout.svelte'
import Home from './views/front/Home.svelte'
import About from './views/front/About.svelte'
import Faq from './views/front/Faq.svelte'


const routes = [
  { name: '/', component: Home, layout: Layout },
  { name: 'about', component: About, layout: Layout },
  { name: 'faq', component: Faq, layout: Layout },
]

export { routes }