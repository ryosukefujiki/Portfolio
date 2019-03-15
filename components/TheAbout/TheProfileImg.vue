<template>
    <div class="TheProfileImg glitch glitch--style-1">
        <img :src="profileImg" alt="" class="TheAbout_ProfileImg glitch__img">
    </div>
</template>

<script>
export default {
    data () {
    return {
      profileImg: '/about/profile.png',
    }
  },
}
</script>

<style lang="scss">
.TheAbout_ProfileImg{
  width: 480px;
  height: 320px;
}


@media screen and (max-width: 1024px) {
    /* 1024pxまでの幅の場合に適応される */
    .TheAbout_ProfileImg{
        width: 360px;
        height: 240px;
    }
}
@media screen and (max-width: 768px) {
    .TheAbout_ProfileImg{
        width: 300px;
        height: 200px;
    }
}
@media screen and (max-width: 480px) {
    .TheAbout_ProfileImg{
        width: 320px;
        height: 212px;
    }
}
@media screen and (max-width: 320px) {
    .TheAbout_ProfileImg{
        width: 300px;
        height: 200px;
    }
}
</style>

