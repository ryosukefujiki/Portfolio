<template>
    <div class="TheWork">
        <div class="TheWork_HeroImg FamilybookImg">
            <p class="TheWork_HeroNumber">01 - 05</p>
            <h1 class="TheWork_HeroHeading">かぞくが、ものがたり。</h1>
            <p class="TheWork_HeroCategory">UI Design / UX Design / Logo Design</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
html,body,#__nuxt,#__layout{
    height: 100%;
}

.TheWork{
  width: 100%;
  height: 100%;
}
.TheWork_HeroImg{
  width: 100%;
  height: 100%;
}
.FamilybookImg{
  background: rgba(39, 39, 39, 0.1) url("/home/familybook_home.png");
  background-blend-mode: multiply;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}


.TheWork_HeroNumber{
  font-family: Georgia;
  color: #ffffff;
  font-size: 28px;
  position: absolute;
  left: 80px;
  bottom: 170px;
}
.TheWork_HeroHeading{
  font-weight: 500;
  font-size: 40px;
  color: #ffffff;
  display: block;
  position: absolute;
  left: 76px;
  bottom: 106px;
  font-family:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI","Noto Sans Japanese","ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
}
.TheWork_HeroCategory{
  font-size: 22px;
  color: #ffffff;
  position: absolute;
  left: 78px;
  bottom: 60px;
  /* letter-spacing: 4px; */
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
}


</style>

