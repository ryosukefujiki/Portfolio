<template>

<section class="TheAbout">
    <TheProfileImg></TheProfileImg>
    <!-- <img :src="profileImg" alt="" class="TheAbout_ProfileImg"> -->
    <div class="TheAbout_Profile">
      <h2 class="TheAbout_Heading">🙌 Hi, I’m Ryosuke Fujiki</h2>
      <p class="TheAbout_Text">1996年シンガポール生まれ、東京育ち。
        2015年より慶應義塾大学環境情報学部に通い、2019年春に卒業。HCI,
        UI/UX を研究テーマとする中西泰人研究室に所属し、 ORFや MAKER FAIRE TOKYO など
        の展示を通して研究発表を行ってきた。デザイン、エンジニアリングの両軸を専門とする企画立案から ”ものづくり” をすることが得意なクリエイター。</p>
    </div>
    <div class="TheAbout_Detail">
      <div class="TheAbout_Award TheAbout_Content">
        <h2 class="TheAbout_Heading">🏆 AWARDS</h2>
        <p class="TheAbout_Text">
          2019 SFC STUDENT AWARD<br>
          2018 UIST Student Inovation Contest Most Creative <span class="hide-text">Award</span><br>
          2018 UIST Student Inovation Contest People Choice <span class="hide-text">Award</span><br>
          2018 Goodpatch Winter Internship 最優秀賞<br>
          2017 CyberAgent UIDA UI発明賞<br>
          2017 電通「アイディアの学校」 金賞</p>
      </div>
      <div class="TheAbout_Skill TheAbout_Content">
        <h2 class="TheAbout_Heading">✏️ SKILLS</h2>
        <p class="TheAbout_Text">
          Adobe Illustrator/Photoshop/Premiere/AfterEffects<br>
          HTML/CSS/JavaScript/Vue.js/Nuxt.js/Python<br>
          Arduino/RaspberryPi/Processing<br>
          Sketch/Adobe XD/ProtoPie<br>
        </p>
      </div>
    </div>
    <div class="TheAbout_Experience">
      <div class="TheAbout_Education TheAbout_Content">
        <h2 class="TheAbout_Heading">🎓 EDUCATION</h2>
        <p class="TheAbout_Text">2015-2019 慶應義塾大学環境情報学部</p>
      </div>
      <div class="TheAbout_Work TheAbout_Content">
        <h2 class="TheAbout_Heading">💻 WORKS</h2>
        <p class="TheAbout_Text">
          2018 NIHONBASHI β Creator<br>
          2018 Yahoo! 冬季インターンシップ<br>
          2018 Goodpatch 冬季インターンシップ<br>
          2017 DeNA 「Delight U for Student」<br>
          2017 CyberAgent 「UIDA」　<br>
          2017 CyberAgent Technical Creator Challenge<br>
          2017 電通「アイディアの学校」　<br>
          2016 チームラボ株式会社<br>
          2015 株式会社ライフイズテック</p>
      </div>
    </div>
    <div class="TheAbout_Contact">
    <div class="TheAbout_Social TheAbout_Content">
      <div class="TheAbout_ItemIcons">
        <a href="https://dribbble.com/bighappy" class="TheAbout_ItemIcon TheAbout_ItemIcon_Dribbble" target="_blank">
          <i class="fab fa-dribbble"></i>
        </a>
        <a href="https://www.facebook.com/rfujiki0625" class="TheAbout_ItemIcon TheAbout_ItemIcon_Facebook" target="_blank">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/ryosukefujiki/" class="TheAbout_ItemIcon TheAbout_ItemIcon_Instagram" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
       </div>
    </div>
    <div class="TheAbout_Email TheAbout_Content">
      <h2 class="TheAbout_Heading">📩 DROP ME A LINE !</h2>
      <a class="TheAbout_Text">ryosukefujiki625 ＠ gmail.com</a>
    </div>
    </div>
  </section>

</template>

<script>
import TheProfileImg from '~/components/TheAbout/TheProfileImg.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    TheProfileImg,
  },
  data () {
    return {
      profileImg: '/about/profile.png',
      skillImg: 'about/skill.gif',
      internshipImg: 'about/internship.jpg'
    }
  },
  computed: {
    count () { return this.$store.state.counter.count }
  },
  methods: {
    addCount (e) {
      this.$store.commit('counter/add')
    }
  }
}
</script>

