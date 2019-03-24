<template>
  <section class="TheAbout">
    <div class="TheAbout_Container">
      <TheProfileImg class="TheAbout_Section"></TheProfileImg>
      <!-- <img :src="profileImg" alt="" class="TheAbout_ProfileImg"> -->
      <div class="TheAbout_Profile TheAbout_Section">
        <h2 class="TheAbout_Heading">🙌 Hi, I’m Ryosuke Fujiki</h2>
        <p class="TheAbout_Text">
          1996年シンガポール生まれ、東京育ち。
          2015年より慶應義塾大学環境情報学部に通い、2019年春に卒業。HCI,
          UI/UX を研究テーマとする中西泰人研究室に所属し、 ORFや MAKER FAIRE TOKYO など
          の展示を通して研究発表を行ってきた。デザイン、エンジニアリングの両軸を専門とする企画立案から ”ものづくり” をすることが得意。
        </p>
      </div>
      <div class="TheAbout_Detail TheAbout_Section">
        <div class="TheAbout_Award TheAbout_Content">
          <h2 class="TheAbout_Heading">🏆 AWARDS</h2>
          <p class="TheAbout_Text">2019 SFC STUDENT AWARD
            <br>
            <a
              href="https://uist.acm.org/uist2018/"
              target="_blank"
              class="TheAbout_LinkColor"
            >2018 UIST Student Inovation Contest Most Creative
              <span class="hide-text">Award</span>
            </a>
            <br>
            <a
              href="https://uist.acm.org/uist2018/"
              target="_blank"
              class="TheAbout_LinkColor"
            >2018 UIST Student Inovation Contest People Choice
              <span class="hide-text">Award</span>
            </a>
            <br>2018 Goodpatch Internship 最優秀賞
            <br>2017 CyberAgent UI Design Academy UI発明賞
            <br>2017 電通 アイディアの学校 金賞
          </p>
        </div>
        <div class="TheAbout_Skill TheAbout_Content">
          <h2 class="TheAbout_Heading">✏️ SKILLS</h2>
          <p class="TheAbout_Text">Adobe Illustrator/Photoshop/Premiere/AfterEffects
            <br>HTML/CSS/JavaScript/Vue.js/Nuxt.js/Python
            <br>Arduino/RaspberryPi/Processing
            <br>Sketch/Adobe XD/ProtoPie
            <br>
          </p>
        </div>
      </div>
      <div class="TheAbout_Experience TheAbout_Section">
        <div class="TheAbout_Education TheAbout_Content">
          <h2 class="TheAbout_Heading">🎓 EDUCATION</h2>
          <p class="TheAbout_Text">2015-2019 慶應義塾大学環境情報学部</p>
        </div>
        <div class="TheAbout_Work TheAbout_Content">
          <h2 class="TheAbout_Heading">💻 WORKS</h2>
          <p class="TheAbout_Text">
            <a
              href="https://nihonbashi-beta.jp/"
              target="_blank"
              class="TheAbout_LinkColor"
            >2018 NIHONBASHI β Creator</a>
            <br>2018 Yahoo! Internship
            <br>2018 Goodpatch Internship
            <br>2017 DeNA Delight U for Student
            <br>2017 CyberAgent Technical Creator Challenge
            <br>2017 CyberAgent UI Design Academy
            <br>2017 電通 アイディアの学校
            <br>2016 チームラボ株式会社
            <br>2015 株式会社ライフイズテック
          </p>
        </div>
      </div>
      <div class="TheAbout_Contact TheAbout_Section">
        <div class="TheAbout_Social TheAbout_Content">
          <div class="TheAbout_ItemIcons">
            <a
              href="https://dribbble.com/bighappy"
              class="TheAbout_ItemIcon TheAbout_ItemIcon_Dribbble"
              target="_blank"
            >
              <i class="fab fa-dribbble"></i>
            </a>
            <a
              href="https://www.facebook.com/rfujiki0625"
              class="TheAbout_ItemIcon TheAbout_ItemIcon_Facebook"
              target="_blank"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://www.instagram.com/ryosukefujiki/"
              class="TheAbout_ItemIcon TheAbout_ItemIcon_Instagram"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="TheAbout_Email TheAbout_Content">
          <h2 class="TheAbout_Heading">📩 DROP ME A LINE !</h2>
          <a class="TheAbout_Text">ryosukefujiki625 ＠ gmail.com</a>
        </div>
      </div>
    </div>
    <TheFooter></TheFooter>
    <div class="TheAbout_Backgroud">
      <!-- <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(300,300)">
          <path
            d="M132.3,-87.8C171.7,-56,204.3,-0.9,197.4,51.3C190.5,103.6,144.1,153.2,94.7,164.7C45.3,176.3,-7.1,149.9,-59.1,124.2C-111.1,98.6,-162.8,73.8,-177.3,33.8C-191.7,-6.2,-169,-61.4,-133.2,-92.4C-97.5,-123.4,-48.7,-130.2,-1.2,-129.3C46.4,-128.3,92.8,-119.7,132.3,-87.8Z"></path>
        </g>
      </svg>-->
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(300,300)">
          <path
            d="M155.7,-214C195.8,-185.2,218.2,-131.7,225.8,-80.1C233.3,-28.4,226,21.3,210.1,67.7C194.2,114,169.7,156.9,133.2,169.2C96.8,181.6,48.4,163.3,3,159.1C-42.3,154.9,-84.6,164.8,-116.2,150.9C-147.7,137,-168.5,99.2,-187.6,57C-206.7,14.8,-224.1,-31.8,-201.4,-54.2C-178.7,-76.6,-115.8,-74.7,-75.5,-103.5C-35.3,-132.2,-17.6,-191.6,20.1,-219.2C57.8,-246.9,115.6,-242.8,155.7,-214Z"
          ></path>
        </g>
      </svg>
    </div>
  </section>
