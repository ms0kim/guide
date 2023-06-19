<script>
import router from '../router';

export default {
  data() {
    return {
      menus: [
        {
          path: '/',
          name: 'nav.menu1',
        },
        {
          path: '/start',
          name: 'nav.menu2',
        },
        {
          path: '/pikavue',
          name: 'nav.menu3',
        },
      ],
      lang: false,
      selected: '',
      langSet: {
        'ko': "한국어",
        "en": "English"
      },
      subMenu: false,
    };
  },
  props : {
    scroll : Number
  },
  mounted() {
    this.initLoc()
  },
  methods: {
    isActive(idx) {
      return this.menus[idx].path[1] === this.$route.path[1];
    },
    initLoc() {
      this.selected = this.$store.getters.readLang.substr(0, 2);
    },
    setLoc(locale) {
      this.$store.commit('saveLang', locale);
      this.initLoc();
      // this.$i18n.global.locale.value = locale;
      this.lang = false;
      // location.reload();
    },
  },
};
</script>

<template>
  <header>
    <div class="leftMenu">
      <ul>
        <li v-for="(menu, idx) in menus" :key="idx" :class="{ active: isActive(idx) }">
          <router-link :to="menu.path">
            <p>{{ $t( menu.name ) }}</p>
          </router-link>
        </li>
        <li class="pikavue">
          <span :class="{ active: scroll > 200 && scroll < 850 }" @click="$emit('event1')">{{ $t( 'nav.guide1' ) }}</span>
          <span :class="{ active: scroll > 850 && scroll < 1250 }" @click="$emit('event2')">{{ $t( 'nav.guide2' ) }}</span>
          <span :class="{ active: scroll > 1250 && scroll < 2500 }" @click="$emit('event3')">{{ $t( 'nav.guide3' ) }}</span>
          <span :class="{ active: scroll > 2500 && scroll < 3800 }" @click="$emit('event4')">{{ $t( 'nav.guide4' ) }}</span>
          <span :class="{ active: scroll > 3800 }" @click="$emit('event5')">{{ $t( 'nav.guide5' ) }}</span>
        </li>
      </ul>
      <div class="lang">
        <div class="title" @click="lang = !lang">
          <i class="ri-global-line"></i>
          <p>{{ $t( 'nav.lang' ) }}</p>
        </div>

        <Transition>
          <div v-if="lang" class="langPop">
            <p :class="selected === 'ko' ? 'active' : ''" @click="[( $i18n.locale='ko' ), setLoc('ko')]">
              한국어
            </p>
            <p :class="selected === 'en' ? 'active' : ''" @click="[( $i18n.locale='en' ),setLoc('en')]">
              English
            </p>
          </div>
        </Transition>
      </div>
    </div>
    <ul class="rightMenu">
      <li>
        <div class="logo">
          <img src="../assets/media/gdflogo.svg" alt="" />GDF Platform Guide
        </div>
      </li>
      <li>
        <p>1.0 version</p>
      </li>
    </ul>

    <div class="mobileMenu">
      <div class="logo">
        <p>
          <img src="../assets/media/gdflogo.svg" alt="" />GDF Platform Guide
        </p>
        <i class="ri-menu-line" @click="subMenu = !subMenu"></i>
      </div>

      <transition>
        <ul v-if="subMenu">
          <li v-for="(menu, idx) in menus" :key="idx" :class="{ active: isActive(idx) }">
            <router-link :to="menu.path">
              <p>{{ $t( menu.name ) }}</p>
            </router-link>
          </li>
          <li class="bottomMenu">
            <button v-if="selected === 'en'" :class="selected === 'ko' ? 'active' : ''" @click="[( $i18n.locale='ko' ), setLoc('ko')]">
              <i class="ri-global-line"></i> {{ $t('nav.en') }}
            </button>
            <button v-if="selected === 'ko'" :class="selected === 'en' ? 'active' : ''" @click="[( $i18n.locale='en' ),setLoc('en')]">
              <i class="ri-global-line"></i> {{ $t('nav.ko') }}
            </button>
            <p>1.0 version</p>
          </li>
        </ul>
      </transition>
    </div>
  </header>
</template>
