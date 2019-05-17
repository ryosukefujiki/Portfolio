<template>
  <div class="TheBackground">
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
    <div class="firefly"></div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss">
.TheBackground {
//   background: red;
  width: 160%;
  height: 150%;
  position: fixed;
  top: -25%;
  left: -50%;
}
.firefly {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 0.8vw;
  height: 0.8vw;
  margin: -0.2vw 0 0 9.8vw;
  animation: ease 200s alternate infinite;
  pointer-events: none;
}
.firefly::before, .firefly::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform-origin: -10vw;
}
.firefly::before {
  background: #9b9b9b;
  opacity: 0.4;
  animation: drift ease alternate infinite;
}
.firefly::after {
  background: white;
  opacity: 0;
//   box-shadow: 0 0 0vw 0vw yellow;
//   animation: drift ease alternate infinite, flash ease infinite;
}

.firefly:nth-child(1) {
  animation-name: move1;
}
.firefly:nth-child(1)::before {
  animation-duration: 12s;
}
.firefly:nth-child(1)::after {
  animation-duration: 12s, 5276ms;
  animation-delay: 0ms, 5912ms;
}

@keyframes move1 {
  0% {
    transform: translateX(11vw) translateY(-20vh) scale(0.55);
  }
  5% {
    transform: translateX(-13vw) translateY(-21vh) scale(0.94);
  }
  10% {
    transform: translateX(-14vw) translateY(31vh) scale(0.63);
  }
  15% {
    transform: translateX(38vw) translateY(-13vh) scale(0.64);
  }
  20% {
    transform: translateX(-23vw) translateY(32vh) scale(0.57);
  }
  25% {
    transform: translateX(-36vw) translateY(49vh) scale(0.64);
  }
  30% {
    transform: translateX(-23vw) translateY(30vh) scale(0.52);
  }
  35% {
    transform: translateX(41vw) translateY(46vh) scale(0.53);
  }
  40% {
    transform: translateX(18vw) translateY(24vh) scale(0.65);
  }
  45% {
    transform: translateX(48vw) translateY(36vh) scale(0.71);
  }
  50% {
    transform: translateX(-8vw) translateY(-3vh) scale(0.32);
  }
  55% {
    transform: translateX(6vw) translateY(-42vh) scale(0.45);
  }
  60% {
    transform: translateX(25vw) translateY(-24vh) scale(0.28);
  }
  65% {
    transform: translateX(47vw) translateY(-6vh) scale(0.8);
  }
  70% {
    transform: translateX(-11vw) translateY(-20vh) scale(0.91);
  }
  75% {
    transform: translateX(-1vw) translateY(39vh) scale(0.99);
  }
  80% {
    transform: translateX(40vw) translateY(-26vh) scale(0.96);
  }
  85% {
    transform: translateX(-22vw) translateY(31vh) scale(0.78);
  }
  90% {
    transform: translateX(-20vw) translateY(50vh) scale(0.86);
  }
  95% {
    transform: translateX(7vw) translateY(-22vh) scale(0.79);
  }
  100% {
    transform: translateX(35vw) translateY(-31vh) scale(0.98);
  }
}
.firefly:nth-child(2) {
  animation-name: move2;
}
.firefly:nth-child(2)::before {
  animation-duration: 13s;
}
.firefly:nth-child(2)::after {
  animation-duration: 13s, 10833ms;
  animation-delay: 0ms, 4133ms;
}

@keyframes move2 {
  0% {
    transform: translateX(38vw) translateY(-42vh) scale(0.95);
  }
  5.5555555556% {
    transform: translateX(-20vw) translateY(-22vh) scale(0.29);
  }
  11.1111111111% {
    transform: translateX(32vw) translateY(20vh) scale(0.32);
  }
  16.6666666667% {
    transform: translateX(28vw) translateY(-5vh) scale(0.75);
  }
  22.2222222222% {
    transform: translateX(-6vw) translateY(-39vh) scale(0.55);
  }
  27.7777777778% {
    transform: translateX(38vw) translateY(21vh) scale(0.51);
  }
  33.3333333333% {
    transform: translateX(-20vw) translateY(-20vh) scale(0.95);
  }
  38.8888888889% {
    transform: translateX(35vw) translateY(16vh) scale(0.38);
  }
  44.4444444444% {
    transform: translateX(31vw) translateY(49vh) scale(0.98);
  }
  50% {
    transform: translateX(3vw) translateY(-30vh) scale(0.76);
  }
  55.5555555556% {
    transform: translateX(-26vw) translateY(22vh) scale(0.55);
  }
  61.1111111111% {
    transform: translateX(-13vw) translateY(-33vh) scale(0.53);
  }
  66.6666666667% {
    transform: translateX(-30vw) translateY(38vh) scale(0.57);
  }
  72.2222222222% {
    transform: translateX(-12vw) translateY(-22vh) scale(0.92);
  }
  77.7777777778% {
    transform: translateX(-11vw) translateY(-47vh) scale(0.34);
  }
  83.3333333333% {
    transform: translateX(30vw) translateY(-14vh) scale(0.38);
  }
  88.8888888889% {
    transform: translateX(-40vw) translateY(-48vh) scale(0.7);
  }
  94.4444444444% {
    transform: translateX(30vw) translateY(8vh) scale(0.83);
  }
  100% {
    transform: translateX(-26vw) translateY(43vh) scale(0.83);
  }
}
.firefly:nth-child(3) {
  animation-name: move3;
}
.firefly:nth-child(3)::before {
  animation-duration: 15s;
}
.firefly:nth-child(3)::after {
  animation-duration: 15s, 9813ms;
  animation-delay: 0ms, 997ms;
}

