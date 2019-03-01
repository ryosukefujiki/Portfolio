<template>
<div class="container">
  <h1 class="heading"><span class="text--letterspace">Work</span>s</h1>
  <div class="swiper-slide swiper-slide-left">
            <a href="hive.html">
                <div class="contents__bg">
                </div>
                <div class="trim">
                    <img src="images/home/hive_home.png" alt="" class="contents__work__img">
                </div>
                <p class="contents__title">UI / UX Design</p>
                <p class="contents__category">Hive</p>
            </a>
        </div>

        <div class="swiper-slide swiper-slide-right">
            <a href="familybook.html">
                <div class="contents__bg">
                </div>
                <div class="trim">
                    <img src="images/home/familybook_home.png" alt="" class="contents__work__img">
                </div>
                <p class="contents__title">Planning</p>
                <p class="contents__category">かぞくが、ものがたり。</p>
            </a>
        </div>

        <div class="swiper-slide  swiper-slide-left">
            <a href="lineandball.html">
                <div class="contents__bg">
                </div>
                <div class="trim">
                    <img src="images/home/lineandball.png" alt="" class="contents__work__img">
                </div>
                <p class="contents__title">Game Design</p>
                <p class="contents__category">LINE and BALL</p>
            </a>
        </div>

        <div class="swiper-slide  swiper-slide-right">
            <a href="playfulfes.html">
                <div class="contents__bg">
                </div>
                <div class="trim">
                    <img src="images/home/playfulfes.png" alt="" class="contents__work__img">
                </div>
                <p class="contents__title">Web Design</p>
                <p class="contents__category">プレイフルフェス 2018 Winter</p>
            </a>
        </div>

        <div class="swiper-slide swiper-slide-left">
            <a href="scrapboard.html">
                <div class="contents__bg">
                </div>
                <div class="trim">
                    <img src="images/home/scrapboard02.png" alt="" class="contents__work__img">
                </div>
                <p class="contents__title">UI / UX Design</p>
                <p class="contents__category">Scrap Board</p>
            </a>
        </div>
</div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style lang="scss" scoped>

.heading{
  font-size: 48px;
  color: #272727;
  display: block;
  margin: 0px auto;
  margin-top: 280px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-style: italic;
}

.work__contents{
  margin: 0 auto;
  width: 720px;
  padding-bottom: 200px;
  /* background: #f1f1f1; */

}



.swiper-slide{
  position: relative;
  padding-top: 30px;
	margin-top: 120px;
  float: left;
}

.swiper-slide-right{
 margin-left: 80px;
}

.swiper-slide a{
  text-decoration: none;
}


.contents__bg{
  position: absolute;
  width: 340px;
  height: 260px;
  border-radius: 20px;
  background: #fcfcfc;
  box-shadow: 0px 0px 4px 0px rgba(155,155,155,0.2);
  transition: 0.2s;
  transition-timing-function:ease-out;
}

.swiper-slide:hover .contents__bg{
  box-shadow: 0px 0px 20px 0px rgba(155,155,155,0.2);
}

.trim{
  z-index: 4;
  overflow: hidden;
  width: 320px;
  height: 240px;
  border-radius: 20px;
  position: relative;
	left: 10px;
	top: 10px;
}

.trim img {
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

.swiper-slide:hover .trim img{
  -webkit-transform: scale(1.0);
  transform: scale(1.0);
}

.contents__title{
  font-size: 18px;
  color: #4a4a4a;
  /* letter-spacing: 4px; */
  margin-top: 36px;
  /* font-family: 'Noto Sans', sans-serif; */
  font-weight: 400;
  text-decoration: none;
}

.contents__category{
  font-size: 14px;
  margin-top: 8px;
  color: #9b9b9b;
  /* letter-spacing: 4px; */
  /* font-family: 'Noto Sans', sans-serif; */
  font-weight: 400;
  text-decoration: none;
}




@media screen and (max-width: 1024px) {
    /* 1024pxまでの幅の場合に適応される */
    .heading{
      margin: 320px auto;
    }
    .work__contents{
      margin: 0 auto;
      width: 720px;
      padding-bottom: 200px;
      /* background: #f1f1f1; */

    }

}
@media screen and (max-width: 768px) {
    /* 768pxまでの幅の場合に適応される */
    .work__contents{
      margin: 0 auto;
      width: 670px;
      padding-bottom: 200px;
      /* background: #f1f1f1; */

    }
    .contents__bg{
      width: 670px;
      height: 419px;
    }

    .trim{
      width: 626px;
      height: 375px;
      position: relative;
    	left: 22px;
    	top: 22px;
    }

}
@media screen and (max-width: 480px) {
    /* 480pxまでの幅の場合に適応される */


    .heading{
      font-size: 32px;
      margin: 40px auto;
      margin-top: 200px;
      font-family: 'Noto Sans', sans-serif;
    }


    .swiper-slide{
      padding-top: 30px;
    	margin-top: 60px;
    }
    .swiper-slide-right{
     margin-left: 0px;
    }

    .work__contents{
      margin: 0 auto;
      width: 320px;
      padding-bottom: 200px;
      /* background: #f1f1f1; */

    }
    .contents__bg{
      width: 320px;
      height: 240px;
    }

    .trim{
      width: 300px;
      height: 225px;
      position: relative;
    	left: 10px;
    	top: 7px;
    }


}
@media screen and (max-width: 320px) {
    /* 320pxまでの幅の場合に適応される */
    .work__contents{
      margin: 0 auto;
      width: 280px;
      padding-bottom: 200px;
      /* background: #f1f1f1; */

    }
    .contents__bg{
      width: 280px;
      height: 210px;
    }
    .swiper-slide-right{
     margin-left: 0px;
    }

    .trim{
      width: 260px;
      height: 195px;
      position: relative;
    	left: 10px;
    	top: 7px;
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
}

</style>

