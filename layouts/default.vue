<template>
  <div class="default">
    <!-- <TheBackground></TheBackground> -->
    <!-- <div id="scrollArea"> -->
    <TheHeader></TheHeader>
    <nuxt></nuxt>
    <!-- </div> -->
    <!-- <TheFirstview></TheFirstview>
    <TheAudio></TheAudio> -->
    <!-- <TheFooter></TheFooter> -->
</div>
</template>

<script>
import TheHeader from '~/components/TheHeader/TheHeader.vue'
import TheFooter from '~/components/TheHeader/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>


<style lang="scss">
.default{
  height: 100%;
}

</style>

