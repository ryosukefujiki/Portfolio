<template>
 <div class="TheError" :style="backgroundStyle">
    <h1 class="TheError_Status" :style="headingStyle">Sorry</h1>
    <p v-if="!langEn" class="TheError_Message" :style="textStyle">🙇‍♂️お使いのブラウザには対応しておりません</p>
    <p v-if="langEn" class="TheError_Message" :style="textStyle">🙇‍♂️We don't support your browser</p>
    <p to="/" class="TheError_Message" v-if="!langEn" :style="textStyle">Chrome, Safari, Firefoxをお使いください</p>
    <p to="/" class="TheError_Message" v-if="langEn" :style="textStyle">Please use Chrome, Safari, Firefox</p>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheFooter from "~/components/TheHeader/TheFooter.vue";

export default {
  components: {
    TheFooter,
  },
  props: ['error'],
  computed: {
    ...mapGetters({
      colorBlack: "nav/colorBlack",
      langEn: "nav/langEn"
    })
  },
  data () {
    return {
      backgroundStyle:{
        'background-color': this.$store.state.nav.style['background-color'],
      },
      headingStyle: {
        'color': this.$store.state.nav.style['heading-color'],
      },
      textStyle: {
        'color': this.$store.state.nav.style['text-color'],
      }
    }
  },
  watch: {
    async colorBlack(val){
      this.backgroundStyle["background-color"] = this.$store.state.nav.style["background-color"]
      this.headingStyle['color'] = this.$store.state.nav.style['heading-color']
      this.textStyle['color'] = this.$store.state.nav.style['text-color']
    },
    async langEn(val){
    }
  },
}
</script>


<style lang="scss" scoped>
.default {
  height: 100%;
}
.TheFooter{
  position: fixed;
  bottom: 0;
  left: 0;
}

.TheError{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 240px;
}
.TheError_Status{
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  color: #272727;
  font-size: 160px;
  margin-bottom: 32px;
}

.TheError_Message{
  font-family: "Noto Sans JP", "Hiragino Kaku Gothic Pro", Verdana, Arial,
    Helvetica, "ヒラギノ角ゴ Pro W3", "Osaka", "ＭＳ Ｐゴシック", sans-serif;
  font-size: 16px;
  color: #9b9b9b;
  margin-bottom: 20px;
}

.TheBackgroundColor {
  position: fixed;
  z-index: -12;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.TheBackgroundInside {
  width: 94%;
  height: 100%;
  margin: 0 auto;
  background: #3a3a3a;
}

@media screen and (max-width: 1024px) {
  .TheError_Status{
    font-size: 80px;
  }
    /* 1024pxまでの幅の場合に適応される */
    .TheError{
      padding-top: 240px;
    }

}
@media screen and (max-width: 768px) {
  .TheError_Status{
    font-size: 80px;
  }
  .TheError{
      padding-top: 240px;
    }
}
@media screen and (max-width: 480px) {
  .TheError_Status{
    font-size: 80px;
  }
  .TheError{
      padding-top: 240px;
    }
}
@media screen and (max-width: 320px) {
  .TheError_Status{
    font-size: 80px;
  }
  .TheError_Message{
    font-size: 12px;
  }
  .TheError{
      padding-top: 160px;
    }
}

</style>
