<template>
  <div class="TheWork" v-scroll="handleScroll">
    <div class="TheWork_HeroImg ScrapboardImg">
      <p class="TheWork_HeroNumber TheWork_Title" id="anchor">
        <span class="TheWork_TitleText">03 - 07</span><span class="TheWork_HeroNumberBg"></span>
      </p>
      <h1 class="TheWork_HeroHeading TheWork_Title"><span class="TheWork_TitleText">Scrap Board</span><span class="TheWork_HeroNumberBg"></span></h1>
      <p class="TheWork_HeroCategory TheWork_Title"><span class="TheWork_TitleText">UI Design / UX Design</span><span class="TheWork_HeroNumberBg"></span></p>
      <TheScrollBtn v-scroll-to="'#anchor'" class="TheScrollBtn_Ref"></TheScrollBtn>
    </div>

    <section class="TheWork_Contents">
      <div class="TheWork_Content TheWork_Overview">
        <div class="TheWork_Overview_Leftside">
          <div class="Content_Overview TheWork_Section">
            <p class="Content_Subtitle">Overview</p>
            <h2 class="Content_Title">美術館はしごアプリ</h2>
            <p
              class="Overview_Text"
            >DeNA 主催による Delight U for Student における「美術館（展示）回遊アプリ」を制作するというテーマで制作した作品です。ユーザー中心設計に基づいた、プロトタイプ開発を行いました。具体的には、与えられたペルソナ・仮設価値シートから、ユーザー体験を考えUIに落とし込みました。新聞の切り抜きという意味を持つ「Scrap」をコンセプトとし、ユーザーが美術館や展示を「発見する」「保存する」「整理する」という行動をアプリの主要機能としました。</p>
          </div>

          <div class="Content_Award TheWork_Section">
            <p class="Content_Subtitle">Resource</p>
            <h2 class="Content_Title">プロトタイプ</h2>
            <p class="Overview_Text">
              <a
                class="link__text familybookText"
                href="https://prottapp.com/p/308d16"
                target="_blank"
              >https://prottapp.com/p/308d16</a> ProttURL
            </p>
          </div>
        </div>

        <div class="TheWork_Overview_RightSide">
          <div class="Content_Details TheWork_Section">
            <p class="Content_Right_Subtitle">Project Details</p>
            <p class="Overview_Text">制作日 : 2017年12月
              <br>制作期間: 2week
            </p>
          </div>

          <div class="Content_Tool TheWork_Section">
            <p class="Content_Right_Subtitle">Tool</p>
            <p class="Overview_Text">Sketch<br>
            Adobe Illustrator<br>
            Adobe Photoshop
            </p>
          </div>

          <div class="Content_Team TheWork_Section">
            <p class="Content_Right_Subtitle">Personal Work</p>
            <p class="Overview_Text">藤木 良祐
              <br>
              <span class="Overview_Text__task">- UI Design</span>
              <br>
              <span class="Overview_Text__task">- UX Design</span>
            </p>
          </div>
        </div>

        <img :src="homeImg" alt class="TheWork_Img TheWork_Img_Big TheWork_Section">
        <!-- <img :src="home2Img" alt class="TheWork_Img TheWork_Img_Big TheWork_Section"> -->
      </div>
      <div class="TheWork_Content TheWork_Process TheWork_Section">
            <div class="Content_Process">
                <p class="Content_Subtitle">Process</p>
                <h2 class="Content_Title">ユーザー中心設計に基づくプロトタイプ開発</h2>
                <p class="Content_Text">ユーザー中心設計のデザイン哲学に基づき、与えられたペルソナ・価値仮説シートからユーザーストーリーを構築しました。そしてそのユーザーゴールから、ユーザーが展示を「発見する」「保存する」「整理する」ことをアプリでの主要機能とし、ペルソナの課題を解決します。この3つの主要機能を、新聞や雑誌の切り抜きという意味を持つ Scrap をモチーフに表しました。</p>
                <div class="Image_Container">
                    <img :src="process01Img" alt="" class="TheWork_Img TheWork_Img_Small">
                    <img :src="process02Img" alt="" class="TheWork_Img TheWork_Img_Small">
                </div>
            </div>
        </div>

        <div class="TheWork_Content TheWork_Contents TheWork_Section">
            <div class="Content_Process">
                <p class="Content_Subtitle">Home Tab</p>
                <h2 class="Content_Title">ユーザーの離脱を回避するUI設計</h2>
                <p class="Content_Text">Homeタブはユーザーの好みの展示を発見するタブです。展示の詳細を閲覧でき、気に入った展示をボードに保存する機能を有しています。ユーザーが展示を保存したとき初めて会員登録を求めることで、ユーザーのアプリ離脱を回避します。また、Twitter,Instgram連携を取り入れることで、会員登録・ログインの過程をスムーズにします。</p>

                <div class="Image_Container">
                    <img :src="sp01Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="sp02Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="sp03Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="sp04Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                </div>
            </div>
        </div>
        <div class="TheWork_Content TheWork_Research TheWork_Section">
            <div class="Content_Process">
                <p class="Content_Subtitle">Search Tab</p>
                <h2 class="Content_Title">自発的に探しやすい検索体験</h2>
                <p class="Content_Text">ユーザーが自発的に展示を探すタブ。テキスト検索だけでなく、ユーザーがより探しやすい体験を届けられるよう、カテゴリ検索やトレンド検索、さらにフィルター検索を提案しました。</p>
                <div class="Image_Container">
                    <img :src="sp05Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="sp06Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                </div>
            </div>
        </div>

        <div class="TheWork_Content TheWork_Research TheWork_Section">
            <div class="Content_Process">
                <p class="Content_Subtitle">Board Tab</p>
                <h2 class="Content_Title">ボード保存機能</h2>
                <p class="Content_Text">保存した展示を整理するタブ。ユーザーがボードごとに保存した展示を閲覧、整理することができます。さらに今月に終わってしまう展示をプログラムが自動でボードを作成することで、ペルソナの抱いていた「行きたい展示を忘れてしまう」という課題を解決します。</p>
                <div class="Image_Container">
                    <img :src="sp07Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="sp08Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="sp09Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                    <img :src="sp10Img" alt="" class="TheWork_Img TheWork_Img_Small Delete_Dropshadow">
                </div>
            </div>
        </div>

        <div class="TheWork_Content TheWork_TheOther TheWork_Section">
            <div class="Content_Process">
                <p class="Content_Subtitle">The Other Works</p>
                <h2 class="Content_Title">その他の作品について</h2>

                <section class="TheOther_Works">
                     <ThePlayfulfesButton></ThePlayfulfesButton>
                     <TheFamilybookButton></TheFamilybookButton>
                     <TheLineandballButton></TheLineandballButton>
                     <TheHiveButton></TheHiveButton>
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
      title: "ScrapBoard",
      meta: [
        { property: "og:title", content: "ScrapBoard | Ryosuke Fujiki Portfolio" },
        { property: "og:url", content: "https://ryosukefujiki.design/scrapboard" },
        {
          property: "twitter:title",
          content: "ScrapBoard | Ryosuke Fujiki Portfolio"
        }
      ]
    };
  },
    data () {
    return {
      scrollY: 0,
      targetY: 0,
      homeImg: '/scrapboard/scrapboard.png',
      process01Img: '/scrapboard/persona.png',
      process02Img: '/scrapboard/valuesheet.png',
    //   home2Img: '/playfulfes/playfulfes2.png',
      sp01Img: 'scrapboard/sp00.png',
      sp02Img: 'scrapboard/sp04.png',
      sp03Img: 'scrapboard/sp01.png',
      sp04Img: 'scrapboard/sp02.png',
      sp05Img: 'scrapboard/sp03.png',
      sp06Img: 'scrapboard/sp07.png',
      sp07Img: 'scrapboard/sp03.png',
      sp08Img: 'scrapboard/sp07.png',
      sp09Img: 'scrapboard/sp06.png',
      sp10Img: 'scrapboard/sp10.png',
    }
  },
  computed: {
    ...mapGetters({
      fadeIn: 'scrapboard/fadeIn',
      move: 'scrapboard/move'
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
          this.$store.commit('scrapboard/move')
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
       console.log("opacityEnter")
       requestAnimationFrame(() => {
        TweenMax.to('.TheWork_TitleText', 0, {
          opacity: 0,
          ease: Expo.easeOut,
        })
      })
     },
     backgroundEnter(){
       console.log("backgroundEnter")
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
       console.log("opacityLeave")
       requestAnimationFrame(() => {
        TweenMax.to('.TheWork_TitleText', 0.5, {
          opacity: 1,
          ease: Expo.easeOut,
        })
      })
     },
     backgroundLeave(){
       console.log("backgroundEnter")
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
.ScrapboardImg {
  background: url("/scrapboard/scrapboard.png");
//   background: rgba(39, 39, 39, 0.1) url("/playfulfes/playfulfes.png");
//   background-blend-mode: multiply;
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
  font-size: 14px;
  padding-left: 12px;
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
  .ScrapboardImg {
  background: url("/scrapboard/scrapboard.png");
//   background: rgba(39, 39, 39, 0.1) url("/playfulfes/playfulfes.png");
//   background-blend-mode: multiply;
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

