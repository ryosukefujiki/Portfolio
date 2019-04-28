<template>
  <div class="TheProfileImg" @mouseenter="profileBackImgOpen" @touchstart="profileBackImgOpen">
    <div>
      <div class="TheAbout_ProfileTransition"></div>
      <div class="TheAbout_ProfileTransition"></div>
      <div class="TheAbout_ProfileTransition"></div>
      <div class="TheAbout_ProfileTransition"></div>
      <div class="TheAbout_ProfileTransition"></div>
      <div class="TheAbout_ProfileTransition"></div>
      <div class="TheAbout_ProfileTransition"></div>
      <div class="TheAbout_ProfileTransition"></div>
      <img :src="profileBackImg" alt class="TheAbout_ProfileBackImg" v-if="profileImgFlag">
      <img :src="profileImg" alt class="TheAbout_ProfileImg" v-if="!profileImgFlag">
    </div>
  </div>
</template>

<script>
import { TweenMax, Elastic, Expo, Back } from "gsap";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      profileImg: "/about/profile3.png",
      profileBackImg: "/about/profile_back.png",
      profileImgFlag: false,
    };
  },
  computed: {
    ...mapGetters({
      hiddened: "about/profileHiddened",
      opened: "about/profileOpened"
    })
  },
  methods: {
    profileBackImgOpen: function() {
      this.$store.commit("about/profileOpen");
    },
    profileBackImgHidden: function() {
      this.$store.commit("about/profileHidden");
    }
  },
  watch: {
    async opened(val) {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".TheAbout_ProfileTransition", 0.4, {
          left: "0px",
          ease: Expo.easeOut,
          startAt: {
            left: "-480px"
          }
        },0.04);
      });
      await this.$delay(550);
      this.profileImgFlag = !this.profileImgFlag
      await this.$delay(550);
      requestAnimationFrame(() => {
        TweenMax.staggerTo(".TheAbout_ProfileTransition", 0.4, {
          left: "480px",
          ease: Expo.easeIn,
          startAt: {
            left: "0px"
          }
        },0.04);
      });
    },
    async hiddened(val) {
      
    }
  }
};
</script>

<style lang="scss">
.TheProfileImg {
  overflow: hidden;
}
.TheProfileImg div {
  position: relative;
  // overflow: hidden;
}
.TheAbout_ProfileImg {
  width: 480px;
  height: 320px;
  box-shadow: 0px 0px 4px 0px rgba(155, 155, 155, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.TheAbout_ProfileBackImg {
  width: 480px;
  height: 320px;
  box-shadow: 0px 0px 4px 0px rgba(155, 155, 155, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.TheAbout_ProfileTransition {
  width: 480px;
  height: 40px;
  position: absolute;
  top: 0;
  left: -480px;
  z-index: 3;
  background: #222222;
  opacity: 1;
}
// .TheAbout_ProfileTransition_Second{
//   width: 480px;
//   height: 80px;
//   position: absolute;
//   top: 0px;
//   left: -480px;
//   z-index: 3;
//   background: #9b9b9b;
// }

@media screen and (max-width: 1024px) {
  /* 1024pxまでの幅の場合に適応される */
  .TheAbout_ProfileBackImg {
    width: 360px;
    height: 240px;
  }
  .TheAbout_ProfileTransition {
    width: 360px;
    height: 240px;
  }
  .TheAbout_ProfileImg {
    width: 360px;
    height: 240px;
  }
}
@media screen and (max-width: 768px) {
  .TheAbout_ProfileBackImg {
    width: 300px;
    height: 200px;
  }
  .TheAbout_ProfileTransition {
    width: 300px;
    height: 200px;
  }
  .TheAbout_ProfileImg {
    width: 300px;
    height: 200px;
  }
}
@media screen and (max-width: 480px) {
  .TheAbout_ProfileBackImg {
    width: 320px;
    height: 212px;
  }
  .TheAbout_ProfileTransition {
    width: 320px;
    height: 212px;
  }
  .TheAbout_ProfileImg {
    width: 320px;
    height: 212px;
  }
}
@media screen and (max-width: 320px) {
  .TheAbout_ProfileBackImg {
    width: 300px;
    height: 200px;
  }
  .TheAbout_ProfileTransition {
    width: 300px;
    height: 200px;
  }
  .TheAbout_ProfileImg {
    width: 300px;
    height: 200px;
  }
}
</style>

