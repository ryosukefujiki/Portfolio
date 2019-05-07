<template>
 <div class="TheError">
    <h1 class="TheError_Status" :style="headingStyle">{{error.statusCode}}</h1>
    <p v-if="error.statusCode === 404 && !langEn" class="TheError_Message" :style="textStyle">🙇‍♂️ページが見つかりませんでした</p>
    <p v-else-if="error.statusCode === 404 && langEn" class="TheError_Message" :style="textStyle">🙇‍♂️page can not be found</p>
    <p v-else class="TheError_Message" :style="textStyle">🙇‍♂️Something wrong...</p>
    <nuxt-link to="/" class="TheError_Message" v-if="!langEn" :style="textStyle">ホームに戻る</nuxt-link>
    <nuxt-link to="/" class="TheError_Message" v-if="langEn" :style="textStyle">Back to Home</nuxt-link>
    <div class="TheBackgroundColor" :style="style">
      <div class="TheBackgroundInside" v-if="colorBlack"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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


<style lang="scss">
.TheError{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.TheError_Status{
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  color: #272727;
  font-size: 160px;
  margin-bottom: 12px;
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

</style>