@keyframes move3 {
  0% {
    transform: translateX(-37vw) translateY(-11vh) scale(0.4);
  }
  4.1666666667% {
    transform: translateX(-13vw) translateY(-23vh) scale(0.54);
  }
  8.3333333333% {
    transform: translateX(-45vw) translateY(-29vh) scale(0.83);
  }
  12.5% {
    transform: translateX(30vw) translateY(13vh) scale(0.95);
  }
  16.6666666667% {
    transform: translateX(16vw) translateY(-46vh) scale(0.48);
  }
  20.8333333333% {
    transform: translateX(1vw) translateY(7vh) scale(0.29);
  }
  25% {
    transform: translateX(24vw) translateY(-27vh) scale(0.82);
  }
  29.1666666667% {
    transform: translateX(-8vw) translateY(-2vh) scale(0.48);
  }
  33.3333333333% {
    transform: translateX(-11vw) translateY(1vh) scale(0.83);
  }
  37.5% {
    transform: translateX(17vw) translateY(46vh) scale(1);
  }
  41.6666666667% {
    transform: translateX(-4vw) translateY(6vh) scale(0.56);
  }
  45.8333333333% {
    transform: translateX(22vw) translateY(0vh) scale(0.75);
  }
  50% {
    transform: translateX(25vw) translateY(12vh) scale(0.35);
  }
  54.1666666667% {
    transform: translateX(4vw) translateY(-30vh) scale(0.47);
  }
  58.3333333333% {
    transform: translateX(-9vw) translateY(-36vh) scale(0.53);
  }
  62.5% {
    transform: translateX(-2vw) translateY(45vh) scale(0.28);
  }
  66.6666666667% {
    transform: translateX(36vw) translateY(-12vh) scale(0.82);
  }
  70.8333333333% {
    transform: translateX(-46vw) translateY(30vh) scale(0.75);
  }
  75% {
    transform: translateX(0vw) translateY(-20vh) scale(0.87);
  }
  79.1666666667% {
    transform: translateX(49vw) translateY(28vh) scale(0.79);
  }
  83.3333333333% {
    transform: translateX(49vw) translateY(5vh) scale(0.53);
  }
  87.5% {
    transform: translateX(11vw) translateY(-26vh) scale(0.41);
  }
  91.6666666667% {
    transform: translateX(-29vw) translateY(7vh) scale(0.46);
  }
  95.8333333333% {
    transform: translateX(12vw) translateY(14vh) scale(0.43);
  }
  100% {
    transform: translateX(21vw) translateY(-19vh) scale(0.39);
  }
}
.firefly:nth-child(4) {
  animation-name: move4;
}
.firefly:nth-child(4)::before {
  animation-duration: 11s;
}
.firefly:nth-child(4)::after {
  animation-duration: 11s, 6842ms;
  animation-delay: 0ms, 5840ms;
}

@keyframes move4 {
  0% {
    transform: translateX(10vw) translateY(0vh) scale(0.86);
  }
  3.7037037037% {
    transform: translateX(-35vw) translateY(-24vh) scale(0.77);
  }
  7.4074074074% {
    transform: translateX(22vw) translateY(-28vh) scale(0.8);
  }
  11.1111111111% {
    transform: translateX(-10vw) translateY(-23vh) scale(0.67);
  }
  14.8148148148% {
    transform: translateX(40vw) translateY(-40vh) scale(0.69);
  }
  18.5185185185% {
    transform: translateX(16vw) translateY(-13vh) scale(0.28);
  }
  22.2222222222% {
    transform: translateX(18vw) translateY(-49vh) scale(0.68);
  }
  25.9259259259% {
    transform: translateX(36vw) translateY(-24vh) scale(0.81);
  }
  29.6296296296% {
    transform: translateX(-26vw) translateY(-24vh) scale(0.3);
  }
  33.3333333333% {
    transform: translateX(-17vw) translateY(-20vh) scale(0.61);
  }
  37.037037037% {
    transform: translateX(43vw) translateY(-14vh) scale(0.35);
  }
  40.7407407407% {
    transform: translateX(35vw) translateY(-38vh) scale(0.79);
  }
  44.4444444444% {
    transform: translateX(35vw) translateY(40vh) scale(0.68);
  }
  48.1481481481% {
    transform: translateX(19vw) translateY(-28vh) scale(0.67);
  }
  51.8518518519% {
    transform: translateX(3vw) translateY(-44vh) scale(0.44);
  }
  55.5555555556% {
    transform: translateX(-2vw) translateY(-45vh) scale(0.59);
  }
  59.2592592593% {
    transform: translateX(39vw) translateY(-35vh) scale(0.54);
  }
  62.962962963% {
    transform: translateX(-11vw) translateY(39vh) scale(0.45);
  }
  66.6666666667% {
    transform: translateX(1vw) translateY(-18vh) scale(0.73);
  }
  70.3703703704% {
    transform: translateX(38vw) translateY(-23vh) scale(0.44);
  }
  74.0740740741% {
    transform: translateX(9vw) translateY(0vh) scale(0.63);
  }
  77.7777777778% {
    transform: translateX(-27vw) translateY(42vh) scale(0.32);
  }
  81.4814814815% {
    transform: translateX(31vw) translateY(-30vh) scale(0.82);
  }
  85.1851851852% {
    transform: translateX(-18vw) translateY(3vh) scale(0.8);
  }
  88.8888888889% {
    transform: translateX(1vw) translateY(-6vh) scale(0.6);
  }
  92.5925925926% {
    transform: translateX(-7vw) translateY(-28vh) scale(0.39);
  }
  96.2962962963% {
    transform: translateX(14vw) translateY(28vh) scale(0.86);
  }
  100% {
    transform: translateX(-45vw) translateY(-37vh) scale(0.26);
  }
}
.firefly:nth-child(5) {
  animation-name: move5;
}
.firefly:nth-child(5)::before {
  animation-duration: 11s;
}
.firefly:nth-child(5)::after {
  animation-duration: 11s, 6252ms;
  animation-delay: 0ms, 6573ms;
}

