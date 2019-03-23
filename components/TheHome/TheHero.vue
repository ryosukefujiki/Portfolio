<template>
  <div class="TheHero">
    <div class="TheHero_Img">
      <div class="TheHero_WorkTrim">
        <img :src="lineandballHomeImg" alt class="TheHero_WorkImg">
        <div class="TheHero_WorkBg_FadeIn"></div>
      </div>
      <div class="TheHero_WorkBg TheHero_WorkBg_Second"></div>
      <div class="TheHero_WorkBg TheHero_WorkBg_Third"></div>
      <h1 class="TheHero_Heading TheHero_Heding_Design">
        <span class="">Design</span>
        <!-- <span class="TheHero_Bg"></span> -->
      </h1>
      <h2 class="TheHero_Heading TheHero_Heding_Copy">
        <span class="">GAME</span><span class="TheHero_Bg"></span>
      </h2>
      <p class="TheHero_AnchorText">Show me more →</p>
    </div>
      <!-- <h2 class="TheHero_Heading">
        <span class="TheHero_Heding_Copy">RELATION</span><span class="TheHero_Bg"></span>
      </h2> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      familybookHomeImg: "/home/familybook_home.png",
      lineandballHomeImg: '/home/lineandball_home.png',
      hiveHomeImg: '/home/hive_home.png',
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
  // position: relative;
}

.TheHero_Img {
  width: 600px;
  height: 450px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
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
  box-shadow: 0px 0px 20px 0px rgba(155, 155, 155, 0.2);
  transition: 0.3s;
}

.TheHero_Img:hover .TheHero_WorkTrim{
  transform: rotateX(40deg) rotateZ(-20deg) translateX(0px) translateY(0px);
}

.TheHero_Img:hover .TheHero_WorkBg_FadeIn{
  transform: rotateX(40deg) rotateZ(-20deg) translateX(0px) translateY(0px);
}

.TheHero_Img:hover .TheHero_WorkBg_Second{
  transform: rotateX(40deg) rotateZ(-20deg) translateX(-12px) translateY(16px);
}

.TheHero_Img:hover .TheHero_WorkBg_Third{
  transform: rotateX(40deg) rotateZ(-20deg) translateX(-24px) translateY(32px);
}

.TheHero_WorkBg {
  width: 600px;
  height: 450px;
  border-radius: 20px;
  background: #ffffff;
  position: absolute;
  top: 20px;
  left: -16px;
  box-shadow: 0px 0px 10px 0px rgba(155, 155, 155, 0.2);
  transition: 0.3s;
}

.TheHero_WorkBg_FadeIn{
  width: 600px;
  height: 450px;
  border-radius: 20px;
  background: #82C3E0;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 10px 0px rgba(155, 155, 155, 0.2);
  transition: 0.3s;
  z-index: 6;
  transform: rotateX(45deg) rotateZ(-20deg) translateX(0px) translateY(0px);

  animation: secondaryImageOverlayIn 0.6s 0s cubic-bezier(.77,0,.175,1),secondaryImageOverlayOut 0.6s 0.6s cubic-bezier(.77,0,.175,1);
  animation-fill-mode: both;
}

.TheHero_WorkBg_Second {
  position: absolute;
  top: 0px;
  left: 0px;
  transform: rotateX(45deg) rotateZ(-20deg) translateX(-12px) translateY(16px);
  z-index: 4;
}
.TheHero_WorkBg_Third {
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

.TheHero_Heading {
  font-size: 120px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  color: #d2dadf;
  // color: #272727;
  line-height: 160px;
  overflow: hidden;
  position: relative;
  top: 60px;
  left: -240px;
  z-index: 8;
}

.TheHero_Heding_Design{
  color: #454545;
  width: 400px;
  height: auto;
}

.TheHero_Heding_Copy{
  width: 1024px;
  height: auto;
  text-shadow: rgba(125, 155, 155, 0.2) 0 0 8px;
}

.TheHero_Bg{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 120%;
  background-color: #82C3E0;
  animation: secondaryImageOverlayIn 0.6s 0s cubic-bezier(.77,0,.175,1),secondaryImageOverlayOut 0.6s 0.6s cubic-bezier(.77,0,.175,1);
  animation-fill-mode: both;
  width: 100%;
  z-index: 2;
}

.TheHero_AnchorText{
  color: #9b9b9b;
  position: relative;
  top: 80px;
  left: -228px;
  font-family: "Noto Sans", sans-serif;
  // font-weight: 200;
  font-size: 24px;
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



