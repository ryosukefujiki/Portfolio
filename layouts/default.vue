<template>
  <div class="default" @mousemove="onMousemove">
    <!-- <div id="scrollArea"> -->
    <TheNorenTransition></TheNorenTransition>
    <TheFoxTransition></TheFoxTransition>
    <TheFamilybookTransition></TheFamilybookTransition>
    <TheHiveTransition></TheHiveTransition>
    <TheScrapboardTransition></TheScrapboardTransition>
    <TheLineandballTransition></TheLineandballTransition>
    <TheAboutTransition></TheAboutTransition>
    <ThePlayfulfesTransition></ThePlayfulfesTransition>
    <TheHomeTransition></TheHomeTransition>
    <TheColorTransition></TheColorTransition>
    <TheHeader></TheHeader>
    <nuxt></nuxt>
    <!-- </div> -->
    <!-- <TheFirstview></TheFirstview> -->
    <div class="TheBackgroundColor" :style="style">
      <div class="TheBackgroundInside"></div>
    </div>
    <!-- <TheAudio></TheAudio>  -->
    <!-- <TheFooter></TheFooter> -->
    <div class="cursor" ref="cursor"></div>
    <div class="follower" ref="follower"></div>
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader/TheHeader.vue";
import TheFooter from "~/components/TheHeader/TheFooter.vue";
import TheNorenTransition from "~/components/TheTransition/TheNorenTransition.vue";
import TheFoxTransition from "~/components/TheTransition/TheFoxTransition.vue";
import TheFamilybookTransition from "~/components/TheTransition/TheFamilybookTransition.vue";
import TheHiveTransition from "~/components/TheTransition/TheHiveTransition.vue";
import TheScrapboardTransition from "~/components/TheTransition/TheScrapboardTransition.vue";
import ThePlayfulfesTransition from "~/components/TheTransition/ThePlayfulfesTransition.vue";
import TheLineandballTransition from "~/components/TheTransition/TheLineandballTransition.vue";
import TheAboutTransition from "~/components/TheTransition/TheAboutTransition.vue";
import TheHomeTransition from "~/components/TheTransition/TheHomeTransition.vue";
import TheColorTransition from "~/components/TheTransition/TheColorTransition.vue";
import TheFirstview from "~/components/TheFirstview.vue";
import { mapGetters } from "vuex";

export default {
  mounted() {
     if (window.navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
        console.log("sp");
        requestAnimationFrame(() => {
          TweenMax.to(".cursor", 0, {
            opacity: 0,
          });
        })
        requestAnimationFrame(() => {
          TweenMax.to(".follower", 0, {
            opacity: 0,
          });
        })
      }
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) {
      // console.log('Internet Explorerをお使いですね');
      this.$router.replace({ path: "sorry" });
    } else if (userAgent.indexOf("edge") != -1) {
      // console.log('Edgeをお使いですね');
    } else if (userAgent.indexOf("chrome") != -1) {
      // console.log('Google Chromeをお使いですね');
      // this.$router.replace({ path: "sorry" });
    } else if (userAgent.indexOf("safari") != -1) {
      // console.log('Safariをお使いですね');
      // this.$router.replace({ path: "sorry" });
    } else if (userAgent.indexOf("firefox") != -1) {
      // console.log('FireFoxをお使いですね');
    } else if (userAgent.indexOf("opera") != -1) {
      // console.log('Operaをお使いですね');
    } else {
      // console.log('そんなブラウザは知らん');
    }

    const default_lang =
      (
        window.navigator.userLanguage ||
        window.navigator.language ||
        window.navigator.browserLanguage
      ).substr(0, 2) == "ja"
        ? "ja"
        : "en";

    if (default_lang != "ja") {
      this.$store.commit("nav/langEnClick");
    }
  },
  components: {
    TheHeader,
    TheFooter,
    TheFoxTransition,
    TheFamilybookTransition,
    TheHiveTransition,
    TheScrapboardTransition,
    ThePlayfulfesTransition,
    TheLineandballTransition,
    TheAboutTransition,
    TheHomeTransition,
    TheNorenTransition,
    TheFirstview,
    TheColorTransition
  },
  data() {
    return {
      style: {
        "background-color": this.$store.state.nav.style["background-color"]
      }
    };
  },
  computed: {
    ...mapGetters({
      colorBlack: "nav/colorBlack",
      langEn: "nav/langEn"
    })
  },
  watch: {
    async colorBlack(val) {
      this.style["background-color"] = this.$store.state.nav.style[
        "background-color"
      ];
    },
    async langEn(val) {}
  },
  methods: {
    addCount(e) {
      this.$store.commit("counter/add");
    },
    onMousemove(e) {
      if (window.navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
      } else {
        var cWidth = 8; //カーソルの大きさ
        var fWidth = 40; //フォロワーの大きさ
        var delay = 10; //数字を大きくするとフォロワーがより遅れて来る
        var mouseX = 0; //マウスのX座標
        var mouseY = 0; //マウスのY座標
        var posX = 0; //フォロワーのX座標
        var posY = 0; //フォロワーのX座標

        requestAnimationFrame(() => {
          posX += (e.x - posX) / delay;
          posY += (e.y - posY) / delay;
          TweenMax.to(".cursor", 0, {
            x: e.x,
            y: e.y
          });
          TweenMax.to(".follower", 0, {
            delay: 0.1,
            ease: Expo.easeOut,
            x: e.x - fWidth / 2,
            y: e.y - fWidth / 2
          });
        });
      }
    }
  }
};
</script>


<style lang="scss">
.default {
  height: 100%;
}
body {
  cursor: none; //もともとあるカーソルは見えなくなるようにする
}

a{
  cursor: none;
}

.cursor,
.follower {
  position: fixed; //bodyの一番左上になるように配置する
  top: 0;
  left: 0;
  cursor: none; //もともとあるカーソルは見えなくなるようにする
  pointer-events: none; //他の要素がクリックできなくならないように
}


.cursor {
  width: 8px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 31; //どの要素よりも一番上になるようにする
  border-radius: 50%;
}

.follower {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  // background-color: #fdfe00;
  border: 2px solid rgba(0, 0, 0, 0.6);
  z-index: 30; //カーソルの次に上になるようにする
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
  width: 96%;
  height: 100%;
  margin: 0 auto;
  background: rgba(220, 220, 220, 0.1);
}

@media screen and (max-width: 480px) {
  .TheBackgroundInside {
    width: 94%;
  }
}
@media screen and (max-width: 320px) {
  .TheBackgroundInside {
    width: 96%;
  }
}
</style>