@keyframes move5 {
  0% {
    transform: translateX(-22vw) translateY(48vh) scale(0.87);
  }
  5.5555555556% {
    transform: translateX(18vw) translateY(-25vh) scale(0.65);
  }
  11.1111111111% {
    transform: translateX(-46vw) translateY(-22vh) scale(0.32);
  }
  16.6666666667% {
    transform: translateX(-15vw) translateY(28vh) scale(0.42);
  }
  22.2222222222% {
    transform: translateX(-39vw) translateY(-20vh) scale(0.62);
  }
  27.7777777778% {
    transform: translateX(-29vw) translateY(-28vh) scale(0.77);
  }
  33.3333333333% {
    transform: translateX(36vw) translateY(-41vh) scale(0.29);
  }
  38.8888888889% {
    transform: translateX(-42vw) translateY(-8vh) scale(0.29);
  }
  44.4444444444% {
    transform: translateX(13vw) translateY(-40vh) scale(0.94);
  }
  50% {
    transform: translateX(-37vw) translateY(-16vh) scale(0.61);
  }
  55.5555555556% {
    transform: translateX(-14vw) translateY(12vh) scale(0.42);
  }
  61.1111111111% {
    transform: translateX(10vw) translateY(-3vh) scale(0.64);
  }
  66.6666666667% {
    transform: translateX(-3vw) translateY(39vh) scale(0.56);
  }
  72.2222222222% {
    transform: translateX(-42vw) translateY(5vh) scale(0.69);
  }
  77.7777777778% {
    transform: translateX(42vw) translateY(38vh) scale(0.62);
  }
  83.3333333333% {
    transform: translateX(5vw) translateY(6vh) scale(0.45);
  }
  88.8888888889% {
    transform: translateX(-49vw) translateY(-43vh) scale(0.36);
  }
  94.4444444444% {
    transform: translateX(34vw) translateY(-31vh) scale(0.49);
  }
  100% {
    transform: translateX(42vw) translateY(35vh) scale(0.37);
  }
}
.firefly:nth-child(6) {
  animation-name: move6;
}
.firefly:nth-child(6)::before {
  animation-duration: 9s;
}
.firefly:nth-child(6)::after {
  animation-duration: 9s, 5711ms;
  animation-delay: 0ms, 3867ms;
}

@keyframes move6 {
  0% {
    transform: translateX(-43vw) translateY(-22vh) scale(0.28);
  }
  4.347826087% {
    transform: translateX(-35vw) translateY(-28vh) scale(0.57);
  }
  8.6956521739% {
    transform: translateX(17vw) translateY(12vh) scale(0.62);
  }
  13.0434782609% {
    transform: translateX(-47vw) translateY(48vh) scale(0.5);
  }
  17.3913043478% {
    transform: translateX(-18vw) translateY(4vh) scale(0.71);
  }
  21.7391304348% {
    transform: translateX(-44vw) translateY(6vh) scale(0.91);
  }
  26.0869565217% {
    transform: translateX(1vw) translateY(-21vh) scale(0.83);
  }
  30.4347826087% {
    transform: translateX(-39vw) translateY(-30vh) scale(0.97);
  }
  34.7826086957% {
    transform: translateX(49vw) translateY(37vh) scale(0.4);
  }
  39.1304347826% {
    transform: translateX(-8vw) translateY(-35vh) scale(0.43);
  }
  43.4782608696% {
    transform: translateX(-17vw) translateY(28vh) scale(0.75);
  }
  47.8260869565% {
    transform: translateX(-10vw) translateY(-21vh) scale(0.68);
  }
  52.1739130435% {
    transform: translateX(10vw) translateY(21vh) scale(0.54);
  }
  56.5217391304% {
    transform: translateX(-14vw) translateY(26vh) scale(0.39);
  }
  60.8695652174% {
    transform: translateX(-12vw) translateY(40vh) scale(0.79);
  }
  65.2173913043% {
    transform: translateX(-1vw) translateY(9vh) scale(0.48);
  }
  69.5652173913% {
    transform: translateX(5vw) translateY(-35vh) scale(0.87);
  }
  73.9130434783% {
    transform: translateX(-5vw) translateY(-5vh) scale(0.71);
  }
  78.2608695652% {
    transform: translateX(-6vw) translateY(-7vh) scale(0.89);
  }
  82.6086956522% {
    transform: translateX(-35vw) translateY(5vh) scale(0.64);
  }
  86.9565217391% {
    transform: translateX(32vw) translateY(31vh) scale(0.69);
  }
  91.3043478261% {
    transform: translateX(-24vw) translateY(30vh) scale(0.65);
  }
  95.652173913% {
    transform: translateX(15vw) translateY(50vh) scale(0.32);
  }
  100% {
    transform: translateX(-33vw) translateY(-38vh) scale(0.92);
  }
}
.firefly:nth-child(7) {
  animation-name: move7;
}
.firefly:nth-child(7)::before {
  animation-duration: 17s;
}
.firefly:nth-child(7)::after {
  animation-duration: 17s, 5648ms;
  animation-delay: 0ms, 7109ms;
}

