<script setup>
import { useThemeConfig } from "../composables";

const themeConfig = useThemeConfig().value.Navbar;
</script>

<template>
  <nav>
    <div class="logo">
      <img v-show="themeConfig.logo" :src="themeConfig.logo" />
    </div>
    <div class="links">
      <router-link
        v-for="v in themeConfig.links"
        :key="v.name"
        :to="v.url"
        active-class="active"
      >
        <i :class="v.icon" />
        <span>{{ v.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: var(--nav-font-size);

  .logo {
    width: 60px;
    height: 60px;

    img {
      border-radius: 50%;
      height: 100%;
      width: 100%;
      border: 3px solid #fff;
      transition: all 0.3s ease-in-out;
      box-shadow: var(--shadow);

      &:hover {
        transform: rotate(360deg);
      }
    }
  }

  .links {
    display: flex;
    padding: 5px 10px;
    box-shadow: var(--shadow);
    border-radius: 50px;
    border: #18181b1a solid 1px;
    background-color: var(--bg-color);

    a {
      margin: 0 10px;
      display: flex;
      align-items: center;
      position: relative;
      transition: all 0.3s ease-in-out;
      color: var(--nav-text-color);

      &.active {
        color: var(--link-active-color);
        text-shadow: 0 0 20px var(--link-hover-color);
        transform: scale(1.05);
      }

      &:hover:not(.active) {
        color: var(--link-hover-color);
        text-shadow: 0 0 20px var(--link-hover-color);
      }

      i {
        display: block;
        margin-right: 3px;
      }

      span {
        font-size: 0.9em;
      }
    }
  }
}
</style>
