<template>
  <div class="default">
    <!-- <TheBackground></TheBackground> -->
    <!-- <div id="scrollArea"> -->
    <TheFamilybookTransition></TheFamilybookTransition>
    <TheAboutTransition></TheAboutTransition>
    <TheHomeTransition></TheHomeTransition>
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
import TheFamilybookTransition from '~/components/TheTransition/TheFamilybookTransition.vue'
import TheAboutTransition from '~/components/TheTransition/TheAboutTransition.vue'
import TheHomeTransition from '~/components/TheTransition/TheHomeTransition.vue'


export default {
  components: {
    TheHeader,
    TheFooter,
    TheFamilybookTransition,
    TheAboutTransition,
    TheHomeTransition,
  },
}
</script>


<style lang="scss">
.default{
  height: 100%;
}

</style>

