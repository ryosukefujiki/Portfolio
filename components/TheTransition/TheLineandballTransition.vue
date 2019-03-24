<template>
<div class='TheTransition TheLineandballTransition'>
    <div class='TheTransition_Background' ref='background'>
        <p class='TheTransition_Category' ref='category'>Game Design</p>
        <p class='TheTransition_Title' ref='title'>LINE and BALL</p>
    </div>
</div>
</template>


<script>
import {mapGetters} from 'vuex'
import {TweenMax, Expo, Elastic} from 'gsap'


export default {
computed: {
    ...mapGetters({
      transitionEnter: 'lineandball/enter'
    })
  },
  watch: {
    async transitionEnter (val) { // ステートの`entered`が切り替わるたび、この処理が実行される
      console.log("TheTransitionComponent")
      this.enter() // `entered`の値によってアニメーションを書き分け🔥
      await this.$delay(550)
      this.$router.push("/lineandball")
      await this.$delay(550)
      this.leave()
      await this.$delay(1000)
      this.set()
    }
  },
  methods: { // アニメーションの宣言はここ
    enter () { // `entered`が`true`になったとき発火
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.background, 0.55, {
          x: '0%',
          ease: Expo.easeOut
        })
      })
    },
    leave () { // `entered`が`false`になったとき発火
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.background, 0.55, {
          x: '100%',
          ease: Expo.easeIn
        })
      })
      this.$store.commit('lineandball/fadeIn')
    },
    async set (){
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.background, 0, {
          opacity: '0%',
          ease: Expo.easeOut
        })
      })
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.background, 0, {
          x: '-100%',
          ease: Expo.easeOut
        })
      })
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.background, 0, {
          opacity: '100%',
          ease: Expo.easeOut
        })
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
    width: 100%;
    height: 100%;
    background: #9EE970;
    transform: translateX(-100%);
    transform-origin: left center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-content: space-around;
}




.TheTransition_Category {
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    z-index: 12;
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    font-style: italic;
  }
.TheTransition_Title {
    color: #ffffff;
    text-align: center;
    z-index: 12;
    font-size: 20px;
    margin-top: 20px;
    font-weight: 400;
    font-family: 'Noto Sans JP', "Hiragino Kaku Gothic Pro", Verdana, Arial, Helvetica, "ヒラギノ角ゴ Pro W3", "Osaka", "ＭＳ Ｐゴシック", sans-serif;
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
