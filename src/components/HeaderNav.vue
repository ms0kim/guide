<script>
import router from '../router';

export default {
  data() {
    return {
      menus: [
        {
          path: '/',
          name: '소개',
        },
        {
          path: '/start',
          name: '시작하기',
        },
        {
          path: '/pikavue',
          name: 'Pikavue 사용하기',
        },
      ],
      lang: false,
      ko: false,
      en: false,
      subMenu: false,
    };
  },
  mounted() {
    this.langSet();
  },
  methods: {
    isActive(idx) {
      return this.menus[idx].path[1] === this.$route.path[1];
    },
    langSet() {
      if (this.$i18n.locale == 'ko') {
        this.ko = true;
      } else {
        this.ko = false;
      }
      if (this.$i18n.locale == 'en-US') {
        this.en = true;
      } else {
        this.en = false;
      }
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
            <p>{{ menu.name }}</p>
          </router-link>
        </li>
        <li class="pikavue">
          <span>가이드 확인하기</span>
          <span>업로드하기</span>
          <span>Pikavue AI Image Guide</span>
          <span>Pikavue AI Video Guide</span>
          <span>삭제하기</span>
        </li>
      </ul>
      <div class="lang">
        <div class="title" @click="lang = !lang">
          <i class="ri-global-line"></i>
          <p>Languages</p>
        </div>

        <Transition>
          <div v-if="lang" class="langPop">
            <p :class="ko ? 'active' : ''" @click="[($i18n.locale = 'ko'), langSet()]">
              한국어
            </p>
            <p :class="en ? 'active' : ''" @click="[($i18n.locale = 'en-US'), langSet()]">
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
              <p>{{ menu.name }}</p>
            </router-link>
          </li>
          <li class="bottomMenu">
            <button v-if="$i18n.locale === 'en-US'" @click="[($i18n.locale = 'ko'), langSet()]">
              <i class="ri-global-line"></i> 한국어
            </button>
            <button v-if="$i18n.locale === 'ko'" @click="[($i18n.locale = 'en-US'), langSet()]">
              <i class="ri-global-line"></i> English
            </button>
            <p>1.0 version</p>
          </li>
        </ul>
      </transition>
    </div>
  </header>
</template>
