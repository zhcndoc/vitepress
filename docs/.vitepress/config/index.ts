import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'
import { pt } from './pt'
import { ru } from './ru'
import { es } from './es'
import { ko } from './ko'

export default defineConfig({
  ...shared,
  locales: {
    en: { label: 'English', ...en },
    root: { label: '简体中文', ...zh },
    pt: { label: 'Português', ...pt },
    ru: { label: 'Русский', ...ru },
    es: { label: 'Español', ...es },
    ko: { label: '한국어', ...ko }
  }
})