</template>

<script>
import TheProfileImg from "~/components/TheAbout/TheProfileImg.vue";
import TheFooter from "~/components/TheHeader/TheFooter.vue";
import { mapGetters } from "vuex";
import { TweenMax, Elastic, Expo, Back } from "gsap";

export default {
  components: {
    TheProfileImg,
    TheFooter
  },
  head() {
    return {
      title: "About",
      meta: [
        { property: "og:title", content: "About | Ryosuke Fujiki Portfolio" },
        { property: "og:url", content: "https://ryosukefujiki.design/about" },
        {
          property: "twitter:title",
          content: "About | Ryosuke Fujiki Portfolio"
        }
      ]
    };
  },
  data() {
    return {
      profileImg: "/about/profile.png",
      skillImg: "about/skill.gif",
      internshipImg: "about/internship.jpg"
    };
  },
  computed: {
    ...mapGetters({
      aboutMoved: "about/aboutMoved"
    })
  },
  watch: {
    async aboutMoved(val) {
      // ステートの`entered`が切り替わるたび、この処理が実行される
      await this.$delay(120);
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          ".TheAbout_Section",
          5,
          {
            y: 0,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 0.3),
            startAt: {
              y: "40px",
              opacity: 0
            }
          },
          0.1
        );
      });
    }
  },
  methods: {
    addCount(e) {
      this.$store.commit("counter/add");
    }
  }
};
</script>

<style lang="scss" scoped>
$heading-color: #272727;
$heading-size: 24px;
$text-color: #9b9b9b;
$text-size: 16px;
$hover-color: #d2dadf;

.TheAbout_Container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 160px;
  margin: 0 auto;
  width: 1000px;
  // margin-left: 120px;
  // margin-right: 120px;
}
.TheAbout_Heading {
  color: $heading-color;
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-size: $heading-size;
  // letter-spacing: 0.5px;
  padding-top: 12px;
}
.TheAbout_Text {
  color: $text-color;
  font-family: "Noto Sans JP";
  font-size: $text-size;
  margin-top: 8px;
  line-height: 48px;
}

.TheAbout_LinkColor {
  color: $text-color;
}

// .TheAbout_ProfileImg{
//   width: 480px;
//   height: 320px;
// }
.TheAbout_Profile {
  width: 480px;
}

.TheAbout_Content {
  margin-top: 24px;
  width: 480px;
}