@keyframes move7 {
  0% {
    transform: translateX(1vw) translateY(-12vh) scale(0.95);
  }
  5.5555555556% {
    transform: translateX(-4vw) translateY(-38vh) scale(0.82);
  }
  11.1111111111% {
    transform: translateX(38vw) translateY(-28vh) scale(0.63);
  }
  16.6666666667% {
    transform: translateX(-49vw) translateY(23vh) scale(0.5);
  }
  22.2222222222% {
    transform: translateX(-9vw) translateY(7vh) scale(0.34);
  }
  27.7777777778% {
    transform: translateX(-2vw) translateY(14vh) scale(0.66);
  }
  33.3333333333% {
    transform: translateX(8vw) translateY(-24vh) scale(0.7);
  }
  38.8888888889% {
    transform: translateX(1vw) translateY(12vh) scale(0.65);
  }
  44.4444444444% {
    transform: translateX(-11vw) translateY(47vh) scale(0.81);
  }
  50% {
    transform: translateX(0vw) translateY(-3vh) scale(0.35);
  }
  55.5555555556% {
    transform: translateX(-29vw) translateY(43vh) scale(0.9);
  }
  61.1111111111% {
    transform: translateX(1vw) translateY(50vh) scale(0.35);
  }
  66.6666666667% {
    transform: translateX(14vw) translateY(26vh) scale(0.44);
  }
  72.2222222222% {
    transform: translateX(31vw) translateY(-38vh) scale(0.32);
  }
  77.7777777778% {
    transform: translateX(-17vw) translateY(-26vh) scale(0.49);
  }
  83.3333333333% {
    transform: translateX(32vw) translateY(0vh) scale(0.61);
  }
  88.8888888889% {
    transform: translateX(-6vw) translateY(-43vh) scale(0.89);
  }
  94.4444444444% {
    transform: translateX(40vw) translateY(9vh) scale(0.9);
  }
  100% {
    transform: translateX(-15vw) translateY(-39vh) scale(0.99);
  }
}
.firefly:nth-child(8) {
  animation-name: move8;
}
.firefly:nth-child(8)::before {
  animation-duration: 10s;
}
.firefly:nth-child(8)::after {
  animation-duration: 10s, 8326ms;
  animation-delay: 0ms, 2388ms;
}

@keyframes move8 {
  0% {
    transform: translateX(-26vw) translateY(1vh) scale(0.71);
  }
  5.2631578947% {
    transform: translateX(11vw) translateY(-30vh) scale(0.53);
  }
  10.5263157895% {
    transform: translateX(-4vw) translateY(16vh) scale(0.44);
  }
  15.7894736842% {
    transform: translateX(-4vw) translateY(-10vh) scale(0.7);
  }
  21.0526315789% {
    transform: translateX(-46vw) translateY(29vh) scale(0.87);
  }
  26.3157894737% {
    transform: translateX(-1vw) translateY(-6vh) scale(0.92);
  }
  31.5789473684% {
    transform: translateX(-34vw) translateY(-39vh) scale(0.92);
  }
  36.8421052632% {
    transform: translateX(16vw) translateY(5vh) scale(0.49);
  }
  42.1052631579% {
    transform: translateX(37vw) translateY(36vh) scale(0.71);
  }
  47.3684210526% {
    transform: translateX(27vw) translateY(-42vh) scale(0.55);
  }
  52.6315789474% {
    transform: translateX(-29vw) translateY(36vh) scale(0.49);
  }
  57.8947368421% {
    transform: translateX(18vw) translateY(45vh) scale(0.56);
  }
  63.1578947368% {
    transform: translateX(-25vw) translateY(3vh) scale(0.49);
  }
  68.4210526316% {
    transform: translateX(26vw) translateY(-30vh) scale(0.74);
  }
  73.6842105263% {
    transform: translateX(48vw) translateY(21vh) scale(0.88);
  }
  78.9473684211% {
    transform: translateX(12vw) translateY(-13vh) scale(0.48);
  }
  84.2105263158% {
    transform: translateX(31vw) translateY(-32vh) scale(0.37);
  }
  89.4736842105% {
    transform: translateX(46vw) translateY(-14vh) scale(0.73);
  }
  94.7368421053% {
    transform: translateX(0vw) translateY(2vh) scale(0.33);
  }
  100% {
    transform: translateX(-8vw) translateY(-15vh) scale(0.58);
  }
}
.firefly:nth-child(9) {
  animation-name: move9;
}
.firefly:nth-child(9)::before {
  animation-duration: 10s;
}
.firefly:nth-child(9)::after {
  animation-duration: 10s, 10367ms;
  animation-delay: 0ms, 4646ms;
}

