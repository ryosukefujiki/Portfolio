<template>
  <header class="TheHeader">
        <h1 class="TheHeader_Title">
            <img :src="headerTitle" alt="" class="TheHeader_TitleImg"  @click="routing('/')">
        </h1>
        <div class="TheHeader_Toggle" :class="{'active': headerActive}" @click="toggleMenu">
            <img :src="headerHamburgerBg" alt="" class="TheHeader_ToggleImg">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <TheNav :class="{'open': headerActive}"></TheNav>
  </header>
</template>

<script>

import TheNav from '~/components/TheHeader/TheNav.vue'

export default {
  data () {
    return {
      headerTitle: '/HeaderTitleImg.png',
      headerHamburgerBg: '/HeaderTitleMenu.png',
      headerActive: false,
      headerOpen: false,
    }
  },
  components: {
    TheNav,
  },
  methods: {
    toggleMenu (){
      this.headerActive = !this.headerActive
    },
    routing(url){
      this.$router.push(url)
      if (this.headerActive == true){
        this.toggleMenu()
      }
    },
  },
}
</script>

<style lang="scss" scoped>

$blackColor: #272727;

.TheHeader_TitleImg{
  height: 64px;
  position: fixed;
  top: 64px;
  left: 74px;
  z-index: 10;
  display: block;
  cursor: pointer;
}

.TheHeader_Toggle{
  position: fixed;
  top: 64px;
  right: 74px;
  z-index: 10;
  display: block;
  cursor: pointer;
}
.TheHeader_ToggleImg{
  height: 64px;
}

.TheHeader_Toggle span {
  display: block;
  position: fixed;
  top: 64px;
  right: 96px;
  width: 20px;
  height: 4px;
  background-color: $blackColor;
  border-radius: 4px;
  transition: all .4s;
  box-sizing: border-box;
}

.TheHeader_Toggle span:nth-of-type(1) {
  top: 86px;
}
.TheHeader_Toggle span:nth-of-type(2) {
  top: 94px;
}
.TheHeader_Toggle span:nth-of-type(3) {
  top: 102px;
}

/* ハンバーガーのアニメーション */
.TheHeader_Toggle span:nth-of-type(1) {
  animation: line1 .75s forwards;
}
@keyframes line1 {
  0% {
    transform: translateY(8px) rotate(45deg);
  }
  50% {
    transform: translateY(8px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
.TheHeader_Toggle span:nth-of-type(2) {
  transition: all .25s .25s;
  opacity: 1;
}
.TheHeader_Toggle span:nth-of-type(3) {
  animation: line2 .75s forwards;
}
@keyframes line2 {
  0% {
    transform: translateY(-8px) rotate(-45deg);
  }
  50% {
    transform: translateY(-8px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
.TheHeader_Toggle.active span:nth-of-type(1) {
  animation: active-line1 .75s forwards;
}
@keyframes active-line1 {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(8px) rotate(0);
  }
  100% {
    transform: translateY(8px) rotate(45deg);
  }
}
.TheHeader_Toggle.active span:nth-of-type(2) {
  opacity: 0;
}
.TheHeader_Toggle.active span:nth-of-type(3) {
  animation: active-line3 .75s forwards;
}
@keyframes active-line3 {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-8px) rotate(0);
  }
  100% {
    transform: translateY(-8px) rotate(-45deg);
  }
}





@media screen and (max-width: 1024px) {
    /* 1024pxまでの幅の場合に適応される */
    .TheHeaderTitle{
      left: 64px;
    }

    .TheHeader_Toggle{
      right: 64px;

    }

    .TheHeader_Toggle span {
      right: 86px;
    }

}
@media screen and (max-width: 768px) {
    /* 768pxまでの幅の場合に適応される */
}
@media screen and (max-width: 480px) {
    /* 480pxまでの幅の場合に適応される */

    .TheHeader_TitleImg{
      height: 52px;
    }

    .TheHeader_ToggleImg{
      height: 52px;
    }

    .TheHeader_TitleImg{
      top: 38px;
      left: 22px;
    }

    .TheHeader_Toggle{
      top: 38px;
      right: 21px;

    }

    .TheHeader_Toggle span {
      top: 38px;
      right: 39px;
      width: 16px;
      height: 3px;
      border-radius: 3px;
    }


    .TheHeader_Toggle span:nth-of-type(1) {
      top: 57px;
    }
    .TheHeader_Toggle span:nth-of-type(2) {
      top: 63px;
    }
    .TheHeader_Toggle span:nth-of-type(3) {
      top: 69px;
    }


    @keyframes line1 {
      0% {
        transform: translateY(6px) rotate(45deg);
      }
      50% {
        transform: translateY(6px) rotate(0);
      }
      100% {
        transform: translateY(0) rotate(0);
      }
    }

    @keyframes line2 {
      0% {
        transform: translateY(-6px) rotate(-45deg);
      }
      50% {
        transform: translateY(-6px) rotate(0);
      }
      100% {
        transform: translateY(0) rotate(0);
      }
    }

    @keyframes active-line1 {
      0% {
        transform: translateY(0) rotate(0);
      }
      50% {
        transform: translateY(6px) rotate(0);
      }
      100% {
        transform: translateY(6px) rotate(45deg);
      }
    }

    @keyframes active-line3 {
      0% {
        transform: translateY(0) rotate(0);
      }
      50% {
        transform: translateY(-6px) rotate(0);
      }
      100% {
        transform: translateY(-6px) rotate(-45deg);
      }
    }



}
@media screen and (max-width: 320px) {
    /* 320pxまでの幅の場合に適応される */
    .TheHeader_Title{
      top: 24px;
    }

    .TheHeader_Toggle{
      top: 24px;

    }

    .TheHeader_Toggle span {
      top: 48px;
    }

    .TheHeader_Toggle span:nth-of-type(1) {
      top: 46px;
    }
    .TheHeader_Toggle span:nth-of-type(2) {
      top: 54px;
    }
    .TheHeader_Toggle span:nth-of-type(3) {
      top: 62px;
    }
}
</style>

