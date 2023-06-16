<script>
import HeaderNav from './HeaderNav.vue';

export default {
  data() {
    return {
      scrollPosition: null,
    }
  },
  components: {
    HeaderNav
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    goScroll1() {
      this.$refs.scroll1.scrollIntoView({ befavior: "smooth" })
    },
    goScroll2() {
      this.$refs.scroll2.scrollIntoView({ befavior: "smooth" })
    },
    goScroll3() {
      this.$refs.scroll3.scrollIntoView({ befavior: "smooth" })
    },
    goScroll4() {
      this.$refs.scroll4.scrollIntoView({ befavior: "smooth" })
    },
    goScroll5() {
      this.$refs.scroll5.scrollIntoView({ befavior: "smooth" })
    }
  },
}
</script>

<template>
  <HeaderNav :scroll="scrollPosition" @event1="goScroll1" @event2="goScroll2" @event3="goScroll3" @event4="goScroll4" @event5="goScroll5"/>
  <div class="content">
    <h4>{{ $t( 'pikavue.title' ) }}</h4>
    <img src="../assets/media/imageview.jpg" alt="" />
    <div ref="scroll1"></div>
    <div class="solid"></div>
    <h4>{{ $t( 'pikavue.guide' ) }}</h4>
    <img src="../assets/media/guidebtn.png" id="btn" alt="" />
    <p>
      {{ $t( 'pikavue.guide_text' ) }}
      <b>{{ $t( 'pikavue.guide_text_bold' ) }}</b>
    </p>
    <div ref="scroll2"></div>
    <div class="solid"></div>
    <h4>{{ $t( 'pikavue.upload' ) }}</h4>
    <img src="../assets/media/upbtn.png" id="btn" alt="" />
    <p>
      {{ $t( 'pikavue.upload_text' ) }}
      <b>{{ $t( 'pikavue.upload_text_bold' ) }}</b>
    </p>
    <div ref="scroll3"></div>
    <div class="solid"></div>
    <h4>{{ $t( 'pikavue.image' ) }}</h4>
    <div class="imgs">
      <img src="../assets/media/01.png" alt="" />
      <img src="../assets/media/02.png" alt="" />
    </div>
    <div class="imgs">
      <img src="../assets/media/03.png" alt="" />
      <img src="../assets/media/04.png" alt="" />
    </div>
    <div ref="scroll4"></div>
    <div class="solid"></div>
    <h4>{{ $t( 'pikavue.video' ) }}</h4>
    <div class="imgs">
      <img src="../assets/media/01.png" alt="" />
      <img src="../assets/media/05.png" alt="" />
    </div>
    <div class="imgs">
      <img src="../assets/media/06.png" alt="" />
      <img src="../assets/media/07.png" alt="" />
    </div>
    <div ref="scroll5"></div>
    <div class="solid"></div>
    <h4>{{ $t( 'pikavue.delete' ) }}</h4>
    <img src="../assets/media/imgbtn.png" id="img" alt="" />
    <p class="pbr">
      {{ $t( 'pikavue.delete_text' ) }}
      <b>{{ $t( 'pikavue.delete_text_bold' ) }}</b>
      {{ $t( 'pikavue.delete_text2' ) }}
    </p>
    <img src="../assets/media/allbtn.png" id="btn" alt="" />
    <img src="../assets/media/delbtn.png" id="btn" alt="" />
    <p>
      {{ $t( 'pikavue.delete_text3' ) }}
    </p>
  </div>
</template>
