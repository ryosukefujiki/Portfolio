<template>
  <div class="TheHero">
    <div class="TheHero_Img">
      <div class="TheHero_WorkTrim">
        <img :src="homeImg" class="TheHero_WorkImg" @click="heroClick()" @mouseenter="mouseOver()" @mouseleave="mouseLeave()">
        <div v-bind:style="{background:backgroundColor}" class="TheHero_WorkBg_FadeIn"></div>
      </div>
      <div class="TheHero_WorkBg TheHero_WorkBg_Second"></div>
      <div class="TheHero_WorkBg TheHero_WorkBg_Third"></div>
      <h1 class="TheHero_Heading TheHero_Heding_Design">
        <span>Design</span>
      </h1>
      <h2 class="TheHero_Heading TheHero_Heding_Copy">
        <span class="TheHero_Heading_Text">{{headingCopy}}</span>
        <span class="TheHero_Bg" v-bind:style="{background:backgroundColor}"></span>
      </h2>
      <!-- <a class="TheHero_AnchorText">
        Show me more
        <span class="TheHero_Arrow">→</span>
      </a> -->
      <img :src="pointImg" class="TheHero_PointImg TheHero_PointImg_Right">
      <img :src="pointImg" class="TheHero_PointImg TheHero_PointImg_Left">
      <!-- <TheBackground class="TheBackground"></TheBackground> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheBackground from "~/components/TheHome/TheBackground.vue";

