<template>
    <div class="TheNav">
        <nav>
            <ul class="TheNav_List">
                <li class="TheNav_Item">
                    <a href="index.html" class="TheNav__home">
                        <span class="text--letterspace">Work</span>s
                    </a>
                </li>
                <li class="TheNav_Item">
                    <a href="about.html" class="TheNav__works">
                        <span class="text--letterspace">Abou</span>t
                    </a>
                </li>
                <li class="TheNav_Item">
                    <a href="https://note.mu/ryosukefujiki" target="_blank" class="TheNav__about">
                        <span class="text--letterspace">Blog</span>s
                    </a>
                </li>
                <li class="TheNav_Item">
                    <a href="resume.pdf" class="TheNav__resume" target="_blank">
                        <span class="text--letterspace">Resum</span>e
                    </a>
                </li>

                <li class="TheNav_Item">
                    <div class="clearfix">
                        <a href="https://dribbble.com/bighappy" class="TheNav__icon TheNav__icon__dribble" target="_blank">
                            <i class="fab fa-dribbble"></i>
                        </a>
                        <a href="https://www.facebook.com/rfujiki0625" class="TheNav__icon TheNav__icon__facebook" target="_blank">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/ryosukefujiki/" class="TheNav__icon TheNav__icon__instagram" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </li>

            </ul>
          </nav>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>


/* TheNavに対するスタイル */
.TheNav {
  z-index: 5;
  position: fixed;
  background: rgba(255, 255, 255, 0.80);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity .35s, visibility .35s, height .35s;
  overflow: hidden;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  font-style: italic;
}

.TheNav.open {
  opacity: 1;
  visibility: visible;
  height: 100%;
}

.TheNav nav {
  position: relative;
  height: 50%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 36px;
  text-align: center;
}

.TheNav.open li {

  animation: fadeInRight .5s ease forwards;
  animation-delay: .35s;
}
.TheNav.open li:nth-of-type(2) {
  animation-delay: .4s;
}
.TheNav.open li:nth-of-type(3) {
  animation-delay: .45s;
}
.TheNav.open li:nth-of-type(4) {
  animation-delay: .50s;
}
.TheNav.open li:nth-of-type(5) {
  animation-delay: .55s;
}


.text--letterspace{
  letter-spacing: 10px;
}

.TheNav ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
}
.TheNav ul li {
  display: block;
  position: relative;
  opacity: 0;
  margin-bottom: 48px;
}
.TheNav ul li a {
  display: block;
  position: relative;
  color: #272727;
  text-decoration: none;
  /* overflow: hidden; */
}

.TheNav ul li a:hover,
.TheNav ul li a:focus,
.TheNav ul li a:active {
  color: #D2DADF;
}
.TheNav ul li a:hover:after,
.TheNav ul li a:focus:after,
.TheNav ul li a:active:after {
  width: 100%;
  background: #D2DADF;
}

// .TheNav ul li ul{
//   margin: 0 auto;
//   text-align: center;
//   width: 200px;
// }
.TheNav__icon{
  display: block;
  float: left;
}
.TheNav__icon img{
  width: 36px;
  transition: 0.3s;
  fill: black;
}
.TheNav__icon img:hover{
  width: 36px;
  fill: red;
}
.TheNav__icon__dribble{
  font-size: 32px;
  margin-right: 40px;
}
.TheNav__icon__facebook{
  font-size: 34px;
  margin-right: 42px;
}


.TheNav ul li a:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 43.5%;
  width: 0%;
  transform: translateX(-50%);
  height: 3px;
  background: #FFF;
  transition: .35s;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}


</style>

