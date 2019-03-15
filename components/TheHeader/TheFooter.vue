<template>
<footer class="TheFooter">
    © 2019 Ryosuke Fujiki
</footer>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.TheFooter{
  box-sizing: border-box;
  height: 42px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 12px;
  background: #f9f9f9;
  color: #d5d5d5;
  text-align: center;
  width: 100%;
  margin-top: 120px;
}


@media screen and (max-width: 1024px) {
    /* 1024pxまでの幅の場合に適応される */
    .TheFooter{
       margin-top: 220px;
    }
}
@media screen and (max-width: 768px) {
  .TheFooter{
       margin-top: 120px;
    }
}
@media screen and (max-width: 480px) {
  .TheFooter{
       margin-top: 60px;
    }
}
</style>
