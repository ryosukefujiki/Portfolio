<template>
  <div class="TheFirstview" v-if='!killed'>
    <!-- <p class="TheFirstview_Text TheFirstview_PercentText">{{number}}%</p> -->
    <p class="TheFirstview_Text TheFirstview_PercentText"><img :src="logoImg" alt="" class="TheFirstview_Logo"><img :src="nameImg" alt="" class="TheFirstview_Name"></p>
    <p class="TheFirstview_Text">{{loadingText}}</p>
    <BarLoader class="BarLoader"></BarLoader>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { BarLoader } from '@saeris/vue-spinners'

export default {
  data(){
    return {
      number: 0,
      intervalId: undefined,
      logoImg: "/home/logo.png",
      nameImg: "/home/name.png",
      loadingText: "LOADING NOW ...",
    }
  },
  components: {
    BarLoader
  },
  computed: {
    ...mapGetters({
      killed: 'firstview/killed',
      completed: 'firstview/completed',
      entered: 'firstview/entered'
    })
  },
  mounted() {
    let self = this;
    this.intervalId = setInterval(function() {
      self.number += 1
      if(self.number == 6){
         self.$store.commit("firstview/complete");
         self.loadingText = "COMPLETED"
        //  self.$store.commit("homeFadeIn");
        //  self.$store.commit("about/aboutMoved");
      }
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
   watch: {
    async completed(val) {
      requestAnimationFrame(() => {
        TweenMax.to(
          ".TheFirstview_Logo",
          1,
          {
            x: 0,
            opacity: 1,
            ease: Expo.easeOut,
            startAt: {
              x: "40px",
            }
          },
          0.1
        );
      });
      requestAnimationFrame(() => {
        TweenMax.to(
          ".BarLoader",
          1,
          {
            opacity: 0,
            ease: Expo.easeOut,
          },
          0.1
        );
      });
      requestAnimationFrame(() => {
        TweenMax.to(
          ".TheFirstview_Name",
          1,
          {
            x: 0,
            opacity: 1,
            display: "inline-block",
            ease: Expo.easeOut,
            startAt: {
              x: -20,
            },
          },
          0.1
        );
      });
      this.$store.commit("firstview/enter");
    },
     async entered(val) {
       await this.$delay(1500);
       console.log("呼ばれた")
       requestAnimationFrame(() => {
        TweenMax.to(".TheFirstview", 0.55, {
          x: '100%',
          ease: Expo.easeIn,
          startAt: {
              x: '0%',
          },
        })
      });
      // await this.$delay(3000);
      // this.$store.commit("homeFadeIn");
      // this.$store.commit("about/aboutMoved");
      await this.$delay(3000);
      this.$store.commit("firstview/kill");
     }
   },
}
</script>

<style lang="scss">
.TheFirstview{
  width: 100%;
  height: 100%;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  overflow: hidden;
  padding-top: 320px;
}
.TheFirstview_Text{
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 12px;
}
.TheFirstview_Logo{
  width: 40px;
  height: 40px;
  display: inline-block;
  animation: rotate 3000ms ease-out 2;
}
.TheFirstview_Name{
  padding-bottom: 6px;
  height: 20px;
  display: none;
  opacity: 0;
  margin-left: 40px;
}

// @keyframes rotate {
//   0%  {transform: rotateZ(0deg);}
//   25% {transform: rotateZ(90deg);}
//   50% {transform: rotateZ(180deg);}
//   75%  {transform: rotateZ(270deg);}
//   100%  {transform: rotateZ(360deg);}
// }

.TheFirstview_PercentText{
  font-size: 24px;
}


.BarLoader{
  margin: 0 auto;
}

@media screen and (max-width: 1024px) {
  .TheFirstview{
    padding-top: 640px;
  }
}

@media screen and (max-width: 768px) {
  .TheFirstview{
    padding-top: 480px;
  }
}

@media screen and (max-width: 480px) {
  .TheFirstview{
    padding-top: 320px;
  }
}

@media screen and (max-width: 320px) {
  .TheFirstview{
    padding-top: 280px;
  }
}
</style>