export default {
  components: {
    TheBackground
  },
  data() {
    return {
      pointImg: "/home/point.png",
      homeImg: "/home/familybook_home.png",
      familybookHomeImg: "/home/familybook_home.png",
      lineandballHomeImg: "/home/lineandball_home.png",
      playfulfesHomeImg: "/home/playfulfes_home.png",
      scrapboardHomeImg: "/home/scrapboard_home.png",
      hiveHomeImg: "/home/hive_home.png",
      foxHomeImg: "/home/fox_home.png",
      norenHomeImg: "/home/noren_white_home.png",
      intervalId: undefined,
      familybookFlag: true,
      lineandballFlag: false,
      backgroundColor: "#9EE970",
      familybookColor: "#82c3e0",
      lineandballColor: "#9EE970",
      playfulfesColor: "#EEC91D",
      scrapboardColor: "#FB8685",
      hiveColor: "#F7D24E",
      norenColor: "#272C56",
      // foxColor: "#F79CAE",
      foxColor: "#F8C4D0",
      headingCopy: "COMMUNICATION",
      width: null,
      height: null
      // backgroundWidth: "1024px",
      // familybookWidth: "1024px",
      // lineandballWidth: "360px"
    };
  },
  mounted() {
    window.addEventListener("mousemove", this.mouseIsMoving);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    let self = this;
    this.intervalId = setInterval(function() {
      self.changeHero();
    }, 5000);
  },
  destroyed: function() {
    window.removeEventListener("mousemove", this.mouseIsMoving);
  },
  computed: {
    ...mapGetters({
      homeFadeIn: "homeFadeIn"
    })
  },
  watch: {
    async homeFadeIn(val) {
      // ステートの`entered`が切り替わるたび、この処理が実行される
      // this.backgroundColor = this.familybookColor;
      var random = Math.floor(Math.random() * 7) + 1;
      switch (random) {
        case 1:
          this.headingCopy = "COMMUNICATION";
          this.homeImg = this.familybookHomeImg;
          this.backgroundColor = this.familybookColor;
          break;
        case 2:
          this.headingCopy = "GAME";
          this.homeImg = this.lineandballHomeImg;
          this.backgroundColor = this.lineandballColor;
          break;
        case 3:
          this.headingCopy = "WEB";
          this.homeImg = this.playfulfesHomeImg;
          this.backgroundColor = this.playfulfesColor;
          break;
        case 4:
          this.headingCopy = "USER INTERFACE";
          this.homeImg = this.scrapboardHomeImg;
          this.backgroundColor = this.scrapboardColor;
          break;
        case 5:
          this.headingCopy = "LOGO";
          this.homeImg = this.hiveHomeImg;
          this.backgroundColor = this.hiveColor;
          break;
        case 6:
          this.headingCopy = "HARDWARE";
          this.homeImg = this.foxHomeImg;
          this.backgroundColor = this.foxColor;
          break;
        case 7:
          this.headingCopy = "TRADITION";
          this.homeImg = this.norenHomeImg;
          this.backgroundColor = this.norenColor;
          break;
      }
      // this.backgroundWidth = this.familybookWidth
      this.opacityEnter();
      await this.$delay(300);
      this.backgroundEnter();
      await this.$delay(600);
      this.opacityLeave();
      this.backgroundLeave();
      await this.$delay(600);
      // this.opacityEnter()
      this.resetOpacity();
      await this.$delay(600);
      this.reset();
      await this.$delay(600);
      this.resetOpacity2();
      switch (random) {
        case 1:
          this.backgroundColor = this.lineandballColor;
          break;
        case 2:
          this.backgroundColor = this.playfulfesColor;
          break;
        case 3:
          this.backgroundColor = this.scrapboardColor;
          break;
        case 4:
          this.backgroundColor = this.hiveColor;
          break;
        case 5:
          this.backgroundColor = this.foxColor;
          break;
        case 6:
          this.backgroundColor = this.norenColor;
          break;
        case 7:
          this.backgroundColor = this.familybookColor;
          break;
      }
      // this.backgroundWidth = this.lineandballWidth
    }
  },
  methods: {
    mouseIsMoving(e) {
      if (window.navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
        // console.log("sp");
      } else {
        // console.log("pc");
        var x = e.pageX;
        var y = e.pageY;
        // console.log(x, y);
        // console.log(this.width, this.height);
        var convertX = Math.round(this.map(x, 0, this.width, -20, 40));
        var convertY = Math.round(this.map(y, 0, this.height, -40, 20));
        var rotateX = Math.round(this.map(x, 0, this.width, 35, 45));
        requestAnimationFrame(() => {
          TweenMax.to(".TheHero_WorkTrim", 0, {
            x: convertX,
            y: convertY,
            rotationX: rotateX
          });
        });
        requestAnimationFrame(() => {
          TweenMax.to(".TheHero_WorkBg_Second", 0, {
            x: convertX,
            y: convertY,
            rotationX: rotateX
          });
        });
        requestAnimationFrame(() => {
          TweenMax.to(".TheHero_WorkBg_Third", 0, {
            x: convertX - 12,
            y: convertY + 16,
            rotationX: rotateX
          });
        });
      }
    },
    map(value, start1, end1, start2, end2) {
      return start2 + (end2 - start2) * ((value - start1) / (end1 - start1));
    },
    mouseOver(){
      console.log("MouseOver")
      this.$store.commit("mouseHover");
    },
    mouseLeave(){
      console.log("MouseLeave")
      this.$store.commit("mouseLeave");
    },
    heroClick() {
      if (this.homeImg == this.familybookHomeImg) {
        this.$store.commit("familybook/click");
      } else if (this.homeImg == this.lineandballHomeImg) {
        this.$store.commit("lineandball/click");
      } else if (this.homeImg == this.playfulfesHomeImg) {
        this.$store.commit("playfulfes/click");
      } else if (this.homeImg == this.scrapboardHomeImg) {
        this.$store.commit("scrapboard/click");
      } else if (this.homeImg == this.hiveHomeImg) {
        this.$store.commit("hive/click");
      } else if (this.homeImg == this.foxHomeImg) {
        this.$store.commit("fox/click");
      } else if (this.homeImg == this.norenHomeImg) {
        this.$store.commit("noren/click");
      }
    },
    async changeHero() {
      this.backgroundEnter();
      await this.$delay(600);
      this.changeImage();
      this.opacityLeave();
      await this.$delay(200);
      this.backgroundLeave();
      await this.$delay(600);
      // this.opacityEnter()
      this.resetOpacity();
      await this.$delay(600);
      this.reset();
      await this.$delay(600);
      this.resetOpacity2();
      // this.opacityLeave()
      this.changeColor();
    },
    changeColor() {
      if (this.backgroundColor == this.familybookColor) {
        this.backgroundColor = this.lineandballColor;
      } else if (this.backgroundColor == this.lineandballColor) {
        this.backgroundColor = this.playfulfesColor;
      } else if (this.backgroundColor == this.playfulfesColor) {
        this.backgroundColor = this.scrapboardColor;
      } else if (this.backgroundColor == this.scrapboardColor) {
        this.backgroundColor = this.hiveColor;
      } else if (this.backgroundColor == this.hiveColor) {
        this.backgroundColor = this.foxColor;
      } else if (this.backgroundColor == this.foxColor) {
        this.backgroundColor = this.norenColor;
      } else if (this.backgroundColor == this.norenColor) {
        this.backgroundColor = this.familybookColor;
      }
    },
    changeImage() {
      if (this.homeImg == this.familybookHomeImg) {
        this.homeImg = this.lineandballHomeImg;
        this.headingCopy = "GAME";
      } else if (this.homeImg == this.lineandballHomeImg) {
        this.homeImg = this.playfulfesHomeImg;
        this.headingCopy = "WEB";
      } else if (this.homeImg == this.playfulfesHomeImg) {
        this.homeImg = this.scrapboardHomeImg;
        this.headingCopy = "USER INTERFACE";
      } else if (this.homeImg == this.scrapboardHomeImg) {
        this.homeImg = this.hiveHomeImg;
        this.headingCopy = "LOGO";
      } else if (this.homeImg == this.hiveHomeImg) {
        this.homeImg = this.foxHomeImg;
        this.headingCopy = "HARDWARE";
      } else if (this.homeImg == this.foxHomeImg) {
        this.homeImg = this.norenHomeImg;
        this.headingCopy = "TRADITION";
      } else if (this.homeImg == this.norenHomeImg) {
        this.homeImg = this.familybookHomeImg;
        this.headingCopy = "COMMUNICATION";
      }
    },
    opacityEnter() {
      requestAnimationFrame(() => {
        TweenMax.to(".TheHero_Heading_Text", 0, {
          opacity: 0,
          ease: Expo.easeOut
        });
      });
      requestAnimationFrame(() => {
        TweenMax.to(".TheHero_WorkImg", 0, {
          opacity: 0,
          ease: Expo.easeOut
        });
      });
    },
    backgroundEnter() {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          ".TheHero_WorkBg_FadeIn",
          0.2,
          {
            width: "102%",
            ease: Expo.easeOut,
            startAt: {
              width: "0%"
            }
          },
          0.1
        );
      });
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          ".TheHero_Bg",
          0.2,
          {
            width: "102%",
            ease: Expo.easeOut,
            startAt: {
              width: "0%"
            }
          },
          0.1
        );
      });
    },
    opacityLeave() {
      requestAnimationFrame(() => {
        TweenMax.to(".TheHero_Heading_Text", 0, {
          opacity: 1,
          ease: Expo.easeOut
        });
      });
      requestAnimationFrame(() => {
        TweenMax.to(".TheHero_WorkImg", 0, {
          opacity: 1,
          ease: Expo.easeOut
        });
      });
    },
    backgroundLeave() {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          ".TheHero_Bg",
          0.3,
          {
            x: "100%",
            ease: Expo.easeIn,
            startAt: {
              x: "0%"
            }
          },
          0.1
        );
      });
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          ".TheHero_WorkBg_FadeIn",
          0.3,
          {
            x: "100%",
            ease: Expo.easeIn,
            startAt: {
              x: "0%"
            }
          },
          0.1
        );
      });
    },
    resetOpacity() {
      requestAnimationFrame(() => {
        TweenMax.to(".TheHero_WorkBg_FadeIn", 0, {
          opacity: 0,
          ease: Expo.easeOut
        });
      });
      requestAnimationFrame(() => {
        TweenMax.to(".TheHero_Bg", 0, {
          opacity: 0,
          ease: Expo.easeOut
        });
      });
    },
    resetOpacity2() {
      requestAnimationFrame(() => {
        TweenMax.to(".TheHero_WorkBg_FadeIn", 0, {
          opacity: 1,
          ease: Expo.easeOut
        });
      });
      requestAnimationFrame(() => {
        TweenMax.to(".TheHero_Bg", 0, {
          opacity: 1,
          ease: Expo.easeOut
        });
      });
    },
    reset() {
      requestAnimationFrame(() => {
        TweenMax.to(".TheHero_Bg", 0.3, {
          x: "0%",
          width: "0%",
          ease: Expo.easeOut
        });
      });
      requestAnimationFrame(() => {
        TweenMax.to(".TheHero_WorkBg_FadeIn", 0.3, {
          x: "0%",
          width: "0%",
          ease: Expo.easeOut
        });
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

.TheHero {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--background-color);
  // padding-top: 120px;
  box-sizing: border-box;
  // position: relative;
  // -webkit-backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.TheHero_Img {
  width: 600px;
  height: 450px;
  margin: 0 auto;
  position: relative;
  // cursor: pointer;
  transform: translate3d(0px, 0px, 0px);
}

.TheHero_WorkTrim {
  overflow: hidden;
  width: 600px;
  height: 450px;
  border-radius: 20px;
  transform: rotateX(45deg) rotateZ(-20deg) translateX(-20px) translateY(28px)
    translateZ(30px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  box-shadow: 0px 0px 20px 0px rgba(155, 155, 155, 0.2);
  transition: 0.3s;
  background: #ffffff;
}

.TheHero_WorkBg_Second {
  position: absolute;
  top: 0px;
  left: 0px;
  transform: rotateX(45deg) rotateZ(-20deg) translateX(-12px) translateY(16px)
    translateZ(20px);
  z-index: 4;
}
.TheHero_WorkBg_Third {
  position: absolute;
  top: 0px;
  left: 0px;
  transform: rotateX(45deg) rotateZ(-20deg) translateX(-24px) translateY(32px)
    translateZ(10px);
  z-index: 3;
}

// .TheHero_Img:hover .TheHero_WorkTrim {
//   transform: rotateX(40deg) rotateZ(-20deg) translateX(-20px) translateY(28px)
//     translateZ(30px);
// }

// // .TheHero_Img:hover .TheHero_WorkBg_FadeIn{
// //   transform: rotateX(40deg) rotateZ(-20deg) translateX(0px) translateY(0px);
// // }

// .TheHero_Img:hover .TheHero_WorkBg_Second {
//   transform: rotateX(40deg) rotateZ(-20deg) translateX(-12px) translateY(16px)
//     translateZ(20px);
// }

// .TheHero_Img:hover .TheHero_WorkBg_Third {
//   transform: rotateX(40deg) rotateZ(-20deg) translateX(-24px) translateY(32px)
//     translateZ(10px);
// }

.TheHero_WorkBg {
  width: 600px;
  height: 450px;
  border-radius: 20px;
  background: #ffffff;
  position: absolute;
  top: 20px;
  left: -16px;
  box-shadow: 0px 0px 10px 0px rgba(155, 155, 155, 0.2);
  transition: 0.3s;
}

.TheHero_WorkBg_FadeIn {
  width: 0%;
  height: 100%;
  border-radius: 20px;
  background: #82c3e0;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 10px 0px rgba(155, 155, 155, 0.2);
  transition: 0.3s;
  z-index: 7;
  pointer-events: none;
  // transform: rotateX(45deg) rotateZ(-20deg) translateX(0px) translateY(0px);

  // animation: secondaryImageOverlayIn 0.6s 0s cubic-bezier(.77,0,.175,1),secondaryImageOverlayOut 0.6s 0.6s cubic-bezier(.77,0,.175,1);
  // animation-fill-mode: both;
}

.TheHero_WorkImg {
  width: auto;
  height: 100%;
  // cursor: pointer;
}

.TheHero_Heading {
  font-size: 120px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  color: #d2dadf;
  // color: #272727;
  line-height: 160px;
  overflow: hidden;
  position: relative;
  top: 60px;
  left: -244px;
  z-index: 8;
  // -webkit-backface-visibility: hidden;
  transform: translate3d(0px, 0px, 400px);
  pointer-events: none;
}

.TheHero_Heding_Design {
  color: #454545;
  // text-shadow: 6px 6px #ffffff;
  width: 400px;
  height: auto;
}

.TheHero_Heding_Copy {
  width: 1032px;
  height: auto;
  text-shadow: rgba(125, 155, 155, 0.2) 0 0 8px;
  // text-shadow: 6px 6px #ffffff;
}

.TheHero_Bg {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 120%;
  background-color: #82c3e0;
  // animation: secondaryImageOverlayIn 0.6s 0s cubic-bezier(.77,0,.175,1),secondaryImageOverlayOut 0.6s 0.6s cubic-bezier(.77,0,.175,1);
  // animation-fill-mode: both;
  width: 0%;
  z-index: 2;
}

.TheHero_PointImg {
  z-index: 2;
  width: 240px;
}
.TheHero_PointImg_Right {
  position: relative;
  top: -360px;
  right: -520px;
  transform: rotateZ(90deg);
  transform: translate3d(0px, 0px, -400px);
}
.TheHero_PointImg_Left {
  position: relative;
  top: -80px;
  left: -400px;
  transform: translate3d(0px, 0px, -400px);
}
.TheBackground {
  transform: translate3d(0px, 0px, -400px);
}

.TheHero_AnchorText {
  color: #9b9b9b;
  position: relative;
  top: 80px;
  left: -228px;
  // font-family: "Noto Sans", sans-serif;
  // font-weight: bold;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  z-index: 8;
  // cursor: pointer;
  display: block;
  background: #ffffff;
  width: 200px;
  padding-top: 14px;
  padding-bottom: 12px;
  border-radius: 100px;
  text-align: center;
  transition: 0.2s;
  box-shadow: 0px 0px 4px 0px rgba(155, 155, 155, 0.2);
}

.TheHero_AnchorText:hover {
  color: #ffffff;
  background-color: #272727 !important;
}

.TheHero_Arrow {
  vertical-align: -2px;
}

@keyframes secondaryImageOverlayIn {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes secondaryImageOverlayOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(102%);
  }
}

@media screen and (max-width: 1024px) {
  .TheHero {
    // padding-top: 400px;
  }
  .TheHero_Heading {
    font-size: 100px;
    line-height: 132px;
    top: 240px;
    left: -144px;
  }
  .TheHero_AnchorText {
    color: #9b9b9b;
    top: 256px;
    left: -136px;
    font-size: 16px;
  }
  .TheHero_Heding_Copy {
    width: 900px;
  }
  .TheHero_PointImg {
    z-index: 2;
    width: 320px;
  }
  .TheHero_PointImg_Right {
    position: relative;
    top: -400px;
    right: -440px;
  }
  .TheHero_PointImg_Left {
    position: relative;
    top: -200px;
    left: -160px;
    transform: rotateZ(90deg);
  }
}

@media screen and (max-width: 768px) {
  .TheHero {
    // padding-top: 240px;
  }
  .TheHero_Heading {
    font-size: 80px;
    line-height: 100px;
    top: 320px;
    left: -48px;
  }
  .TheHero_AnchorText {
    color: #9b9b9b;
    top: 336px;
    left: -48px;
    font-size: 16px;
  }
  .TheHero_Heding_Copy {
    width: 688px;
  }
  .TheHero_PointImg {
    z-index: 2;
    width: 280px;
  }
  .TheHero_PointImg_Right {
    position: relative;
    top: -280px;
    right: -320px;
  }
  .TheHero_PointImg_Left {
    position: relative;
    top: 120px;
    left: -360px;
    transform: rotateZ(90deg);
  }
}

@media screen and (max-width: 480px) {
  .TheHero {
    padding-top: 200px;
  }
  .TheHero_Img {
    width: 300px;
  }

  .TheHero_WorkBg {
    width: 300px;
    height: 225px;
    left: 0px;
    top: 8px;
  }
  .TheHero_WorkTrim {
    width: 300px;
    height: 225px;
    position: relative;
    left: 0px;
    top: 8px;
  }

  .TheHero_WorkTrim {
    transform: rotateX(45deg) rotateZ(-20deg) translateX(0px) translateY(0px)
      translateZ(30px);
  }

  .TheHero_WorkBg_Second {
    transform: rotateX(45deg) rotateZ(-20deg) translateX(-5px) translateY(4px)
      translateZ(20px);
    z-index: 4;
  }
  .TheHero_WorkBg_Third {
    transform: rotateX(45deg) rotateZ(-20deg) translateX(-10px) translateY(8px)
      translateZ(10px);
    z-index: 3;
  }
  .TheHero_Img:hover .TheHero_WorkTrim {
    transform: rotateX(40deg) rotateZ(-20deg) translateX(0px) translateY(0px)
      translateZ(30px);
  }

  .TheHero_Img:hover .TheHero_WorkBg_Second {
    transform: rotateX(40deg) rotateZ(-20deg) translateX(-5px) translateY(4px)
      translateZ(20px);
  }

  .TheHero_Img:hover .TheHero_WorkBg_Third {
    transform: rotateX(40deg) rotateZ(-20deg) translateX(-10px) translateY(8px)
      translateZ(10px);
  }

  .TheHero_Heading {
    width: 300px;
    font-size: 40px;
    line-height: 56px;
    position: relative;
    top: -64px;
    left: -24px;
  }
  .TheHero_AnchorText {
    color: #9b9b9b;
    position: relative;
    top: -60px;
    left: -24px;
    font-size: 12px;
    width: 140px;
    height: 10px;
  }
  .TheHero_Heding_Copy {
    width: 344px;
  }
  .TheHero_PointImg {
    z-index: 2;
    width: 160px;
  }
  .TheHero_PointImg_Right {
    position: relative;
    top: -400px;
    right: -160px;
  }
  .TheHero_PointImg_Left {
    position: relative;
    top: -280px;
    left: -40px;
    transform: rotateZ(90deg);
  }
}
@media screen and (max-width: 320px) {
  .TheHero {
    padding-top: 200px;
  }
  .TheHero_WorkBg {
    left: 8px;
  }
  .TheHero_WorkTrim {
    left: 8px;
  }
  .TheHero_Heading {
    width: 240px;
    left: -20px;
    font-size: 28px;
    line-height: 44px;
  }
  .TheHero_AnchorText {
    width: 240px;
    left: -20px;
  }
  .TheHero_Heding_Copy {
    width: 240px;
  }
  .TheHero_Img {
    width: 240px;
  }

  .TheHero_WorkBg {
    width: 240px;
    height: 180px;
    left: 0px;
    top: 8px;
  }
  .TheHero_WorkTrim {
    width: 240px;
    height: 180px;
    position: relative;
    left: 0px;
    top: 8px;
  }
  .TheHero_PointImg {
    z-index: 2;
    width: 160px;
  }
  .TheHero_PointImg_Right {
    position: relative;
    top: -320px;
    right: -100px;
  }
  .TheHero_PointImg_Left {
    position: relative;
    top: -280px;
    left: -40px;
    transform: rotateZ(90deg);
  }
}
</style>