@keyframes move9 {
  0% {
    transform: translateX(-37vw) translateY(-13vh) scale(0.51);
  }
  3.8461538462% {
    transform: translateX(50vw) translateY(-21vh) scale(0.86);
  }
  7.6923076923% {
    transform: translateX(27vw) translateY(16vh) scale(0.32);
  }
  11.5384615385% {
    transform: translateX(-27vw) translateY(-48vh) scale(0.79);
  }
  15.3846153846% {
    transform: translateX(-2vw) translateY(-1vh) scale(0.46);
  }
  19.2307692308% {
    transform: translateX(36vw) translateY(-10vh) scale(0.29);
  }
  23.0769230769% {
    transform: translateX(-3vw) translateY(18vh) scale(0.44);
  }
  26.9230769231% {
    transform: translateX(16vw) translateY(-25vh) scale(0.4);
  }
  30.7692307692% {
    transform: translateX(32vw) translateY(33vh) scale(0.71);
  }
  34.6153846154% {
    transform: translateX(-15vw) translateY(-22vh) scale(0.38);
  }
  38.4615384615% {
    transform: translateX(26vw) translateY(-31vh) scale(0.68);
  }
  42.3076923077% {
    transform: translateX(-29vw) translateY(-29vh) scale(0.9);
  }
  46.1538461538% {
    transform: translateX(-5vw) translateY(-37vh) scale(0.29);
  }
  50% {
    transform: translateX(42vw) translateY(35vh) scale(0.3);
  }
  53.8461538462% {
    transform: translateX(-32vw) translateY(24vh) scale(0.39);
  }
  57.6923076923% {
    transform: translateX(-49vw) translateY(-22vh) scale(0.32);
  }
  61.5384615385% {
    transform: translateX(-35vw) translateY(-9vh) scale(0.77);
  }
  65.3846153846% {
    transform: translateX(23vw) translateY(-8vh) scale(0.61);
  }
  69.2307692308% {
    transform: translateX(-17vw) translateY(46vh) scale(0.73);
  }
  73.0769230769% {
    transform: translateX(44vw) translateY(13vh) scale(0.61);
  }
  76.9230769231% {
    transform: translateX(42vw) translateY(-41vh) scale(0.49);
  }
  80.7692307692% {
    transform: translateX(6vw) translateY(21vh) scale(0.39);
  }
  84.6153846154% {
    transform: translateX(45vw) translateY(-15vh) scale(0.72);
  }
  88.4615384615% {
    transform: translateX(4vw) translateY(13vh) scale(0.97);
  }
  92.3076923077% {
    transform: translateX(36vw) translateY(0vh) scale(0.71);
  }
  96.1538461538% {
    transform: translateX(-23vw) translateY(-36vh) scale(0.95);
  }
  100% {
    transform: translateX(15vw) translateY(-9vh) scale(0.98);
  }
}
.firefly:nth-child(10) {
  animation-name: move10;
}
.firefly:nth-child(10)::before {
  animation-duration: 16s;
}
.firefly:nth-child(10)::after {
  animation-duration: 16s, 10698ms;
  animation-delay: 0ms, 8110ms;
}

@keyframes move10 {
  0% {
    transform: translateX(34vw) translateY(-48vh) scale(0.62);
  }
  5% {
    transform: translateX(-5vw) translateY(-9vh) scale(0.43);
  }
  10% {
    transform: translateX(32vw) translateY(20vh) scale(0.46);
  }
  15% {
    transform: translateX(14vw) translateY(6vh) scale(0.83);
  }
  20% {
    transform: translateX(0vw) translateY(-8vh) scale(0.55);
  }
  25% {
    transform: translateX(48vw) translateY(-28vh) scale(0.31);
  }
  30% {
    transform: translateX(-6vw) translateY(-39vh) scale(0.4);
  }
  35% {
    transform: translateX(40vw) translateY(2vh) scale(0.4);
  }
  40% {
    transform: translateX(21vw) translateY(-35vh) scale(0.42);
  }
  45% {
    transform: translateX(-36vw) translateY(-10vh) scale(0.44);
  }
  50% {
    transform: translateX(37vw) translateY(0vh) scale(0.31);
  }
  55% {
    transform: translateX(-38vw) translateY(-8vh) scale(0.49);
  }
  60% {
    transform: translateX(36vw) translateY(-28vh) scale(0.33);
  }
  65% {
    transform: translateX(20vw) translateY(3vh) scale(0.43);
  }
  70% {
    transform: translateX(26vw) translateY(-10vh) scale(0.94);
  }
  75% {
    transform: translateX(14vw) translateY(-5vh) scale(0.84);
  }
  80% {
    transform: translateX(49vw) translateY(10vh) scale(0.7);
  }
  85% {
    transform: translateX(-16vw) translateY(17vh) scale(0.47);
  }
  90% {
    transform: translateX(35vw) translateY(26vh) scale(0.3);
  }
  95% {
    transform: translateX(-11vw) translateY(28vh) scale(0.43);
  }
  100% {
    transform: translateX(-17vw) translateY(-30vh) scale(0.26);
  }
}
.firefly:nth-child(11) {
  animation-name: move11;
}
.firefly:nth-child(11)::before {
  animation-duration: 12s;
}
.firefly:nth-child(11)::after {
  animation-duration: 12s, 9944ms;
  animation-delay: 0ms, 5752ms;
}

