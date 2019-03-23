<template>
<div class="TheHome" v-scroll="handleScroll">
  <TheHero class="TheHero"></TheHero>
  <TheScrollBtn v-scroll-to="'#anchor'" class="TheScrollBtn_Ref"></TheScrollBtn>
  <div class="TheHome_Container" id="anchor">
        <TheHiveButton class="TheTransitionBtn"></TheHiveButton>
        <TheFamilybookButton class="TheTransitionBtn"></TheFamilybookButton>
        <TheLineandballButton class="TheTransitionBtn"></TheLineandballButton>
        <ThePlayfulfesButton class="TheTransitionBtn"></ThePlayfulfesButton>
        <TheScrapboardButton class="TheTransitionBtn"></TheScrapboardButton>
  </div>
   <TheFooter></TheFooter>
</div>
</template>

<script>
import TheHero from '~/components/TheHome/TheHero.vue'
import TheScrollBtn from '~/components/TheHeader/TheScrollBtn.vue'
import TheFooter from '~/components/TheHeader/TheFooter.vue'
import TheHiveButton from '~/components/TheHome/TheHiveButton.vue'
import TheFamilybookButton from '~/components/TheHome/TheFamilybookButton.vue'
import TheLineandballButton from '~/components/TheHome/TheLineandballButton.vue'
import ThePlayfulfesButton from '~/components/TheHome/ThePlayfulfesButton.vue'
import TheScrapboardButton from '~/components/TheHome/TheScrapboardButton.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    TheHero,
    TheScrollBtn,
    TheFooter,
    TheHiveButton,
    TheFamilybookButton,
    TheLineandballButton,
    ThePlayfulfesButton,
    TheScrapboardButton,
  },
  computed: {
    ...mapGetters({
      homeMoved: 'homeMoved'
    })
  },
  watch: {
    async homeMoved (val) {
      this.targetMove()
    }
  },
  methods: {
    routing(url){
      this.$router.push(url)
    },
    handleScroll: function(evt, el) {
      console.log(window.scrollY)
      if (window.scrollY > 50) {
          console.log("超えた！")
          this.$store.commit('homeMove')
      }
      return window.scrollY > 50
    },
    targetMove(){
      console.log("超えた！")
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.TheTransitionBtn', 4, {
          y: 0,
          opacity: 1,
          ease: Elastic.easeOut.config(1, 0.3),
          startAt: {
            y: '30px',
            opacity: 0
          }
        }, 0.1)
      })
      requestAnimationFrame(() => {
        TweenMax.to('.TheScrollBtn_Ref', 1.0, {
          opacity: 0,
          ease: Expo.easeOut,
          startAt: {
            opacity: 1
          }
        })
      })
    },
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">

$background-color: #FCFCFC;

.TheHome{
  height: 100%;
  margin-bottom: 48px;
  background: $background-color;
}

.heading{
  font-size: 48px;
  color: #272727;
  display: block;
  padding-top: 320px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-style: italic;
}

.TheHome_Container{
  // padding-top: 40px;
  margin: 0 auto;
  width: 860px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 2;
}

.TheTransitionBtn{
  opacity: 0;
}






@media screen and (max-width: 1024px) {
    /* 1024pxまでの幅の場合に適応される */
    .TheHome_Container{
       width: 800px;
    }

}
@media screen and (max-width: 768px) {
    /* 768pxまでの幅の場合に適応される */
    .TheHome_Container{
      width: 720px;
      margin: 0 auto;
    }

    // .TheHome_WorkBg{
    //   width: 670px;
    //   height: 419px;
    // }

    // .TheHome_WorkTrim{
    //   width: 626px;
    //   height: 375px;
    //   position: relative;
    // 	left: 22px;
    // 	top: 22px;
    // }

}
@media screen and (max-width: 480px) {
    /* 480pxまでの幅の場合に適応される */


    .heading{
      font-size: 32px;
      font-family: 'Noto Sans', sans-serif;
    }


    .TheHome_Container{
      width: 320px;
    }

    


}
@media screen and (max-width: 320px) {
    /* 320pxまでの幅の場合に適応される */
    .TheHome_Container{
      width: 300px;
      margin: 0 auto;
    }
    .TheHome_Work{
      width: 280px;
    }

    .TheHome_WorkBg{
      width: 280px;
      height: 210px;
    }

    .TheHome_WorkTrim{
      width: 260px;
      height: 195px;
      position: relative;
    	left: 10px;
    	top: 7px;
    }

    .TheHome_WorkImg {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: auto;
      height: 100%;
    }
}

</style>

