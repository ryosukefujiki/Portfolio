<template>
  <div class="default">
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
    const userAgent = window.navigator.userAgent.toLowerCase();
    // if (
    //   userAgent.indexOf("msie") !== -1 ||
    //   userAgent.indexOf("trident") !== -1 ||
    //   userAgent.indexOf("edge") !== -1
    // ) {
    //   this.$router.replace({ path: "sorry" });
    // }
    if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
        console.log('Internet Explorerをお使いですね');
        this.$router.replace({ path: "sorry" });
    } else if(userAgent.indexOf('edge') != -1) {
        console.log('Edgeをお使いですね');
    } else if(userAgent.indexOf('chrome') != -1) {
      //  this.$router.replace({ path: "sorry" });
        console.log('Google Chromeをお使いですね');
        // this.$router.replace({ path: "sorry" });
    } else if(userAgent.indexOf('safari') != -1) {
        console.log('Safariをお使いですね');
        // this.$router.replace({ path: "sorry" });
    } else if(userAgent.indexOf('firefox') != -1) {
        console.log('FireFoxをお使いですね');
    } else if(userAgent.indexOf('opera') != -1) {
        console.log('Operaをお使いですね');
    } else {
        console.log('そんなブラウザは知らん');
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
      this.$store.commit("nav/langEnClick")
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
    }
  }
};
</script>


<style lang="scss">
.default {
  height: 100%;
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
  background: rgba(220,220,220,0.1);
}

@media screen and (max-width: 480px) {
  .TheBackgroundInside {
    width: 96%;
  }
}
@media screen and (max-width: 320px) {
}
</style>


