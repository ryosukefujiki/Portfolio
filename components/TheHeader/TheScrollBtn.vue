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
//   animation: hoppingLeft 2s infinite;
}

// @keyframes hoppingLeft{
// 0% {
//     transform: rotateZ(-45deg) translate(0, 0);
//   }
//   20% {
//     transform: rotateZ(-45deg) translate(0, 10px);
//   }
//   40% {
//     transform: rotateZ(-45deg) translate(0, 0);
//   }
// }

.TheScrollBtn span:nth-of-type(2) {
  right: 99px;
  bottom: 89px;
  transform-origin: top left;
  transform: rotateZ(45deg);
//   animation: hoppingRight 2s infinite;
}


// @keyframes hoppingRight{
//  0% {
//     transform: rotateZ(45deg) translate(0, 0);
//   }
//   20% {
//    transform: rotateZ(45deg) translate(0, 10px);
//   }
//   40% {
//    transform: rotateZ(45deg) translate(0, 0);
//   }
// }


.TheScrollBtn:hover span{
  background: #D2DADF;
}



@media screen and (max-width: 1024px) {
    /* 1024pxまでの幅の場合に適応される */

    .TheScrollBtn{
      right: 64px;

    }

    .TheScrollBtn span:nth-of-type(1) {
      right: 85px;
    }
    .TheScrollBtn span:nth-of-type(2) {
      right: 89px;
    }

}
@media screen and (max-width: 768px) {
    /* 768pxまでの幅の場合に適応される */

    .TheScrollBtn{
      right: 56px;

    }
    .TheScrollBtn span:nth-of-type(1) {
      right: 76px;
    }
    .TheScrollBtn span:nth-of-type(2) {
      right: 81px;
    }
}
@media screen and (max-width: 480px) {
    /* 480pxまでの幅の場合に適応される */




    .TheScrollBtn{
      display: none;

    }


    // .TheScrollBtn span {
    //   bottom: 38px;
    //   right: 39px;
    //   width: 16px;
    //   height: 3px;
    //   border-radius: 3px;
    // }


    // .TheScrollBtn span:nth-of-type(1) {
    //   top: 57px;
    // }
    // .TheScrollBtn span:nth-of-type(2) {
    //   top: 63px;
    // }
    // .TheScrollBtn span:nth-of-type(3) {
    //   top: 69px;
    // }


}
@media screen and (max-width: 320px) {
    /* 320pxまでの幅の場合に適応される */


    .TheScrollBtn{
      display: none;

    }


    // .TheHeader_Toggle span {
    //   top: 32px;
    //   right: 22px;
    // }

    // .TheHeader_Toggle span:nth-of-type(1) {
    //   top: 44px;
    // }
    // .TheHeader_Toggle span:nth-of-type(2) {
    //   top: 50px;
    // }
    // .TheHeader_Toggle span:nth-of-type(3) {
    //   top: 56px;
    // }
}
</style>

