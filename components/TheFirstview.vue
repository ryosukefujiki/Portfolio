<template>
  <div class="TheFirstview" v-if='!killed'>
    <p class="TheFirstview_Text TheFirstview_PercentText">{{number}}%</p>
    <p class="TheFirstview_Text">LOADING NOW ...</p>
    <BarLoader class="BarLoader"></BarLoader>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { BarLoader } from '@saeris/vue-spinners'

export default {
  data(){
    return {
      number: 0,
      intervalId: undefined,
    }
  },
  components: {
    BarLoader
  },
  computed: {
    ...mapGetters({
      killed: 'firstview/killed'
    })
  },
  mounted() {
    let self = this;
    this.intervalId = setInterval(function() {
      self.number += 1
      if(self.number == 100){
       self.$store.commit("firstview/kill");
      }
    }, 100)
  },
  beforeDestroy() {
    console.log("clearInterval");
    clearInterval(this.intervalId);
  }
}
</script>

<style lang="scss">
.TheFirstview{
  width: 100%;
  height: 100%;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  overflow: hidden;
  padding-top: 320px;
}
.TheFirstview_Text{
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 12px;
}
.TheFirstview_PercentText{
  font-size: 24px;
}
.BarLoader{
  margin: 0 auto;
}
// .BarLoader div{
//   color: red !important;
// }
</style>


