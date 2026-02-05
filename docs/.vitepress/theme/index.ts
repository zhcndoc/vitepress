import { h } from 'vue'
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './styles.css'

export default {
  Layout() {
    return h(Theme.Layout, null, {
      'aside-outline-before': () =>
        h('div', {
          class: 'wwads-cn wwads-vertical',
          style: 'max-width: 200px; margin-top: 0; margin-bottom: 1rem;',
          'data-id': '354'
        }),
      'doc-after': () =>
        h('div', {
          class: 'wwads-cn wwads-horizontal',
          style: 'width: 100%; margin-top: 1rem;',
          'data-id': '354'
        })
    })
  }
}