@keyframes move11 {
  0% {
    transform: translateX(4vw) translateY(6vh) scale(0.79);
  }
  4.1666666667% {
    transform: translateX(-20vw) translateY(46vh) scale(0.3);
  }
  8.3333333333% {
    transform: translateX(-39vw) translateY(-39vh) scale(0.94);
  }
  12.5% {
    transform: translateX(41vw) translateY(-14vh) scale(0.94);
  }
  16.6666666667% {
    transform: translateX(-46vw) translateY(-20vh) scale(0.81);
  }
  20.8333333333% {
    transform: translateX(-39vw) translateY(-45vh) scale(0.54);
  }
  25% {
    transform: translateX(17vw) translateY(32vh) scale(0.95);
  }
  29.1666666667% {
    transform: translateX(8vw) translateY(39vh) scale(0.49);
  }
  33.3333333333% {
    transform: translateX(-31vw) translateY(-23vh) scale(0.57);
  }
  37.5% {
    transform: translateX(-49vw) translateY(21vh) scale(0.63);
  }
  41.6666666667% {
    transform: translateX(42vw) translateY(13vh) scale(0.27);
  }
  45.8333333333% {
    transform: translateX(-5vw) translateY(-20vh) scale(0.63);
  }
  50% {
    transform: translateX(15vw) translateY(-9vh) scale(0.74);
  }
  54.1666666667% {
    transform: translateX(22vw) translateY(46vh) scale(0.89);
  }
  58.3333333333% {
    transform: translateX(-4vw) translateY(0vh) scale(0.98);
  }
  62.5% {
    transform: translateX(42vw) translateY(-36vh) scale(0.49);
  }
  66.6666666667% {
    transform: translateX(-7vw) translateY(17vh) scale(0.57);
  }
  70.8333333333% {
    transform: translateX(45vw) translateY(-33vh) scale(0.43);
  }
  75% {
    transform: translateX(-35vw) translateY(16vh) scale(0.52);
  }
  79.1666666667% {
    transform: translateX(-2vw) translateY(-2vh) scale(0.59);
  }
  83.3333333333% {
    transform: translateX(28vw) translateY(-20vh) scale(0.74);
  }
  87.5% {
    transform: translateX(2vw) translateY(49vh) scale(0.43);
  }
  91.6666666667% {
    transform: translateX(-23vw) translateY(26vh) scale(0.33);
  }
  95.8333333333% {
    transform: translateX(41vw) translateY(39vh) scale(0.56);
  }
  100% {
    transform: translateX(34vw) translateY(-27vh) scale(0.37);
  }
}
.firefly:nth-child(12) {
  animation-name: move12;
}
.firefly:nth-child(12)::before {
  animation-duration: 14s;
}
.firefly:nth-child(12)::after {
  animation-duration: 14s, 9303ms;
  animation-delay: 0ms, 6742ms;
}

@keyframes move12 {
  0% {
    transform: translateX(12vw) translateY(15vh) scale(0.87);
  }
  5.2631578947% {
    transform: translateX(-32vw) translateY(2vh) scale(0.87);
  }
  10.5263157895% {
    transform: translateX(26vw) translateY(24vh) scale(0.68);
  }
  15.7894736842% {
    transform: translateX(47vw) translateY(-6vh) scale(0.28);
  }
  21.0526315789% {
    transform: translateX(14vw) translateY(46vh) scale(0.76);
  }
  26.3157894737% {
    transform: translateX(-48vw) translateY(41vh) scale(0.88);
  }
  31.5789473684% {
    transform: translateX(34vw) translateY(-31vh) scale(0.63);
  }
  36.8421052632% {
    transform: translateX(-36vw) translateY(-36vh) scale(0.7);
  }
  42.1052631579% {
    transform: translateX(24vw) translateY(-22vh) scale(0.38);
  }
  47.3684210526% {
    transform: translateX(-27vw) translateY(-30vh) scale(0.96);
  }
  52.6315789474% {
    transform: translateX(-17vw) translateY(19vh) scale(0.59);
  }
  57.8947368421% {
    transform: translateX(-15vw) translateY(49vh) scale(0.72);
  }
  63.1578947368% {
    transform: translateX(0vw) translateY(14vh) scale(0.47);
  }
  68.4210526316% {
    transform: translateX(17vw) translateY(8vh) scale(0.5);
  }
  73.6842105263% {
    transform: translateX(29vw) translateY(27vh) scale(0.8);
  }
  78.9473684211% {
    transform: translateX(-25vw) translateY(-49vh) scale(0.69);
  }
  84.2105263158% {
    transform: translateX(-28vw) translateY(-18vh) scale(0.98);
  }
  89.4736842105% {
    transform: translateX(10vw) translateY(-37vh) scale(0.39);
  }
  94.7368421053% {
    transform: translateX(28vw) translateY(39vh) scale(0.5);
  }
  100% {
    transform: translateX(-5vw) translateY(27vh) scale(0.49);
  }
}
.firefly:nth-child(13) {
  animation-name: move13;
}
.firefly:nth-child(13)::before {
  animation-duration: 9s;
}
.firefly:nth-child(13)::after {
  animation-duration: 9s, 5546ms;
  animation-delay: 0ms, 968ms;
}

