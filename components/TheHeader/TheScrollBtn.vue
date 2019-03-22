<template>
        <div class="TheScrollBtn">
            <img :src="headerHamburgerBg" alt="" class="TheScrollBtn_Img">
            <span></span>
            <span></span>
        </div>
</template>

<script>

export default {
  data () {
    return {
      headerHamburgerBg: '/HeaderTitleMenu.png',
    }
  },

  components: {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

$blackColor: #272727;

.TheScrollBtn{
  height: 64px;
  position: fixed;
  bottom: 56px;
  right: 74px;
  z-index: 10;
  display: block;
  cursor: pointer;
}
.TheScrollBtn_Img{
    height: 64px;
}



.TheScrollBtn span {
  display: block;
  position: fixed;
  bottom: 48px;
  right: 96px;
  width: 16px;
  height: 4px;
  background-color: $blackColor;
  border-radius: 4px;
  transition: all .2s;
  box-sizing: border-box;
  transform: rotateY( 0deg ) ;
}

.TheScrollBtn span:nth-of-type(1) {
  bottom: 90px;
  right: 95px;
  transform-origin: bottom right;
  transform: rotateZ(-45deg);
}

.TheScrollBtn span:nth-of-type(2) {
  right: 99px;
  bottom: 89px;
  transform-origin: top left;
  transform: rotateZ(45deg);
}


.TheScrollBtn:hover span{
  background: #D2DADF;
}



@media screen and (max-width: 1024px) {
    /* 1024pxまでの幅の場合に適応される */
    .TheHeader_TitleImg{
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
    .TheHeader_TitleImg{
      left: 56px;
    }
    .TheHeader_Toggle{
      right: 56px;

    }
    .TheHeader_Toggle span {
      right: 78px;
    }
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
    .TheHeader_TitleImg{
      top: 24px;
      left: 4px;
    }

    .TheHeader_Toggle{
      top: 24px;
      right: 4px;
    }

    .TheHeader_Toggle span {
      top: 32px;
      right: 22px;
    }

    .TheHeader_Toggle span:nth-of-type(1) {
      top: 44px;
    }
    .TheHeader_Toggle span:nth-of-type(2) {
      top: 50px;
    }
    .TheHeader_Toggle span:nth-of-type(3) {
      top: 56px;
    }
}
</style>

