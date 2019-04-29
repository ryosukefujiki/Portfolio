<template>
    <div class="TheBackground">
    </div>
</template>


<script>
export default {

}
</script>

<style lang="scss">

.TheBackground{
    background: red;
    width: 200%;
    height: 150%;
    position: absolute;
    top: -25%;
    left: -50%;
}
@media screen and (max-width: 1024px) {
    .TheBackground{
    background: red;
    width: 150%;
    height: 150%;
    position: absolute;
    top: -25%;
    left: -25%;
}
}

@media screen and (max-width: 768px) {
    .TheBackground{
    background: red;
    width: 100%;
    height: 150%;
    position: absolute;
    top: -10%;
    left: 0;
    }
}

@media screen and (max-width: 480px) {
    .TheBackground{
    background: red;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -15%;
    left: 0;
    }
}

@media screen and (max-width: 320px) {
    .TheBackground{
    background: red;
    width: 100%;
    height: 80%;
    position: absolute;
    top: -15%;
    left: 0;
    }
}
</style>