.TheAbout_Contact {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.TheAbout_Email .TheAbout_Heading {
  padding-top: 0px;
}
.TheAbout_ItemIcons {
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
}
.TheAbout_ItemIcon {
  display: block;
  font-weight: normal;
  color: $heading-color;
  transition: 0.3s;
}
.TheAbout_ItemIcon:hover {
  color: $hover-color;
}

.TheAbout_ItemIcon_Dribbble {
  font-size: 32px;
}
.TheAbout_ItemIcon_Facebook {
  font-size: 34px;
}
.TheAbout_ItemIcon_Instagram {
  font-size: 34px;
}

.TheAbout_Backgroud {
  width: 100%;
  height: 100%;
  background: #ffffff;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -10;
  padding: 120px;
  // fill: #D2DADF;
  // fill: #f1f1f1;
  fill: #f9f9f9;
  // filter: blur(4px);
  animation: move 10s ease-in-out infinite;
  transform-origin: 50% 50%;
}

@keyframes move {
  0% {
    transform: scale(1) translate(10px, -30px);
  }
  40% {
    transform: scale(0.8, 1) translate(20px, -30px) rotate(160deg);
  }
  80% {
    transform: scale(1.3) translate(0px, 50px) rotate(-20deg);
  }
  100% {
    transform: scale(1) translate(10px, -30px);
  }
}

// .TheHero_Bg {
//   position: absolute;
//   top: 200px;
//   left: 200px;
//   fill: #023F92;
//   width: 50vmax;
//   z-index: -1;

// }

@media screen and (max-width: 1024px) {
  /* 1024pxまでの幅の場合に適応される */

  .TheAbout_Container {
    width: 800px;
    padding-top: 260px;
  }
  .TheAbout_Content {
    margin-top: 48px;
    width: 360px;
  }
  .TheAbout_Profile {
    width: 360px;
  }
  .TheAbout_Heading {
    font-size: 20px;
  }
  .TheAbout_Text {
    font-size: 14px;
    line-height: 28px;
  }
  .TheAbout_Contact {
    width: 800px;
  }
}
@media screen and (max-width: 768px) {
  /* 768pxまでの幅の場合に適応される */

  .TheAbout_Container {
    width: 640px;
    padding-top: 160px;
  }
  .TheAbout_Content {
    margin-top: 48px;
    width: 300px;
  }
  .TheAbout_Profile {
    width: 300px;
  }
  .TheAbout_Heading {
    font-size: 18px;
    padding-top: 6px;
  }
  .TheAbout_Text {
    font-size: 12px;
    line-height: 24px;
  }
  .TheAbout_Contact {
    width: 640px;
  }
}
@media screen and (max-width: 480px) {
  /* 480pxまでの幅の場合に適応される */

  .TheAbout_Container {
    width: 320px;
    padding-top: 120px;
  }
  .TheAbout_Profile {
    width: 320px;
  }
  .TheAbout_Heading {
    font-size: 18px;
    padding-top: 24px;
  }
  .TheAbout_Text {
    margin-top: 12px;
    line-height: 28px;
  }
  .TheAbout_Content {
    margin-top: 4px;
    width: 320px;
  }
  .TheAbout_Contact {
    width: 320px;
    flex-direction: column-reverse;
  }
  .TheAbout_Contact .TheAbout_Heading {
    padding-top: 24px;
  }

  .TheAbout_ItemIcons {
    margin-top: 24px;
    justify-content: space-around;
    width: auto;
  }
  .hide-text {
    display: none;
  }

  .TheAbout_ItemIcon_Dribbble {
    font-size: 30px;
  }
  .TheAbout_ItemIcon_Facebook {
    font-size: 32px;
  }
  .TheAbout_ItemIcon_Instagram {
    font-size: 32px;
  }

  .TheAbout_Social {
    display: none;
  }
}
@media screen and (max-width: 320px) {
  /* 320pxまでの幅の場合に適応される */
  .TheAbout_Container {
    width: 300px;
    margin: 0 auto;
    padding-top: 100px;
  }
  .TheAbout_Profile {
    width: 300px;
  }
  .TheAbout_Heading {
    font-size: 18px;
    padding-top: 24px;
  }
  .TheAbout_Text {
    font-size: 10px;
    margin-top: 12px;
    line-height: 28px;
  }
  .TheAbout_Content {
    margin-top: 2px;
    width: 300px;
  }
  .TheAbout_Contact {
    width: 300px;
  }
}
</style>
