<template>
  <div class="TheWork" v-scroll="handleScroll">
    <div class="TheWork_HeroImg LineandballImg">
      <p class="TheWork_HeroNumber TheWork_Title" id="anchor">
        <span class="TheWork_TitleText">02 - 07</span><span class="TheWork_HeroNumberBg"></span>
      </p>
      <h1 class="TheWork_HeroHeading TheWork_Title"><span class="TheWork_TitleText">LINE and BALL</span><span class="TheWork_HeroNumberBg"></span></h1>
      <p class="TheWork_HeroCategory TheWork_Title"><span class="TheWork_TitleText">Game Design / Planning</span><span class="TheWork_HeroNumberBg"></span></p>
      <TheScrollBtn v-scroll-to="'#anchor'" class="TheScrollBtn_Ref"></TheScrollBtn>
    </div>

    <section class="TheWork_Contents">
      <div class="TheWork_Content TheWork_Overview">
        <div class="TheWork_Overview_Leftside">
          <div class="Content_Overview TheWork_Section">
            <p class="Content_Subtitle">Overview</p>
            <h2 class="Content_Title">鮮やかに解くパズルゲームアプリ</h2>
            <p
              class="Overview_Text"
            >CyberAgent Internship 2017 UIDA にて開催された「新しいパズルゲームの企画とUIを考える」がテーマのインターンシップで UI発明賞 をいただいた作品です。点と点を結び、自由に線を描くことで、ボールをゴールへと転がします。色の組み合わせで、描かれる線の性質が変わり「壊れる」「跳ねる」などの様々な性質を作り出し、パズルを解き明かす多様なパターンを生み出します。</p>
          </div>

          <div class="Content_Award TheWork_Section">
            <p class="Content_Subtitle">Award</p>
            <h2 class="Content_Title">「UIDA」 UI発明賞 受賞</h2>
            <p class="Overview_Text">
              <a
                class="link__text familybookText"
                href="https://www.cyberagent.co.jp/careers/students/uida/"
                target="_blank"
              >CyberAgent Internship UIDA　</a> UI発明賞　受賞
            </p>
          </div>
        </div>

        <div class="TheWork_Overview_RightSide">
          <div class="Content_Details TheWork_Section">
            <p class="Content_Right_Subtitle">Project Details</p>
            <p class="Overview_Text">制作日 : 2017年8月
              <br>制作期間: 1week
            </p>
          </div>

          <div class="Content_Tool TheWork_Section">
            <p class="Content_Right_Subtitle">Tool</p>
            <p class="Overview_Text">Adobe Illustrator
                Adobe Photoshop<br>
                Sketch<br>
                Prott<br>
            </p>
          </div>

          <div class="Content_Team TheWork_Section">
            <p class="Content_Right_Subtitle">Personal Work</p>
            <p class="Overview_Text">藤木 良祐
              <br>
              <span class="Overview_Text__task">- Design</span>
              <br>
              <span class="Overview_Text__task">- Planning</span>
            </p>
          </div>
        </div>

        <img :src="homeImg" alt class="TheWork_Img TheWork_Img_Big TheWork_Section">
        <img :src="home2Img" alt class="TheWork_Img TheWork_Img_Big TheWork_Section">
      </div>
      <div class="TheWork_Content TheWork_Process TheWork_Section">
            <div class="Content_Process">
                <p class="Content_Subtitle">Game Tutorial</p>
                <h2 class="Content_Title">指から色鮮やかな「LINE」を作り出す</h2>
                <p class="Content_Text">画面上に存在する点と点を結ぶことで、「LINE」が引かれます。「LINE」の引き方や、どの点と結びつけるかで、無限の選択肢と答えが用意されています。「LINE」が引かれると、右上の数字が1つ減り、数が0になると、「BALL」が転がります。「BALL」がゴールにたどり着くことのできる「LINE」を探りあて描き明かすパズルゲームです。</p>
                <div class="Image_Container">
                    <img :src="process01Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="process02Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="process03Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="process04Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                </div>
            </div>
        </div>

        <div class="TheWork_Content TheWork_Contents TheWork_Section">
            <div class="Content_Process">
                <p class="Content_Subtitle">Variety</p>
                <h2 class="Content_Title">5種類の「LINE」の性質</h2>
                <p class="Content_Text">様々な色の点を結ぶことで、多種多様な性質をもつ「LINE」を生み出すことができます。黄色の点同士を結ぶと「飛び跳ねる性質をもつLINE」を作り、青色の点同士を結ぶと「壊れ砕ける性質をもつLINE」を作り出します。さらに、赤色と黄色の点を結ぶと「摩擦抵抗の少ない性質をもつLINEを作り、青色と黄色の点を結ぶと「粘着性をもつLINE」を作り出します。</p>

                <div class="Image_Container">
                    <img :src="page01Img" alt="" class="TheWork_Img TheWork_Img_Small ">
                    <img :src="page02Img" alt="" class="TheWork_Img TheWork_Img_Small  ">
                    <img :src="page03Img" alt="" class="TheWork_Img TheWork_Img_Small ">
                    <img :src="page04Img" alt="" class="TheWork_Img TheWork_Img_Small  ">
                </div>




            </div>
        </div>
        <div class="TheWork_Content TheWork_Research TheWork_Section">
            <div class="Content_Process">
                <p class="Content_Subtitle">Game Design</p>
                <h2 class="Content_Title">レベル調整</h2>
                <p class="Content_Text">画面上に広がる「LINE」の色や数を調整することによって、ゲームの難易度を操作することが可能です。点の種類や色を増やせば増やすほど、生み出すことのできる「LINE」の選択肢が増え、複雑性と難易度を上げることができます。</p>

                <div class="Image_Container ">
                    <img :src="page05Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="page06Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                </div>


            </div>
        </div>

        <div class="TheWork_Content TheWork_TheOther TheWork_Section">
            <div class="Content_Process">
                <p class="Content_Subtitle">The Other Works</p>
                <h2 class="Content_Title">その他の作品について</h2>

                <section class="TheOther_Works">
                     <TheHiveButton></TheHiveButton>
                     <TheFamilybookButton></TheFamilybookButton>
                     <ThePlayfulfesButton></ThePlayfulfesButton>
                     <TheScrapboardButton></TheScrapboardButton>
                </section>




            </div>
        </div>
    </section>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheScrollBtn from '~/components/TheHeader/TheScrollBtn.vue'