<style lang="scss" scoped>
$heading-color: #272727;
$heading-size: 24px;
$text-color: #9B9B9B;
$text-size: 16px;
$hover-color: #D2DADF;

.TheAbout{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 240px;
  margin: 0 auto;
  width: 1000px;
  // margin-left: 120px;
  // margin-right: 120px;
}
.TheAbout_Heading{
  color: $heading-color;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: $heading-size;
  // letter-spacing: 0.5px;
  padding-top: 12px;
}
.TheAbout_Text{
  color: $text-color;
  font-family: "Noto Sans JP";
  font-size: $text-size;
  margin-top: 8px;
  line-height: 48px;
}

// .TheAbout_ProfileImg{
//   width: 480px;
//   height: 320px;
// }
.TheAbout_Profile{
  width: 480px;
}

.TheAbout_Content{
  margin-top: 48px;
  width: 480px;
}

.TheAbout_Contact{
  width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.TheAbout_Email .TheAbout_Heading{
  padding-top: 0px;
}
.TheAbout_ItemIcons{
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
}
.TheAbout_ItemIcon{
  display: block;
  font-weight: normal;
  color: $heading-color;
  transition: 0.3s;
}
.TheAbout_ItemIcon:hover{
  color: $hover-color;
}

.TheAbout_ItemIcon_Dribbble{
  font-size: 32px;
}
.TheAbout_ItemIcon_Facebook{
  font-size: 34px;
}
.TheAbout_ItemIcon_Instagram{
  font-size: 34px;
}

@media screen and (max-width: 1024px) {
    /* 1024pxまでの幅の場合に適応される */
    .TheAbout{
      width: 800px;
    }
    .TheAbout_Content{
      margin-top: 48px;
      width: 360px;
    }
    .TheAbout_Profile{
      width: 360px;
    }
    .TheAbout_Heading{
      font-size: 20px;
    }
    .TheAbout_Text{
      font-size: 14px;
      line-height: 28px;
    }
    .TheAbout_Contact{
      width: 800px;
    }
}
@media screen and (max-width: 768px) {
    /* 768pxまでの幅の場合に適応される */
    .TheAbout{
      width: 640px;
      padding-top: 200px;
    }
    .TheAbout_Content{
      margin-top: 48px;
      width: 300px;
    }
    .TheAbout_Profile{
      width: 300px;
    }
    .TheAbout_Heading{
      font-size: 18px;
      padding-top: 6px;
    }
    .TheAbout_Text{
      font-size: 12px;
      line-height: 24px;
    }
    .TheAbout_Contact{
      width: 640px;
    }
}
@media screen and (max-width: 480px) {
    /* 480pxまでの幅の場合に適応される */
    .TheAbout{
      width: 320px;
      padding-top: 120px;
    }
    .TheAbout_Profile{
      width: 320px;
    }
    .TheAbout_Heading{
      font-size: 18px;
      padding-top: 24px;
    }
    .TheAbout_Text{
      margin-top: 12px;
      line-height: 28px;
    }
    .TheAbout_Content{
      margin-top: 12px;
      width: 320px;
    }
    .TheAbout_Contact{
      width: 320px;
      flex-direction: column-reverse;
    }
    .TheAbout_Contact .TheAbout_Heading{
      padding-top: 24px;
    }

    .TheAbout_ItemIcons{
      margin-top: 24px;
      justify-content: space-around;
      width: auto;
    }
    .hide-text{
      display: none;
    }

    .TheAbout_ItemIcon_Dribbble{
      font-size: 30px;
    }
    .TheAbout_ItemIcon_Facebook{
      font-size: 32px;
    }
    .TheAbout_ItemIcon_Instagram{
      font-size: 32px;
    }

    .TheAbout_Social{
      display: none;
    }
}
@media screen and (max-width: 320px) {
    /* 320pxまでの幅の場合に適応される */
    .TheAbout{
      width: 300px;
      padding-top: 120px;
    }
    .TheAbout_Profile{
      width: 300px;
    }
    .TheAbout_Heading{
      font-size: 18px;
      padding-top: 24px;
    }
    .TheAbout_Text{
      font-size: 10px;
      margin-top: 12px;
      line-height: 28px;
    }
    .TheAbout_Content{
      margin-top: 12px;
      width: 300px;
    }
}

</style>
