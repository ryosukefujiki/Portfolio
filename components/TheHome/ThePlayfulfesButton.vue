<template>
   <div class="TheHome_Work">
            <a @click="click" @mouseenter="mouseOver()" @mouseleave="mouseLeave()">
                <div class="TheHome_WorkBg">
                </div>
                <div class="TheHome_WorkTrim">
                    <img :src="playfulfesHomeImg" alt="" class="TheHome_WorkImg">
                </div>
                <p class="TheHome_WorkCategory" :style="headingStyle">Web Design</p>
                <p class="TheHome_WorkTitle" :style="textStyle" v-if="!langEn">プレイフルフェス2018Winter</p>
                <p class="TheHome_WorkTitle" :style="textStyle" v-if="langEn">Playfulfes2018Winter</p>
            </a>
        </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapGetters({
      colorBlack: "nav/colorBlack",
      langEn: "nav/langEn",
    })
  },
  methods: {
    mouseOver(){
      console.log("MouseOver")
      this.$store.commit("mouseHover");
    },
    mouseLeave(){
      console.log("MouseLeave")
      this.$store.commit("mouseLeave");
    },
    routing(url){
      this.$router.push(url)
    },
    ...mapMutations({
      click: 'playfulfes/click'
    }),
  },
  data () {
    return {
      playfulfesHomeImg: '/home/playfulfes_home.png ',
      headingStyle: {
        'color': this.$store.state.nav.style['heading-color'],
      },
      textStyle: {
        'color': this.$store.state.nav.style['text-color'],
      }
    }
  },
  watch: {
    async colorBlack(val){
      this.headingStyle['color'] = this.$store.state.nav.style['heading-color']
      this.textStyle['color'] = this.$store.state.nav.style['text-color']
    },
    async langEn(val){

    },
  },
}
</script>

<style lang="scss">

.TheHome_Work{
  position: relative;
  padding-top: 30px;
	margin-bottom: 60px;
  float: left;
  width: 340px;
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
  // cursor: pointer;
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

@media screen and (max-width: 480px) {
    .TheHome_Work{
      padding-top: 30px;
    	margin-bottom: 32px;
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
