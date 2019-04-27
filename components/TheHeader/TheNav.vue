<template>
  <div class="TheNav">
    <nav>
      <ul class="TheNav_List">
        <li class="TheNav_Item TheNav_Item_Logo">
          <p class="TheNav_Text">
            <img :src="logoImg" alt class="TheNav_Logo">
          </p>
        </li>
        <li class="TheNav_Item">
          <a @click="routing('home')" class="text--letterspace">Home</a>
        </li>
        <li class="TheNav_Item">
          <a @click="routing('about')" class="text--letterspace">About</a>
        </li>
        <li class="TheNav_Item">
          <a href="https://note.mu/ryosukefujiki" target="_blank" class="text--letterspace">Blogs</a>
        </li>
        <li class="TheNav_Item">
          <div class="TheNav_ItemIcons">
            <a
              href="https://dribbble.com/bighappy"
              class="TheNav_ItemIcon TheNav_ItemIcon_Dribbble"
              target="_blank"
            >
              <i class="fab fa-dribbble"></i>
            </a>
            <a
              href="https://www.facebook.com/rfujiki0625"
              class="TheNav_ItemIcon TheNav_ItemIcon_Facebook"
              target="_blank"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://www.instagram.com/ryosukefujiki/"
              class="TheNav_ItemIcon TheNav_ItemIcon_Instagram"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      logoImg: "/home/new_logo.png"
    };
  },
  props: ["headerActive"],
  computed: {
    ...mapGetters({
      aboutEntered: "about/aboutEntered"
    })
  },
  methods: {
    routing(url) {
      // this.$router.push(url)
      this.$parent.toggleMenu();
      if (url == "home" && this.$route.path != "/") {
        this.$store.commit("homeClick");
      }
      if (url == "about" && this.$route.path != "/about") {
        this.$store.commit("about/aboutClick");
      }
    }
    // ...mapMutations({
    //   aboutClick: 'aboutClick',
    // }),
  }
};
</script>


<style lang="scss" scoped>
/* TheNavに対するスタイル */
.TheNav {
  z-index: 9;
  position: fixed;
  background: rgba(255, 255, 255, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.TheNav_Text {
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 12px;
}
.TheNav_Logo {
  width: 56px;
  height: 56px;
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
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: 0.35s;
}
.TheNav.open li:nth-of-type(2) {
  animation-delay: 0.4s;
}
.TheNav.open li:nth-of-type(3) {
  animation-delay: 0.45s;
}
.TheNav.open li:nth-of-type(4) {
  animation-delay: 0.5s;
}
.TheNav.open li:nth-of-type(5) {
  animation-delay: 0.55s;
}

.text--letterspace {
  letter-spacing: 10px;
}

.TheNav_Item a {
  cursor: pointer;
}

.TheNav ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
}
.TheNav_Item {
  display: block;
  position: relative;
  opacity: 0;
  margin-bottom: 36px;
  width: 200px;
  text-align: center;
}
.TheNav_Item_Logo {
  margin-bottom: 20px;
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
  color: #d2dadf;
}
.TheNav ul li a:hover:after,
.TheNav ul li a:focus:after,
.TheNav ul li a:active:after {
  width: 100%;
  background: #d2dadf;
}

.TheNav_ItemIcons {
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
}
.TheNav_ItemIcon {
  display: block;
  font-weight: normal;
}
.TheNav_ItemIcon_Dribbble {
  font-size: 32px;
}
.TheNav_ItemIcon_Facebook {
  font-size: 34px;
}

.TheNav ul li a:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 46.5%;
  width: 0%;
  transform: translateX(-50%);
  height: 3px;
  background: #fff;
  transition: 0.35s;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: -20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}


.TheNav_Item_Logo{
  margin-bottom: 20px;
}

@media screen and (max-width: 480px) {
  .TheNav_Item {
    margin-bottom: 36px;
    width: 160px;
  }
  .TheNav_Item_Logo{
    margin-bottom: 20px;
  }

  .TheNav_ItemIcons {
    width: 160px;
  }
  .TheNav_Logo {
    width: 48px;
    height: 48px;
  }

  .TheNav nav {
    font-size: 28px;
  }

  .text--letterspace {
    letter-spacing: 8px;
  }
  .TheNav_ItemIcon_Dribbble {
    font-size: 26px;
  }
  .TheNav_ItemIcon_Facebook {
    font-size: 28px;
  }
}
</style>