import TheFooter from '~/components/TheHeader/TheFooter.vue'
import TheHiveButton from '~/components/TheHome/TheHiveButton.vue'
import TheFamilybookButton from '~/components/TheHome/TheFamilybookButton.vue'
import TheLineandballButton from '~/components/TheHome/TheLineandballButton.vue'
import ThePlayfulfesButton from '~/components/TheHome/ThePlayfulfesButton.vue'
import TheScrapboardButton from '~/components/TheHome/TheScrapboardButton.vue'
import {mapGetters} from 'vuex'
import {TweenMax, Elastic, Expo, Back} from 'gsap'
import VueScrollTo from 'vue-scrollto'

export default {
    components: {
        TheScrollBtn,
        TheFooter,
        TheHiveButton,
        TheFamilybookButton,
        TheLineandballButton,
        ThePlayfulfesButton,
        TheScrapboardButton,
    },
    head() {
    return {
      title: "LINEandBALL",
      meta: [
        { property: "og:title", content: "LINEandBALL | Ryosuke Fujiki Portfolio" },
        { property: "og:url", content: "https://ryosukefujiki.design/lineandball" },
        {
          property: "twitter:title",
          content: "LINEandBALL | Ryosuke Fujiki Portfolio"
        }
      ]
    };
  },
    data () {
    return {
      scrollY: 0,
      targetY: 0,
      homeImg: '/lineandball/lineandball_home.png',
      home2Img: '/lineandball/lineandball_home2.png',
      page01Img: 'lineandball/bouncing.png',
      page02Img: 'lineandball/fragile.png',
      page03Img: 'lineandball/slippery.png',
      page04Img: 'lineandball/stickey.png',
      page05Img: 'lineandball/iPhone05.png',
      page06Img: 'lineandball/iPhone06.png',
      process01Img: 'lineandball/iPhone01.png',
      process02Img: 'lineandball/iPhone02.png',
      process03Img: 'lineandball/iPhone03.png',
      process04Img: 'lineandball/iPhone04.png',
    }
  },
  computed: {
    ...mapGetters({
      fadeIn: 'lineandball/fadeIn',
      move: 'lineandball/move'
    })
  },
  watch: {
     async fadeIn (val) { // ステートの`entered`が切り替わるたび、この処理が実行される
      this.opacityEnter()
      await this.$delay(500)
      this.backgroundEnter()
      await this.$delay(500)
      this.opacityLeave()
      this.backgroundLeave()
      await this.$delay(2200)
      VueScrollTo.scrollTo('#anchor', 500);
    },
    async move (val) {
      this.targetMove()
    }
   },
   methods: {
     handleScroll: function(evt, el) {
      if (window.scrollY > 50) {
          this.$store.commit('lineandball/move')
      }
      return window.scrollY > 50
    },
    targetMove(){
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.TheWork_Section', 4, {
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
     opacityEnter () {
       requestAnimationFrame(() => {
        TweenMax.to('.TheWork_TitleText', 0, {
          opacity: 0,
          ease: Expo.easeOut,
        })
      })
     },
     backgroundEnter(){
       requestAnimationFrame(() => {
        TweenMax.staggerTo('.TheWork_HeroNumberBg', 0.3, {
          width: '102%',
          ease: Expo.easeOut,
          startAt: {
            width: '0%',
          }
        }, 0.1)
      })
     },
     opacityLeave () {
       requestAnimationFrame(() => {
        TweenMax.to('.TheWork_TitleText', 0.5, {
          opacity: 1,
          ease: Expo.easeOut,
        })
      })
     },
     backgroundLeave(){
       requestAnimationFrame(() => {
        TweenMax.staggerTo('.TheWork_HeroNumberBg', 0.5, {
          x: '100%',
          ease: Expo.easeIn,
          startAt: {
            x: '0%',
          }
        }, 0.1)
      })
     },
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

.TheWork {
  width: 100%;
  height: 100%;
}
.TheWork_HeroImg {
  width: 100%;
  height: 100%;
}
.LineandballImg {
//   background: url("/lineandball/lineandball_home.png");
  background: rgba(39, 39, 39, 0.1) url("/lineandball/lineandball_home.png");
  background-blend-mode: multiply;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

// .TheWork_HeroNumberBg{
//   background: #ffffff;
//   width: 100%;
//   height: 100%;
//   display: block;
// }

.TheWork_Title{
  overflow: hidden;
}

.TheWork_Section{
  opacity: 0;
}

.TheWork_HeroNumberBg{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 120%;
  background-color:#ffffff;
  // animation: secondaryImageOverlayIn 0.6s 0s cubic-bezier(.77,0,.175,1),secondaryImageOverlayOut 0.6s 0.6s cubic-bezier(.77,0,.175,1);
  // animation-fill-mode: both;
  // width: 100%;
  z-index: 2;
}
@keyframes secondaryImageOverlayIn {
    0% {
      width: 0;
    }
    100% {
      width:  100%;
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


.TheWork_HeroNumber {
  font-family: Georgia;
  color: #ffffff;
  font-size: 28px;
  position: absolute;
  left: 80px;
  bottom: 170px;
  font-family: "Noto Sans", sans-serif;
  overflow:hidden;
}
.TheWork_HeroHeading {
  font-weight: bold;
  font-size: 40px;
  color: #ffffff;
  display: block;
  position: absolute;
  left: 76px;
  bottom: 106px;
  font-family: "Noto Sans", 'Noto Sans JP', sans-serif;
}
.TheWork_HeroCategory {
  font-size: 22px;
  color: #ffffff;
  position: absolute;
  left: 78px;
  bottom: 48px;
  /* letter-spacing: 4px; */
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  padding-bottom: 12px;
}

.TheWork_Contents {
  margin: 0 auto;
  width: 720px;
  padding-bottom: 80px;
  margin-top: 88px;
  /* background: #f1f1f1; */
}

.TheWork_Content{
  width: 100%;
  margin-top: 88px;
}

.Content_Right_Subtitle {
  font-size: 16px;
  color: #9b9b9b;
  font-weight: lighter;
}

.Content_Subtitle {
  font-size: 16px;
  color: #9b9b9b;
  margin-bottom: 16px;
  font-weight: lighter;
}

.Content_Title {
  font-size: 24px;
  color: #272727;
  font-weight: 600;
  margin-bottom: 14px;
}

.Overview_Text {
  font-size: 16px;
  line-height: 32px;
  color: #4a4a4a;
  font-weight: 400;
  margin-bottom: 16px;
}

.Content_Overview .Overview_Text{
    width: 466px;
}

.Content_Award {
  margin-top: 48px;
}

.link__text{
  color: #4a4a4a;
}

.Content_Details,
.Content_Tool,
.Content_Team {
  width: 180px;
}

.TheWork_Overview{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
}

.TheWork_Overview_RightSide .Overview_Text {
  margin-top: 8px;
  margin-bottom: 32px;
}

.Content_Details .Content_Subtitle {
  margin-bottom: 0px;
}

.Overview_Text__task {
  font-weight: lighter;
  margin-top: 0;
}



.TheWork_Img{
  box-shadow: 0px 0px 4px 0px rgba(155,155,155,0.2);
}

.Delete_Dropshadow{
  box-shadow: none !important;
}

.TheWork_Img_Big{
  display: block;
  margin-top: 44px;
  width: 720px;
}

.TheWork_Img_Small{
  display: block;
  margin-top: 44px;
  width: 320px;
}

.Content_Text{
  width: 100%;
  line-height: 32px;
  font-size: 16px;
  line-height: 32px;
  color: #4a4a4a;
  font-weight: 400;
  margin-bottom: 16px;
}

.Image_Container{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start; 
    justify-content: space-between;
}

.TheOther_Works{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
}


@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 480px) {
  .LineandballImg {
//   background: url("/lineandball/lineandball_home.png");
  background: rgba(39, 39, 39, 0.1) url("/lineandball/lineandball_home.png");
  background-blend-mode: multiply;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
    .TheWork_HeroNumber{
      font-size: 16px;
      left: 24px;
      bottom: 94px;
    }
    .TheWork_HeroHeading{
      font-size: 22px;
      left: 22px;
      bottom: 60px;
    }
    .TheWork_HeroCategory{
      font-size: 14px;
      left: 24px;
      bottom: 20px;
    }

    .TheWork_Contents{
      margin: 0 auto;
      width: 320px;
    }

    .TheWork_Content{
      width: 100%;
      margin-top: 64px;
    }

    .Content_Right_Subtitle{
      font-size: 12px;
      color: #9b9b9b;
      font-weight: lighter;
    }

    .Content_Subtitle{
      font-size: 12px;
      color: #9b9b9b;
      margin-bottom: 16px;
      font-weight: lighter;
    }

    .Content_Title{
      font-size: 18px;
      color: #272727;
      font-weight: 600;
      margin-bottom: 8px;
      line-height: 24px;
    }

    .Content_Overview .Overview_Text{
        width: 320px;
    }
    .Overview_Text{
      width: 320px;
      font-size: 12px;
      line-height: 32px;
      color: #272727;
      font-weight: 400;
      margin-bottom: 16px;
    }

    .Content_Award{
      margin-top: 32px;
    }

    .Content_Details, .Content_Tool, .Content_Team{
      display: none;
    }

    .familybookImg{
      background: rgba(39, 39, 39, 0.1) url("/home/familybook_home.png");
      background-blend-mode: multiply;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment:scroll;
      background-size: cover
    }

    .TheWork_Img_Big{
      width: 320px;
    }
}

@media screen and (max-width: 320px) {
   


    .TheWork_Contents{
      margin: 0 auto;
      width: 300px;
    }
    .Content_Overview .Overview_Text{
        width: 300px;
    }
    .Overview_Text{
      width: 300px;
    }
    .TheWork_Img_Small{
      width: 300px;
    }
    .TheWork_Img_Big{
      width: 300px;
    }

    .TheOther_Works{
      justify-content: center;
    }

}

</style>

