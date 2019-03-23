<template>
  <div class="TheHero">
      <div class="TheHero_Img">
        <div class="TheHero_WorkTrim">
          <img :src="familybookHomeImg" alt class="TheHero_WorkImg">
        </div>
        <!-- <div class="TheHero_WorkBg TheHero_WorkBg_Second"></div> -->
        <!-- <div class="TheHero_WorkBg TheHero_WorkBg_Third"></div> -->
        <h1 class="TheHero_Heading"><span class="TheHero_Heding_Design">Design</span><br>COMMUNICATION</h1>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      familybookHomeImg: "/home/familybook_home.png"
    };
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
  background: #ffffff;
  padding-top: 120px;
}

.TheHero_Img{
  width: 600px;
  height: 450px;
  margin: 0 auto;
  position: relative;
}

.TheHero_WorkTrim {
  overflow: hidden;
  width: 600px;
  height: 450px;
  border-radius: 20px;
  transform: rotateX(45deg) rotateZ(-20deg) translateX(0px) translateY(0px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  box-shadow: 0px 0px 20px 0px rgba(155,155,155,0.2);
}

.TheHero_WorkBg{
  width: 600px;
  height: 450px;
  border-radius: 20px;
  background:#f1f1f1;
  position: absolute;
  top: 20px;
  left: -16px;
  box-shadow: 0px 0px 10px 0px rgba(155,155,155,0.2);
}

.TheHero_WorkBg_Second{
  position: absolute;
  top: 0px;
  left: 0px;
  transform: rotateX(45deg) rotateZ(-20deg) translateX(-12px) translateY(16px);
  z-index: 4;
}
.TheHero_WorkBg_Third{
  position: absolute;
  top: 0px;
  left: 0px;
  transform: rotateX(45deg) rotateZ(-20deg) translateX(-24px) translateY(32px);
  z-index: 3;
}

.TheHero_WorkImg {
  width: auto;
  height: 100%;
}

.TheHero_Heading{
  font-size: 120px;
  width: 90%;
  position: absolute;
  top: 80px;
  left: -240px;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-style: italic;
  color: #D2DADF;
  // color: #ffffff;
  line-height: 160px;
  text-shadow: rgba(155,155,155,0.2) 0 0 4px;
  z-index: 8;
}




@media screen and (max-width: 480px) {
  .TheHero_Work {
    padding-top: 30px;
    margin-bottom: 32px;
  }

  .TheHero_WorkBg {
    width: 320px;
    height: 240px;
  }

  .TheHero_WorkTrim {
    width: 300px;
    height: 225px;
    position: relative;
    left: 10px;
    top: 7px;
  }
}
@media screen and (max-width: 320px) {
  .TheHero_Work {
    width: 280px;
  }

  .TheHero_WorkBg {
    width: 280px;
    height: 210px;
  }

  .TheHero_WorkTrim {
    width: 260px;
    height: 195px;
    position: relative;
    left: 10px;
    top: 7px;
  }

  .TheHero_WorkImg {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: auto;
    height: 100%;
  }
}
</style>



