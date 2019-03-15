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
</style>

