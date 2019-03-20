<template>
  <div class="TheWork">
    <div class="TheWork_HeroImg FamilybookImg">
      <p class="TheWork_HeroNumber">01 - 05</p>
      <h1 class="TheWork_HeroHeading">かぞくが、ものがたり。</h1>
      <p class="TheWork_HeroCategory">UI Design / UX Design / Logo Design</p>
    </div>

    <section class="TheWork_Contents">
      <div class="TheWork_Content TheWork_Overview">
        <div class="TheWork_Overview_Leftside">
          <div class="Content_Overview">
            <p class="Content_Subtitle">Overview</p>
            <h2 class="Content_Title">敬老の日を盛り上げるアイディア</h2>
            <p
              class="Overview_Text"
            >電通 Internship 2017 アイディアの学校 にて開催された「敬老の日を盛り上げるアイディアを考える」がテーマのコンペティションで 最優秀賞 をいただいた作品です。敬老の日に家族でとりくむ参加型のプロダクトを制作しました。この絵本ほとんどが空白のページでできており、祖父母との対話を通じ、家族にまつわるストーリーを子供が絵本で完成させるというプロダクトです。</p>
          </div>

          <div class="Content_Award">
            <p class="Content_Subtitle">Award</p>
            <h2 class="Content_Title">「アイディアの学校」 金賞 受賞</h2>
            <p class="Overview_Text">
              <a
                class="link__text familybookText"
                href="http://www.career.dentsu.jp/intern/2017/"
                target="_blank"
              >電通インターンシップ2017 アイディアの学校</a> 金賞 受賞
            </p>
          </div>
        </div>

        <div class="TheWork_Overview_RightSide">
          <div class="Content_Details">
            <p class="Content_Right_Subtitle">Project Details</p>
            <p class="Overview_Text">制作日 : 2017年8月
              <br>制作期間: 2weeks
            </p>
          </div>

          <div class="Content_Tool">
            <p class="Content_Right_Subtitle">Tool</p>
            <p class="Overview_Text">Adobe Illustrator
              <br>Adobe Photoshop
            </p>
          </div>

          <div class="Content_Team">
            <p class="Content_Right_Subtitle">Team(2)</p>
            <p class="Overview_Text">藤木 良祐
              <br>
              <span class="Overview_Text__task">- Design</span>
              <br>
              <span class="Overview_Text__task">- Planning</span>
              <br>荒川 陸
              <br>
              <span class="Overview_Text__task">- Planning</span>
            </p>
          </div>
        </div>

        <img :src="familybookHomeImg" alt class="TheWork_Img TheWork_Img_Big">
        <img :src="familybookOpenImg" alt class="TheWork_Img TheWork_Img_Big">
      </div>
      <div class="TheWork_Content TheWork_Process">
            <div class="Content_Process">
                <p class="Content_Subtitle">Process</p>
                <h2 class="Content_Title">敬老の日は、「かぞくの日」</h2>
                <p class="Content_Text">敬老の日の抱える課題を私たちは、「核家族化する現代において祖父母が家族の文脈から離れてしまっていること」と捉え、「敬老の日に祖父母と家族の関係性を取り戻す」ための解決策として、参加型の未完成の絵本を提案しました。敬老の日を、かぞくの日として捉え直す視点を評価いただきました。</p>
                <div class="Image_Container">
                    <img :src="process01Img" alt="" class="TheWork_Img TheWork_Img_Small ">
                    <img :src="process02Img" alt="" class="TheWork_Img TheWork_Img_Small  ">
                    <img :src="process03Img" alt="" class="TheWork_Img TheWork_Img_Small ">
                    <img :src="process04Img" alt="" class="TheWork_Img TheWork_Img_Small  ">
                </div>
            </div>
        </div>

        <div class="TheWork_Content TheWork_Contents">
            <div class="Content_Process">
                <p class="Content_Subtitle">Contents</p>
                <h2 class="Content_Title">世界に一つだけの絵本</h2>
                <p class="Content_Text">絵本の構成するページのほとんどが、下図のように空白でできています。子どもが祖父母に、いつもは聞けない話を聞いて、一つの作品に仕上げるプロダクトです。それにより、世界にたったの一つだけの絵本が生まれます。「家族のなりたち」や、「パパとママの出会い」、「パパとママの昔話」などのテーマで構成されています。</p>

                <div class="Image_Container">
                    <img :src="page01Img" alt="" class="TheWork_Img TheWork_Img_Small ">
                    <img :src="page02Img" alt="" class="TheWork_Img TheWork_Img_Small  ">
                    <img :src="page03Img" alt="" class="TheWork_Img TheWork_Img_Small ">
                    <img :src="page04Img" alt="" class="TheWork_Img TheWork_Img_Small  ">
                    <img :src="page05Img" alt="" class="TheWork_Img TheWork_Img_Small ">
                    <img :src="page06Img" alt="" class="TheWork_Img TheWork_Img_Small  ">
                    <img :src="page07Img" alt="" class="TheWork_Img TheWork_Img_Small ">
                    <img :src="page08Img" alt="" class="TheWork_Img TheWork_Img_Small  ">
                </div>




            </div>
        </div>
        <div class="TheWork_Content TheWork_Research">
            <div class="Content_Process">
                <p class="Content_Subtitle">User Research</p>
                <h2 class="Content_Title">6歳の女の子の実施例</h2>
                <p class="Content_Text">プロダクトの実用性を検証するため、実際に6歳児の女の子がいる家庭で、「かぞくが、ものがたり。」を使っていただきました。子どもの創造性を活かすお絵かきのページと、ある程度のストーリーの枠組みを用意することで、子どものモチベーションのバランスを保つことが確認できました。</p>

                <div class="Image_Container ">
                    <img :src="page03Img" alt="" class="TheWork_Img TheWork_Img_Small " width="320px" height="228.05px">
                    <img :src="research01Img" alt="" class="TheWork_Img TheWork_Img_Small  " width="320px" height="228.05px">
                    <img :src="page07Img" alt="" class="TheWork_Img TheWork_Img_Small " width="320px" height="228.05px">
                    <img :src="research02Img" alt="" class="TheWork_Img TheWork_Img_Small  " width="320px" height="228.05px">
                    <img :src="page08Img" alt="" class="TheWork_Img TheWork_Img_Small " width="320px" height="228.05px">
                    <img :src="research03Img" alt="" class="TheWork_Img TheWork_Img_Small  " width="320px" height="228.05px">
                </div>

                <img :src="research04Img" alt="" class="TheWork_Img TheWork_Img_Big">


            </div>
        </div>

        <div class="TheWork_Content TheWork_TheOther">
            <div class="Content_Process">
                <p class="Content_Subtitle">The Other Works</p>
                <h2 class="Content_Title">その他の作品について</h2>

                <section class="TheOther_Works">
                     <TheHiveButton></TheHiveButton>
                     <TheLineandballButton></TheLineandballButton>
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
import TheFooter from '~/components/TheHeader/TheFooter.vue'
import TheHiveButton from '~/components/TheHome/TheHiveButton.vue'
import TheFamilybookButton from '~/components/TheHome/TheFamilybookButton.vue'
import TheLineandballButton from '~/components/TheHome/TheLineandballButton.vue'
import ThePlayfulfesButton from '~/components/TheHome/ThePlayfulfesButton.vue'
import TheScrapboardButton from '~/components/TheHome/TheScrapboardButton.vue'