@keyframes move13 {
  0% {
    transform: translateX(4vw) translateY(15vh) scale(0.66);
  }
  3.8461538462% {
    transform: translateX(-40vw) translateY(-41vh) scale(0.8);
  }
  7.6923076923% {
    transform: translateX(-15vw) translateY(50vh) scale(0.9);
  }
  11.5384615385% {
    transform: translateX(16vw) translateY(18vh) scale(0.62);
  }
  15.3846153846% {
    transform: translateX(41vw) translateY(11vh) scale(0.76);
  }
  19.2307692308% {
    transform: translateX(32vw) translateY(-22vh) scale(0.9);
  }
  23.0769230769% {
    transform: translateX(-19vw) translateY(41vh) scale(0.75);
  }
  26.9230769231% {
    transform: translateX(38vw) translateY(23vh) scale(0.43);
  }
  30.7692307692% {
    transform: translateX(6vw) translateY(-27vh) scale(0.26);
  }
  34.6153846154% {
    transform: translateX(-3vw) translateY(36vh) scale(0.96);
  }
  38.4615384615% {
    transform: translateX(46vw) translateY(-43vh) scale(0.97);
  }
  42.3076923077% {
    transform: translateX(36vw) translateY(-46vh) scale(0.45);
  }
  46.1538461538% {
    transform: translateX(22vw) translateY(-27vh) scale(0.93);
  }
  50% {
    transform: translateX(-43vw) translateY(39vh) scale(0.54);
  }
  53.8461538462% {
    transform: translateX(-6vw) translateY(-13vh) scale(0.47);
  }
  57.6923076923% {
    transform: translateX(-42vw) translateY(14vh) scale(0.77);
  }
  61.5384615385% {
    transform: translateX(12vw) translateY(10vh) scale(0.33);
  }
  65.3846153846% {
    transform: translateX(26vw) translateY(13vh) scale(0.41);
  }
  69.2307692308% {
    transform: translateX(-35vw) translateY(-49vh) scale(0.91);
  }
  73.0769230769% {
    transform: translateX(-37vw) translateY(-30vh) scale(0.5);
  }
  76.9230769231% {
    transform: translateX(-2vw) translateY(36vh) scale(0.91);
  }
  80.7692307692% {
    transform: translateX(-41vw) translateY(-42vh) scale(0.85);
  }
  84.6153846154% {
    transform: translateX(10vw) translateY(-1vh) scale(0.46);
  }
  88.4615384615% {
    transform: translateX(-13vw) translateY(33vh) scale(0.36);
  }
  92.3076923077% {
    transform: translateX(7vw) translateY(2vh) scale(0.67);
  }
  96.1538461538% {
    transform: translateX(-5vw) translateY(47vh) scale(0.57);
  }
  100% {
    transform: translateX(-26vw) translateY(-48vh) scale(0.28);
  }
}
.firefly:nth-child(14) {
  animation-name: move14;
}
.firefly:nth-child(14)::before {
  animation-duration: 13s;
}
.firefly:nth-child(14)::after {
  animation-duration: 13s, 7217ms;
  animation-delay: 0ms, 5865ms;
}

