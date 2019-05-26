<template>
<div class='TheTransition TheColorTransition'>
  <div class='TheTransition_Background TheColor_Background' ref='background' v-bind:class="{backgroundBlack: !colorBlackEnter}"></div>
  <div class='TheTransition_Background TheColor_Background' ref='background' v-bind:class="{backgroundBlack: !colorBlackEnter}"></div>
    <div class='TheTransition_Background TheColor_Background' ref='background' v-bind:class="{backgroundBlack: !colorBlackEnter}">
        <p class='TheTransition_Category' ref='category'>{{title}}</p>
    </div>
    <div class='TheTransition_Background TheColor_Background' ref='background' v-bind:class="{backgroundBlack: !colorBlackEnter}"></div>
  <div class='TheTransition_Background TheColor_Background' ref='background' v-bind:class="{backgroundBlack: !colorBlackEnter}"></div>
</div>
</template>


<script>

import {mapGetters} from 'vuex'
import {TweenMax, Expo, Elastic} from 'gsap'

export default {
  data() {
    return {
      title: "Dark Mode"
    };
  },
  computed: {
    ...mapGetters({
      colorBlackEnter: 'nav/colorBlackEnter',
      langEnEnter: 'nav/langEnEnter'
    })
  },
  watch: {
    async colorBlackEnter (val) { // ステートの`entered`が切り替わるたび、この処理が実行される
      if(this.colorBlackEnter == true){
        this.title = "Dark Mode"
      }else{
        this.title = "Light Mode"
      }
      this.enter() // `entered`の値によってアニメーションを書き分け🔥
      await this.$delay(550)
      this.$store.commit("nav/colorBlackClick")
      await this.$delay(1000)
      this.leave()
      await this.$delay(1000)
      this.set()
    },
    async langEnEnter(val){
      if(this.langEnEnter == true){
        this.title = "English Language"
      }else if(this.langEnEnter == false){
        this.title = "Japanese Language"
      }
      this.enter() // `entered`の値によってアニメーションを書き分け🔥
      await this.$delay(550)
      this.$store.commit("nav/langEnClick")
      await this.$delay(1000)
      this.leave()
      await this.$delay(1000)
      this.set()
    }
  },
  methods: { // アニメーションの宣言はここ
    enter () { // `entered`が`true`になったとき発火
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".TheColor_Background", 0.55, {
          x: '0%',
          ease: Expo.easeOut
        },0.04)
      })
    },
    leave () { // `entered`が`false`になったとき発火
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".TheColor_Background", 0.55, {
          x: '100%',
          ease: Expo.easeIn
        },0.04)
      })
      // this.$store.commit('about/aboutMove')
    },
    async set (){
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".TheColor_Background", 0, {
          opacity: '0%',
          ease: Expo.easeOut
        },0.04)
      })
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".TheColor_Background", 0, {
          x: '-100%',
          ease: Expo.easeOut
        },0.04)
      })
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".TheColor_Background", 0, {
          opacity: '100%',
          ease: Expo.easeOut
        },0.04)
      })
    }
  }
}
</script>


<style lang='scss' scoped>
.TheTransition {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.TheTransition_Background {
    position: relative;
    top: 0%;
    left: 0;
    width: 100%;
    height: 20%;
    background: #272727;
    transform: translateX(-100%);
    transform-origin: left center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-content: space-around;
}


.TheTransition_Category {
    color: #9b9b9b;
    text-align: center;
    font-size: 28px;
    z-index: 12;
    font-weight: bold;
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    font-style: italic;
    // letter-spacing: 8px;
  }
.TheTransition_Title {
    color: #D2DADF;
    text-align: center;
    z-index: 12;
    font-size: 20px;
    margin-top: 20px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI",
    "Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
}
.backgroundBlack{
  background: #ffffff;
}
.textBlack{
  color: #D2DADF;
}

@media screen and (max-width: 480px) {
  .TheTransition_Category {
    font-size: 22px;
  }
  .TheTransition_Title {
    margin-top: 8px;
    font-size: 16px;
  }
}

</style>
