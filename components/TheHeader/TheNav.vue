<template>
  <div class="TheNav">
    <nav>
      <ul class="TheNav_List">
        <li class="TheNav_Item TheNav_Item_Logo">
          <p class="TheNav_Text">
            <img :src="logoImg" alt class="TheNav_Logo">
          </p>
        </li>
        <li class="TheNav_Item" @mouseenter="theNavBgOpen('home')" @touchstart="theNavBgOpen('home')">
          <a @click="routing('home')" @mouseenter="mouseOver()" @mouseleave="mouseLeave()" class="text--letterspace">Home<span class="TheNav_ItemBg" v-if="homeFlag"></span></a>
        </li>
        <li class="TheNav_Item" @mouseenter="theNavBgOpen('about')" @touchstart="theNavBgOpen('about')">
          <a @click="routing('about')" @mouseenter="mouseOver()" @mouseleave="mouseLeave()" class="text--letterspace">About<span class="TheNav_ItemBg" v-if="aboutFlag"></span></a>
        </li>
        <li class="TheNav_Item" @mouseenter="theNavBgOpen('blog')" @touchstart="theNavBgOpen('blog')">
          <a href="https://note.mu/ryosukefujiki" @mouseenter="mouseOver()" @mouseleave="mouseLeave()" target="_blank" class="text--letterspace">Blogs<span class="TheNav_ItemBg" v-if="blogFlag"></span></a>
        </li>
        <li class="TheNav_Item">
          <div class="TheNav_ItemIcons">
            <a
              href="https://dribbble.com/bighappy"
              class="TheNav_ItemIcon TheNav_ItemIcon_Dribbble"
              target="_blank"
              @mouseleave="mouseLeave()"
              @mouseenter="theNavBgOpen('dribbble')" @touchstart="theNavBgOpen('dribbble')"
            >
              <i class="fab fa-dribbble"></i>
              <span class="TheNav_ItemBg" v-if="dribbleFlag"></span>
            </a>
            <a
              href="https://www.facebook.com/rfujiki0625"
              class="TheNav_ItemIcon TheNav_ItemIcon_Facebook"
              target="_blank"
              @mouseleave="mouseLeave()"
              @mouseenter="theNavBgOpen('facebook')" @touchstart="theNavBgOpen('facebook')"
            >
              <i class="fab fa-facebook-square"></i>
              <span class="TheNav_ItemBg" v-if="facebookFlag"></span>
            </a>
            <a
              href="https://www.instagram.com/ryosukefujiki/"
              class="TheNav_ItemIcon TheNav_ItemIcon_Instagram"
              target="_blank"
              @mouseleave="mouseLeave()"
              @mouseenter="theNavBgOpen('instagram')" @touchstart="theNavBgOpen('instagram')"
            >
              <i class="fab fa-instagram"></i>
              <span class="TheNav_ItemBg" v-if="instagramFlag"></span>
            </a>
          </div>
        </li>
        <li class="TheNav_Item">
          <div class="TheNav_ItemSwitchs">
            <p
              href="https://dribbble.com/bighappy"
              class="TheNav_ItemSwitch"
              @click="toggleColor"
              @mouseenter="mouseOver()" @mouseleave="mouseLeave()"
            >
              {{colorSwitchText}}
            </p>
            <p
              href="https://dribbble.com/bighappy"
              class="TheNav_ItemSwitch"
              @click="toggleLanguage"
              @mouseenter="mouseOver()" @mouseleave="mouseLeave()"
            >
              {{langSwitchText}}
            </p>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      logoImg: "/home/logo.png",
      colorSwitchText: "Dark",
      langSwitchText: "En",
      homeFlag: false,
      aboutFlag: false,
      blogFlag: false,
      dribbleFlag: false,
      facebookFlag: false,
      instagramFlag: false,
    };
  },
  props: ["headerActive"],
  computed: {
    ...mapGetters({
      aboutEntered: "about/aboutEntered"
    })
  },
  methods: {
    mouseOver(){
      console.log("MouseOver")
      this.$store.commit("mouseHover");
    },
    mouseLeave(){
      console.log("MouseLeave")
      this.$store.commit("mouseLeave");
    },
    routing(url) {
      this.$parent.toggleMenu();
      if (url == "home" && this.$route.path != "/") {
        this.$store.commit("homeClick");
      }
      if (url == "about" && this.$route.path != "/about") {
        this.$store.commit("about/aboutClick");
      }
    },
    toggleColor(){
      this.$parent.toggleMenu();
      if(this.colorSwitchText == "Dark"){
        this.colorSwitchText = "Light"
        // this.$store.commit("nav/colorBlackClick")
        this.$store.commit("nav/colorBlackEntered")
      }else if(this.colorSwitchText == "Light"){
        this.colorSwitchText = "Dark"
        this.$store.commit("nav/colorBlackEntered")
      }
    },
    toggleLanguage(){
      this.$parent.toggleMenu();
      if(this.langSwitchText == "En"){
        this.langSwitchText = "Jp"
        this.$store.commit("nav/langEnEntered")
      }else if(this.langSwitchText == "Jp"){
        this.langSwitchText = "En"
        this.$store.commit("nav/langEnEntered")
      }
    },
    theNavBgOpen(val){
      this.mouseOver()
      this.homeFlag = false
      this.aboutFlag = false
      this.blogFlag = false
      this.dribbleFlag = false
      this.facebookFlag = false
      this.instagramFlag = false
      if(val == 'home'){
        this.homeFlag = true
      }else if(val == 'about'){
        this.aboutFlag = true
      }else if(val == 'blog'){
        this.blogFlag = true
      }else if(val == 'dribbble'){
        this.dribbleFlag = true
      }else if(val == 'facebook'){
        this.facebookFlag = true
      }else if(val == 'instagram'){
        this.instagramFlag = true
      }
      this.backgroundEnter()
      this.backgroundLeave()
    },
    // opacityEnter () {
    //    requestAnimationFrame(() => {
    //     TweenMax.to('.TheWork_TitleText', 0, {
    //       opacity: 0,
    //       ease: Expo.easeOut,
    //     })
    //   })
    //  },
     backgroundEnter(){
       requestAnimationFrame(() => {
        TweenMax.to('.TheNav_ItemBg', 0.3, {
          width: '102%',
          ease: Expo.easeOut,
          startAt: {
            width: '0%',
          }
        })
      })
     },
    //  opacityLeave () {
    //    requestAnimationFrame(() => {
    //     TweenMax.to('.TheWork_TitleText', 0.5, {
    //       opacity: 1,
    //       ease: Expo.easeOut,
    //     })
    //   })
    //  },
     backgroundLeave(){
       requestAnimationFrame(() => {
        TweenMax.to('.TheNav_ItemBg', 0.5, {
          x: '120%',
          ease: Expo.easeIn,
          startAt: {
            x: '0%',
          }
        })
      })
     },

    // ...mapMutations({
    //   aboutClick: 'aboutClick',
    // }),
  }
};
</script>


