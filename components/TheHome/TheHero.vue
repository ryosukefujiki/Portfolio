<template>
  <div class="TheHero">
    <div class="TheHero_Work">
      <a>
        <div class="TheHero_WorkBg"></div>
        <div class="TheHero_WorkTrim">
          <img :src="familybookHomeImg" alt class="TheHero_WorkImg">
        </div>
      </a>
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
  background: #fffffa;
}

.TheHero_Work {
  position: relative;
  width: 340px;
  top: 120px;
  left: 200px;
  // transform: rotateX(20deg) rotateZ(40deg) rotateY(20deg);
  // transform: skewY(8deg) rotateX(10deg) rotateZ(0deg) rotateY(30deg);
  // transform: skewY(8deg);
  // transform: rotateX(45deg) rotateZ(-30deg) translateY(0%);
  // transform: rotateX(45deg) rotateZ(-30deg)
  transform: rotateX(30deg) rotateY(-10deg) rotateZ(0deg) translateZ(-60px);
  perspective: 1000px;
}

.TheHero_WorkBg {
  position: absolute;
  width: 340px;
  height: 260px;
  border-radius: 20px;
  background: #fcfcfc;
  box-shadow: 0px 0px 4px 0px rgba(155, 155, 155, 0.2);
  transition: 0.2s;
  transition-timing-function: ease-out;
}

.TheHero_WorkTrim {
  z-index: 4;
  overflow: hidden;
  width: 320px;
  height: 240px;
  border-radius: 20px;
  position: relative;
  left: 10px;
  top: 10px;
}

.TheHero_WorkImg {
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: auto;
  height: 100%;

  transition: 0.2s;
  transition-timing-function: ease-out;

  transform-origin: center;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
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



