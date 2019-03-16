<template>
<div class="TheHome">
  <TheHero class="TheHero"></TheHero>
  <div class="TheHome_Container">
        <div class="TheHome_Work">
            <a @click="routing('/hive')">
                <div class="TheHome_WorkBg">
                </div>
                <div class="TheHome_WorkTrim">
                    <img :src="hiveHomeImg" alt="" class="TheHome_WorkImg">
                </div>
                <p class="TheHome_WorkCategory">UI / UX Design</p>
                <p class="TheHome_WorkTitle">Hive</p>
            </a>
        </div>

        <div class="TheHome_Work">
            <a @click="routing('/lineandball')">
                <div class="TheHome_WorkBg">
                </div>
                <div class="TheHome_WorkTrim">
                    <img :src="lineandballHomeImg" alt="" class="TheHome_WorkImg">
                </div>
                <p class="TheHome_WorkCategory">Game Design</p>
                <p class="TheHome_WorkTitle">LINE and BALL</p>
            </a>
        </div>

        <div class="TheHome_Work">
            <a @click="routing('/familybook')">
                <div class="TheHome_WorkBg">
                </div>
                <div class="TheHome_WorkTrim">
                    <img :src="familybookHomeImg" alt="" class="TheHome_WorkImg">
                </div>
                <p class="TheHome_WorkCategory">Planning</p>
                <p class="TheHome_WorkTitle">かぞくが、ものがたり。</p>
            </a>
        </div>

        <div class="TheHome_Work">
            <a @click="routing('/playfulfes')">
                <div class="TheHome_WorkBg">
                </div>
                <div class="TheHome_WorkTrim">
                    <img :src="playfulfesHomeImg" alt="" class="TheHome_WorkImg">
                </div>
                <p class="TheHome_WorkCategory">Web Design</p>
                <p class="TheHome_WorkTitle">プレイフルフェス2018Winter</p>
            </a>
        </div>

        <div class="TheHome_Work">
            <a @click="routing('/scrapboard')">
                <div class="TheHome_WorkBg">
                </div>
                <div class="TheHome_WorkTrim">
                    <img :src="scrapboardHomeImg" alt="" class="TheHome_WorkImg">
                </div>
                <p class="TheHome_WorkCategory">UI / UX Design</p>
                <p class="TheHome_WorkTitle">Scrap Board</p>
            </a>
        </div>
  </div>
   <TheFooter></TheFooter>
</div>
</template>

<script>
import TheHero from '~/components/TheHome/TheHero.vue'
import TheFooter from '~/components/TheHeader/TheFooter.vue'

export default {
  components: {
    TheHero,
    TheFooter,
  },
  methods: {
    routing(url){
      this.$router.push(url)
    },
  },
  data () {
    return {
      hiveHomeImg: '/home/hive_home.png',
      lineandballHomeImg: '/home/lineandball_home.png',
      familybookHomeImg: '/home/familybook_home.png',
      playfulfesHomeImg: '/home/playfulfes_home.png ',
      scrapboardHomeImg: '/home/scrapboard_home.png',
    }
  },
}
</script>

<style lang="scss">

$background-color: #FCFCFC;

.TheHome{
  height: 100%;
  margin-bottom: 48px;
  background: $background-color;
}

.heading{
  font-size: 48px;
  color: #272727;
  display: block;
  padding-top: 320px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-style: italic;
}

.TheHome_Container{
  margin: 0 auto;
  width: 900px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}



.TheHome_Work{
  position: relative;
  padding-top: 30px;
	margin-top: 120px;
  float: left;
}


.TheHome_Work a{
  text-decoration: none;
}


.TheHome_WorkBg{
  position: absolute;
  width: 340px;
  height: 260px;
  border-radius: 20px;
  background: #fcfcfc;
  box-shadow: 0px 0px 4px 0px rgba(155,155,155,0.2);
  transition: 0.2s;
  transition-timing-function:ease-out;
}

.TheHome_Work:hover{
  cursor: pointer;
}

.TheHome_Work:hover .TheHome_WorkBg{
  box-shadow: 0px 0px 20px 0px rgba(155,155,155,0.2);
}

.TheHome_WorkTrim{
  z-index: 4;
  overflow: hidden;
  width: 320px;
  height: 240px;
  border-radius: 20px;
  position: relative;
	left: 10px;
	top: 10px;
}

.TheHome_WorkImg {
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

.TheHome_WorkTrim:hover .TheHome_WorkImg{
  -webkit-transform: scale(1.0);
  transform: scale(1.0);
}

.TheHome_WorkCategory{
  font-size: 18px;
  color: #4a4a4a;
  /* letter-spacing: 4px; */
  margin-top: 36px;
  /* font-family: 'Noto Sans', sans-serif; */
  font-weight: 400;
  text-decoration: none;
}

.TheHome_WorkTitle{
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
    .TheHome_Container{
       width: 800px;
    }

}
@media screen and (max-width: 768px) {
    /* 768pxまでの幅の場合に適応される */
    .TheHome_Container{
      width: 640px;
    }

    .TheHome_WorkBg{
      width: 670px;
      height: 419px;
    }

    .TheHome_WorkTrim{
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
      font-family: 'Noto Sans', sans-serif;
    }


    .TheHome_Work{
      padding-top: 30px;
    	margin-top: 60px;
    }

    .TheHome_Container{
      width: 320px;
    }

    .TheHome_WorkBg{
      width: 320px;
      height: 240px;
    }

    .TheHome_WorkTrim{
      width: 300px;
      height: 225px;
      position: relative;
    	left: 10px;
    	top: 7px;
    }


}
@media screen and (max-width: 320px) {
    /* 320pxまでの幅の場合に適応される */
    .TheHome_Container{
      width: 300px;
    }

    .TheHome_WorkBg{
      width: 280px;
      height: 210px;
    }

    .TheHome_WorkTrim{
      width: 260px;
      height: 195px;
      position: relative;
    	left: 10px;
    	top: 7px;
    }

    .TheHome_WorkImg {
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