<style lang="scss" scoped>
/* TheNavに対するスタイル */
.TheNav {
  z-index: 9;
  position: fixed;
  // background: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.TheNav_Text {
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 12px;
}
.TheNav_Logo {
  // width: 48px;
  // height: 48px;
  width: 24px;
  height: 30px;
}

.TheNav.open {
  opacity: 1;
  visibility: visible;
  height: 100%;
}

.TheNav nav {
  position: relative;
  // height: 50%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 36px;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 48px;
}

.TheNav.open li {
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: 0.35s;
}
.TheNav.open li:nth-of-type(2) {
  animation-delay: 0.4s;
}
.TheNav.open li:nth-of-type(3) {
  animation-delay: 0.45s;
}
.TheNav.open li:nth-of-type(4) {
  animation-delay: 0.5s;
}
.TheNav.open li:nth-of-type(5) {
  animation-delay: 0.55s;
}

.text--letterspace {
  letter-spacing: 10px;
}


.TheNav_Item a {
  // cursor: pointer;
  overflow: hidden;
  line-height: 48px;
}

.TheNav ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
}
.TheNav_Item {
  display: block;
  position: relative;
  opacity: 0;
  margin-bottom: 36px;
  width: 200px;
  text-align: center;
}
.TheNav_Item_Logo {
  margin-bottom: 20px;
}

.TheNav ul li a {
  display: block;
  position: relative;
  color: #272727;
  text-decoration: none;
  transition-delay: 0.2s;
  transition-timing-function:ease-out;
  /* overflow: hidden; */
}

.TheNav ul li a:hover,
.TheNav ul li a:focus,
.TheNav ul li a:active {
  color: #9b9b9b;
}
.TheNav ul li a:hover:after,
.TheNav ul li a:focus:after,
.TheNav ul li a:active:after {
  width: 100%;
  background: #9b9b9b;
}

.TheNav_ItemIcons {
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
}
.TheNav_ItemIcon {
  display: block;
  font-weight: normal;
}
.TheNav_ItemIcon_Dribbble {
  font-size: 32px;
}
.TheNav_ItemIcon_Facebook {
  font-size: 34px;
}

.TheNav ul li a:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 46.5%;
  width: 0%;
  transform: translateX(-50%);
  height: 3px;
  background: #fff;
  transition-delay: 0.2s;
  transition-timing-function:ease-out;
  transition-duration: 0.35s;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: -20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}


.TheNav_ItemBg{
  content: "";
  position: absolute;
  left: -10%;
  top: -2px;
  width: 0%;
  height: 120%;
  background-color:#272727;
  // opacity: 0.6;
  z-index: 2;
}


.TheNav_Item_Logo{
  margin-bottom: 20px;
}
.TheNav_ItemSwitchs{
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
}

.TheNav_ItemSwitch{
  font-size: 18px;
  background: #ffffff;
  color: #272727;
  display: block;
  border-radius: 24px;
  height: 40px;
  width: 80px;
  padding-top: 10px;
  box-sizing: border-box;
  // cursor: pointer;
  transition: 0.15s;
  box-shadow: 0px 0px 4px 0px rgba(155, 155, 155, 0.2);
}

.TheNav_ItemSwitch:hover{
  background: #d2dadf;
  background: #272727;
  color: #ffffff;
}


@media screen and (max-width: 480px) {
  .TheNav_Item {
    margin-bottom: 36px;
    width: 160px;
  }
  .TheNav_Item_Logo{
    margin-bottom: 20px;
  }

  .TheNav_ItemIcons {
    width: 160px;
  }
  .TheNav_Logo {
    width: 24px;
    height: 30px;
  }

  .TheNav nav {
    font-size: 28px;
  }

  .text--letterspace {
    letter-spacing: 8px;
  }
  .TheNav_ItemIcon_Dribbble {
    font-size: 26px;
  }
  .TheNav_ItemIcon_Facebook {
    font-size: 28px;
  }
  .TheNav_ItemSwitchs{
  width: 160px;
}
.TheNav_ItemSwitch{
  font-size: 14px;
  border-radius: 24px;
  height: 36px;
  width: 68px;
  padding-top: 10px;
  box-sizing: border-box;
  // cursor: pointer;
  transition: 0.15s;
}

.TheNav_Item a {
  // cursor: pointer;
  overflow: hidden;
  line-height: 36px;
}
}
</style>

