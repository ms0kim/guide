import { createI18n } from 'vue-i18n'
import ko from './locales/ko.json'
import en from './locales/en.json'
import store from '@/store/store'

store.commit('loadLang')
var init_lang = store.getters.readLang
if (init_lang === undefined | !init_lang) {
  init_lang = navigator.language == 'ko'? 'ko': "en"
  store.commit('saveLang', init_lang)
}

export const i18n = new createI18n({
  locale: init_lang,
  fallbacklocale: 'en', 
  messages: {
    'ko': ko,
    'en': en
  },
})