@keyframes move14 {
  0% {
    transform: translateX(35vw) translateY(40vh) scale(0.34);
  }
  3.7037037037% {
    transform: translateX(-31vw) translateY(24vh) scale(0.51);
  }
  7.4074074074% {
    transform: translateX(-22vw) translateY(39vh) scale(0.86);
  }
  11.1111111111% {
    transform: translateX(-21vw) translateY(15vh) scale(0.84);
  }
  14.8148148148% {
    transform: translateX(-36vw) translateY(-10vh) scale(0.81);
  }
  18.5185185185% {
    transform: translateX(-48vw) translateY(-5vh) scale(0.66);
  }
  22.2222222222% {
    transform: translateX(39vw) translateY(0vh) scale(0.88);
  }
  25.9259259259% {
    transform: translateX(40vw) translateY(-47vh) scale(0.75);
  }
  29.6296296296% {
    transform: translateX(30vw) translateY(31vh) scale(0.35);
  }
  33.3333333333% {
    transform: translateX(8vw) translateY(8vh) scale(0.49);
  }
  37.037037037% {
    transform: translateX(-25vw) translateY(-25vh) scale(1);
  }
  40.7407407407% {
    transform: translateX(-44vw) translateY(43vh) scale(0.67);
  }
  44.4444444444% {
    transform: translateX(-20vw) translateY(-48vh) scale(0.65);
  }
  48.1481481481% {
    transform: translateX(-31vw) translateY(-33vh) scale(0.5);
  }
  51.8518518519% {
    transform: translateX(20vw) translateY(-20vh) scale(0.85);
  }
  55.5555555556% {
    transform: translateX(-27vw) translateY(2vh) scale(0.73);
  }
  59.2592592593% {
    transform: translateX(-32vw) translateY(-1vh) scale(0.95);
  }
  62.962962963% {
    transform: translateX(-25vw) translateY(-7vh) scale(0.26);
  }
  66.6666666667% {
    transform: translateX(-28vw) translateY(-32vh) scale(0.38);
  }
  70.3703703704% {
    transform: translateX(37vw) translateY(47vh) scale(0.46);
  }
  74.0740740741% {
    transform: translateX(35vw) translateY(29vh) scale(0.27);
  }
  77.7777777778% {
    transform: translateX(28vw) translateY(-5vh) scale(0.76);
  }
  81.4814814815% {
    transform: translateX(47vw) translateY(-44vh) scale(0.49);
  }
  85.1851851852% {
    transform: translateX(-13vw) translateY(11vh) scale(0.72);
  }
  88.8888888889% {
    transform: translateX(-48vw) translateY(15vh) scale(0.49);
  }
  92.5925925926% {
    transform: translateX(45vw) translateY(-23vh) scale(0.72);
  }
  96.2962962963% {
    transform: translateX(28vw) translateY(-1vh) scale(0.44);
  }
  100% {
    transform: translateX(7vw) translateY(-25vh) scale(0.26);
  }
}
.firefly:nth-child(15) {
  animation-name: move15;
}
.firefly:nth-child(15)::before {
  animation-duration: 13s;
}
.firefly:nth-child(15)::after {
  animation-duration: 13s, 7800ms;
  animation-delay: 0ms, 1711ms;
}

@keyframes move15 {
  0% {
    transform: translateX(17vw) translateY(39vh) scale(0.53);
  }
  4.347826087% {
    transform: translateX(2vw) translateY(18vh) scale(0.56);
  }
  8.6956521739% {
    transform: translateX(-40vw) translateY(0vh) scale(0.72);
  }
  13.0434782609% {
    transform: translateX(40vw) translateY(39vh) scale(0.76);
  }
  17.3913043478% {
    transform: translateX(45vw) translateY(32vh) scale(0.96);
  }
  21.7391304348% {
    transform: translateX(-32vw) translateY(-5vh) scale(0.37);
  }
  26.0869565217% {
    transform: translateX(3vw) translateY(-22vh) scale(0.27);
  }
  30.4347826087% {
    transform: translateX(-12vw) translateY(41vh) scale(0.32);
  }
  34.7826086957% {
    transform: translateX(-29vw) translateY(18vh) scale(0.77);
  }
  39.1304347826% {
    transform: translateX(44vw) translateY(43vh) scale(0.62);
  }
  43.4782608696% {
    transform: translateX(28vw) translateY(0vh) scale(0.68);
  }
  47.8260869565% {
    transform: translateX(4vw) translateY(-4vh) scale(0.74);
  }
  52.1739130435% {
    transform: translateX(-42vw) translateY(-21vh) scale(0.68);
  }
  56.5217391304% {
    transform: translateX(-8vw) translateY(-30vh) scale(0.55);
  }
  60.8695652174% {
    transform: translateX(12vw) translateY(24vh) scale(0.64);
  }
  65.2173913043% {
    transform: translateX(-38vw) translateY(10vh) scale(0.87);
  }
  69.5652173913% {
    transform: translateX(29vw) translateY(-9vh) scale(0.27);
  }
  73.9130434783% {
    transform: translateX(37vw) translateY(-4vh) scale(0.9);
  }
  78.2608695652% {
    transform: translateX(43vw) translateY(47vh) scale(0.85);
  }
  82.6086956522% {
    transform: translateX(26vw) translateY(-14vh) scale(0.52);
  }
  86.9565217391% {
    transform: translateX(37vw) translateY(-16vh) scale(0.88);
  }
  91.3043478261% {
    transform: translateX(43vw) translateY(23vh) scale(0.39);
  }
  95.652173913% {
    transform: translateX(41vw) translateY(8vh) scale(0.91);
  }
  100% {
    transform: translateX(-42vw) translateY(-9vh) scale(0.48);
  }
}
@keyframes drift {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
// @keyframes flash {
//   0%, 30%, 100% {
//     opacity: 0;
//     box-shadow: 0 0 0vw 0vw yellow;
//   }
//   5% {
//     opacity: 1;
//     box-shadow: 0 0 2vw 0.4vw yellow;
//   }
// }



@media screen and (max-width: 1024px) {
  .TheBackground {
    width: 150%;
    height: 150%;
    position: absolute;
    top: -25%;
    left: -25%;
  }
}

@media screen and (max-width: 768px) {
  .TheBackground {
    width: 100%;
    height: 150%;
    position: absolute;
    top: -10%;
    left: 0;
  }
}

@media screen and (max-width: 480px) {
  .TheBackground {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -15%;
    left: 0;
  }
}

@media screen and (max-width: 320px) {
  .TheBackground {
    width: 100%;
    height: 80%;
    position: absolute;
    top: -15%;
    left: 0;
  }
}
</style>


