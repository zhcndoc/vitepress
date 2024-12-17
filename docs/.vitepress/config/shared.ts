import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import { search as ptSearch } from './pt'
import { search as ruSearch } from './ru'
import { search as esSearch } from './es'
import { search as koSearch } from './ko'
import { search as faSearch } from './fa'

export const shared = defineConfig({
  title: 'VitePress',

  rewrites: {
    'zh/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://vitepress.zhcndoc.com',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
    ['meta', { property: 'og:site_name', content: 'VitePress' }],
    ['meta', { property: 'og:image', content: 'https://vitepress.zhcndoc.com/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://vitepress.zhcndoc.com/' }],
    ['script', { src: 'https://www.zhcndoc.com/js/common.js', async: '' }]
  ],

  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local',
      options: {
        appId: '8J64VVRP8K',
        apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
        indexName: 'vitepress',
        locales: {
          ...zhSearch,
          ...ptSearch,
          ...ruSearch,
          ...esSearch,
          ...koSearch,
          ...faSearch
        }
      }
    }

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})
