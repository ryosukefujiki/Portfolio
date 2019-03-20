<template>
<div class="TheHome">
  <TheHero class="TheHero"></TheHero>
  <div class="TheHome_Container">
        <TheHiveButton></TheHiveButton>
        <TheFamilybookButton></TheFamilybookButton>
        <TheLineandballButton></TheLineandballButton>
        <ThePlayfulfesButton></ThePlayfulfesButton>
        <TheScrapboardButton></TheScrapboardButton>
  </div>
   <TheFooter></TheFooter>
</div>
</template>

<script>
import TheHero from '~/components/TheHome/TheHero.vue'
import TheFooter from '~/components/TheHeader/TheFooter.vue'
import TheHiveButton from '~/components/TheHome/TheHiveButton.vue'
import TheFamilybookButton from '~/components/TheHome/TheFamilybookButton.vue'
import TheLineandballButton from '~/components/TheHome/TheLineandballButton.vue'
import ThePlayfulfesButton from '~/components/TheHome/ThePlayfulfesButton.vue'
import TheScrapboardButton from '~/components/TheHome/TheScrapboardButton.vue'


export default {
  components: {
    TheHero,
    TheFooter,
    TheHiveButton,
    TheFamilybookButton,
    TheLineandballButton,
    ThePlayfulfesButton,
    TheScrapboardButton,
  },
  methods: {
    routing(url){
      this.$router.push(url)
    },
  },
  data () {
    return {
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
  padding-top: 120px;
  margin: 0 auto;
  width: 860px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
      width: 720px;
      margin: 0 auto;
    }

    // .TheHome_WorkBg{
    //   width: 670px;
    //   height: 419px;
    // }

    // .TheHome_WorkTrim{
    //   width: 626px;
    //   height: 375px;
    //   position: relative;
    // 	left: 22px;
    // 	top: 22px;
    // }

}
@media screen and (max-width: 480px) {
    /* 480pxまでの幅の場合に適応される */


    .heading{
      font-size: 32px;
      font-family: 'Noto Sans', sans-serif;
    }


    .TheHome_Container{
      width: 320px;
    }

    


}
@media screen and (max-width: 320px) {
    /* 320pxまでの幅の場合に適応される */
    .TheHome_Container{
      width: 300px;
      margin: 0 auto;
    }
    .TheHome_Work{
      width: 280px;
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

