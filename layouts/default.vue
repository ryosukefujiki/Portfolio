<template>
  <div class="default">
    <!-- <TheBackground></TheBackground> -->
    <!-- <div id="scrollArea"> -->
    <TheFoxTransition></TheFoxTransition>
    <TheFamilybookTransition></TheFamilybookTransition>
    <TheHiveTransition></TheHiveTransition>
    <TheScrapboardTransition></TheScrapboardTransition>
    <TheLineandballTransition></TheLineandballTransition>
    <TheAboutTransition></TheAboutTransition>
    <ThePlayfulfesTransition></ThePlayfulfesTransition>
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
import TheFoxTransition from '~/components/TheTransition/TheFoxTransition.vue'
import TheFamilybookTransition from '~/components/TheTransition/TheFamilybookTransition.vue'
import TheHiveTransition from '~/components/TheTransition/TheHiveTransition.vue'
import TheScrapboardTransition from '~/components/TheTransition/TheScrapboardTransition.vue'
import ThePlayfulfesTransition from '~/components/TheTransition/ThePlayfulfesTransition.vue'
import TheLineandballTransition from '~/components/TheTransition/TheLineandballTransition.vue'
import TheAboutTransition from '~/components/TheTransition/TheAboutTransition.vue'
import TheHomeTransition from '~/components/TheTransition/TheHomeTransition.vue'


export default {
  components: {
    TheHeader,
    TheFooter,
    TheFoxTransition,
    TheFamilybookTransition,
    TheHiveTransition,
    TheScrapboardTransition,
    ThePlayfulfesTransition,
    TheLineandballTransition,
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

