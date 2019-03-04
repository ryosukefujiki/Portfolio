<template>
  <section class="container">
    <h1 class="heading"><span class="text--letterspace">Abou</span>t</h1>


    <section class="about__contents">
        <div class="about__introduction clearfix">
            <div class="trim">
                <img :src="profileImg" alt="" class="about__introduction__img">
            </div>
            <div class="about__introduction__text">
                <h2 class="about__introduction__title">Hi, I’m Ryosuke Fujiki</h2><br>
                <p class="about__introduction__details">1996年シンガポール生まれ、東京育ち。2015年より慶應義塾大学環境情報学部に通い、2018年春に大学４年生に進学する。HCI, UI/UX を研究テーマとする中西泰人研究室に所属し、 ORFや MAKER FAIRE TOKYO などの展示を通して研究発表を行ってきた。デザイン、エンジニアリングの両軸を専門とする企画立案から ”ものづくり” をすることが得意なクリエイター。</p>
            </div>
        </div>

        <div class="about__skill clearfix">
            <img :src="skillImg" alt="" class="sp_about__skill__img">
            <div class="about__skill__text">
                <h2 class="about__skill__title">Skills</h2><br>
                <p class="about__skill__details">
                    Adobe Illustrator / Photoshop<br> Adobe Premiere / AfterEffects<br> HTML / CSS / JavaScript / Python<br> Sketch
                    <br> ProtoPie
                    <br>
                </p>
            </div>
            <img :src="skillImg" alt="" class="about__skill__img">
        </div>

        <div class="about__internship clearfix">
            <div class="trim about__internship__img">
                <img :src="internshipImg" alt="">
            </div>
            <div class="about__internship__text">
                <h2 class="about__internship__title">INTERNSHIP 2015 - 2018</h2><br>
                <p class="about__internship__details">
                    2018 Nihonbashi β Creator<br>2018 Yahoo! 冬季インターンシップ<br> 2018 Goodpatch 冬季インターンシップ　最優秀賞受賞<br> 2017 DeNA 「Delight U for Student」<br> 2017 CyberAgent 「UIDA」　UI発明賞受賞<br> 2017 CyberAgent Technical Creator Challenge<br> 2017 電通「アイディアの学校」　金賞受賞<br> 2016 チームラボ株式会社<br>                    2015 株式会社ライフイズテック
                </p>
            </div>
        </div>

        <!-- <a href="" class="about__contact">Contact Me!</a> -->
    </section>


  </section>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
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
.clearfix:after {
  display: block;
  clear: both;
  content: "";
}

.heading{
  font-size: 48px;
  color: #272727;
  display: block;
  margin: 120px auto;
  margin-top: 280px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-style: italic;
}


.trim {
    margin-top: 24px;
    overflow: hidden;
    width: 216px;/* トリミングしたい枠の幅 */
    height: 288px;/* トリミングしたい枠の高さ */
    position: relative;
    float: left;
    box-shadow: 0px 0px 4px 0px rgba(155,155,155,0.2);
}
.trim img {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: auto;
  height: 100%;
}

.about__contents{
  margin: 0 auto;
  width: 720px;
  padding-bottom: 200px;
  /* background: #f1f1f1; */
}

.about__introduction{
  margin: 0 auto;
}

.about__introduction__text{
  display: block;
  float: left;
  margin-left: 40px;
  width: 462px;
  font-size: 16px;
}

.about__introduction__title{
  display: block;
  float: left;
  font-size: 24px;
  line-height: 48px;
}


.about__introduction__details{
  display: block;
  float: left;
  font-size: 16px;
  color: #9b9b9b;
  line-height: 48px;
}


.about__skill{
  margin: 0 auto;
  margin-top: 180px;
}

.about__skill__img{
  margin-top: 30px;
  display: block;
  width: 416px;
  float: left;
}

.about__skill__text{
  display: block;
  float: left;
  margin-right: 20px;
  width: 280px;
  font-size: 16px;
}

.about__skill__title{
  display: block;
  float: left;
  font-size: 24px;
  line-height: 48px;
}


.about__skill__details{
  display: block;
  float: left;
  font-size: 16px;
  color: #9b9b9b;
  line-height: 48px;
}



.about__internship{
  margin: 0 auto;
  margin-top: 180px;
}

