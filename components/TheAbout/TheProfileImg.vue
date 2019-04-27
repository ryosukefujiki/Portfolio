<template>
  <div class="TheProfileImg" @mouseenter="profileBackImgOpen" @touchstart="profileBackImgOpen" @mouseleave="profileBackImgHidden" @touchend="profileBackImgOpen">
    <div>
      <div class="TheAbout_ProfileTransition"></div>
      <img :src="profileBackImg" alt class="TheAbout_ProfileBackImg">
      <img :src="profileImg" alt class="TheAbout_ProfileImg">
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
      profileBackImg: "/about/profile_back.png"
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
      console.log("open");
      this.$store.commit("about/profileOpen");
    },
    profileBackImgHidden: function() {
      console.log("close");
      this.$store.commit("about/profileHidden");
    }
  },
  watch: {
    async opened(val) {
      requestAnimationFrame(() => {
        TweenMax.to(".TheAbout_ProfileTransition", 0.55, {
          left: "0px",
          ease: Expo.easeOut,
          delay: 0.1,
          startAt: {
            left: "-480px"
          }
        });
      });
      await this.$delay(400);
      requestAnimationFrame(() => {
        TweenMax.to(".TheAbout_ProfileBackImg", 0, {
          opacity: 1,
          ease: Expo.easeOut,
          startAt: {
            opacity: 0
          }
        });
      });
      await this.$delay(400);
      requestAnimationFrame(() => {
        TweenMax.to(".TheAbout_ProfileTransition", 0.55, {
          left: "480px",
          ease: Expo.easeIn,
          startAt: {
            left: "0px"
          }
        });
      });
    },
    async hiddened(val) {
      requestAnimationFrame(() => {
        TweenMax.to(".TheAbout_ProfileTransition", 0.55, {
          left: "0px",
          ease: Expo.easeOut,
          delay: 0.1,
          startAt: {
            left: "-480px"
          }
        });
      });
      await this.$delay(700);
      requestAnimationFrame(() => {
        TweenMax.to(".TheAbout_ProfileBackImg", 0, {
          opacity: 0,
          ease: Expo.easeOut,
          startAt: {
            opacity: 1
          }
        });
      });
      await this.$delay(400);
      requestAnimationFrame(() => {
        TweenMax.to(".TheAbout_ProfileTransition", 0.55, {
          left: "480px",
          ease: Expo.easeIn,
          startAt: {
            left: "0px"
          }
        });
      });
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
  opacity: 0;
}
.TheAbout_ProfileTransition {
  width: 480px;
  height: 320px;
  position: absolute;
  top: 0;
  left: -480px;
  z-index: 3;
  background: #222222;
  opacity: 1;
}

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