export default {
    components: {
        TheFooter,
        TheHiveButton,
        TheFamilybookButton,
        TheLineandballButton,
        ThePlayfulfesButton,
        TheScrapboardButton,
    },
    data () {
    return {
      familybookHomeImg: '/familybook/familybook_home.png',
      familybookOpenImg: '/familybook/openbook.png',
      page01Img: 'familybook/page01.jpg',
      page02Img: 'familybook/page02.jpg',
      page03Img: 'familybook/page03.jpg',
      page04Img: 'familybook/page04.jpg',
      page05Img: 'familybook/page05.jpg',
      page06Img: 'familybook/page06.jpg',
      page07Img: 'familybook/page07.jpg',
      page08Img: 'familybook/page08.jpg',
      process01Img: 'familybook/process01.png',
      process02Img: 'familybook/process02.png',
      process03Img: 'familybook/process03.png',
      process04Img: 'familybook/process04.png',
      research01Img: 'familybook/research01.png',
      research02Img: 'familybook/research02.png',
      research03Img: 'familybook/research03.png',
      research04Img: 'familybook/research04.png',
    }
  },
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
.FamilybookImg {
  background: url("/home/familybook_home.png");
  //  background: rgba(39, 39, 39, 0.1) url("/home/familybook_home.png");
  // background-blend-mode: multiply;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.TheWork_HeroNumber {
  font-family: Georgia;
  color: #ffffff;
  font-size: 28px;
  position: absolute;
  left: 80px;
  bottom: 170px;
  font-family: "Noto Sans", sans-serif;
}
.TheWork_HeroHeading {
  font-weight: 500;
  font-size: 40px;
  color: #ffffff;
  display: block;
  position: absolute;
  left: 76px;
  bottom: 106px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI",
    "Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
}
.TheWork_HeroCategory {
  font-size: 22px;
  color: #ffffff;
  position: absolute;
  left: 78px;
  bottom: 60px;
  /* letter-spacing: 4px; */
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
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
    .TheWork_HeroNumber{
        font-size: 16px;
      left: 24px;
      bottom: 94px;
    }
    .TheWork_HeroHeading{
        font-size: 22px;
      left: 24px;
      bottom: 60px;
    }
    .TheWork_HeroCategory{
        font-size: 14px;
      left: 24px;
      bottom: 32px;
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