.sp_about__skill__img{
  display: none;
}
.about__internship__img{
  margin-top: 80px;
  display: block;
  width: 216px;
  float: left;
}

.about__internship__text{
  display: block;
  float: left;
  margin-left: 40px;
  width: 462px;
  font-size: 16px;
}

.about__internship__title{
  display: block;
  float: left;
  font-size: 24px;
  line-height: 48px;
}


.about__internship__details{
  display: block;
  float: left;
  font-size: 16px;
  color: #9b9b9b;
  line-height: 48px;
}


.about__contact{
  box-sizing: border-box;
  text-align: center;
  width: 396px;
  height: 72px;
  display: block;
  margin: 0 auto;
  margin-top: 180px;
  padding-top: 22px;
  border-radius: 72px;
  text-decoration: none;
  color: #FFF;
  font-size: 24px;
  background: #272727;
  transition: .4s;
  font-weight: 400;
  box-shadow: 0px 0px 10px 0px rgba(74,74,74,0.2);
}

.about__contact:hover {
  /* -webkit-transform: translateY(-8px); */
  box-shadow: 0px 8px 20px 10px rgba(74,74,74,0.2);
}


@media screen and (max-width: 1024px) {
    /* 1024pxまでの幅の場合に適応される */
    .heading{
      margin: 320px auto;
    }
}
@media screen and (max-width: 768px) {
    /* 768pxまでの幅の場合に適応される */
    .heading{
      margin: 520px auto;
    }

    .about__contents{
      width: 640px;
    }
    .about__introduction__img{
      margin-top: 72px;
      width: 184px;
    }
    .about__introduction__text{
      margin-left: 20px;
      width: 420px;
    }

    .about__skill__img{
      margin-top: 30px;
      width: 376px;
      float: left;
    }

    .about__skill__text{
      margin-right: 20px;
      width: 220px;
    }


    .about__internship{
      margin: 0 auto;
      margin-top: 180px;
    }

    .about__internship__img{
      margin-top: 80px;
      width: 184px;
    }

    .about__internship__text{
      margin-left: 20px;
      width: 420px;
    }

}
@media screen and (max-width: 480px) {
    /* 480pxまでの幅の場合に適応される */
    .heading{
      font-size: 32px;
      margin: 120px auto;
      margin-top: 200px;
      font-family: 'Noto Sans', sans-serif;
    }

    .trim {
        margin-top: 24px;
        overflow: hidden;
        width: 320px;/* トリミングしたい枠の幅 */
        height: 240px;/* トリミングしたい枠の高さ */
        position: relative;
        float: left;
        box-shadow: 0px 0px 4px 0px rgba(155,155,155,0.2);
        margin-bottom: 12px;
    }
    .trim img {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: auto;
      height: 100%;
    }

    .about__contents{
      width: 320px;
    }
    .about__introduction__img{
      margin-left: 0px;
      margin-top: 0px;
    }
    .about__introduction__text{
      margin-left: 0px;
      width: 320px;
    }
    .about__introduction__title{
      font-size: 18px;
    }
    .about__introduction__details{
      font-size: 12px;
      line-height: 24px;
    }
    .about__skill__title{
      font-size: 18px;
    }
    .about__skill__details{
      font-size: 12px;
      line-height: 24px;
    }
    .about__internship__title{
      font-size: 18px;
    }
    .about__internship__details{
      font-size: 12px;
      line-height: 24px;
    }

    .about__skill__img{
      margin-top: 30px;
      width: 120px;
      float: left;
      display: none;
    }

    .sp_about__skill__img{
      display: block;
      width: 320px;
      margin-left: 0px;
      box-shadow: 0px 0px 4px 0px rgba(155,155,155,0.2);
      margin-bottom: 12px;
    }

    .about__skill__text{
      margin-right: 20px;
      width: 220px;
    }


    .about__skill{
      margin: 0 auto;
      margin-top: 48px;
    }

    .about__internship{
      margin: 0 auto;
      margin-top: 48px;
    }



    .about__internship__img{
      margin-top: 0px;
      margin-left: 0px;
    }

    .about__internship__text{
      margin-left: 0px;
      width: 320px;
    }

}
@media screen and (max-width: 320px) {
    /* 320pxまでの幅の場合に適応される */
}

</style>
