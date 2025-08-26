<template>
  <nav>
    <div class="logo">
      <img v-show="themeConfig.logo" :src="themeConfig.logo">
    </div>
    <div class="links">
      <router-link v-for="v in themeConfig.links" :key="v.name" :to="v.url" active-class="active">
        <i :class="v.icon"></i>
        <span>{{ v.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: var(--nav-font-size);
  color: var(--nav-text-color);

  .logo {
    width: 60px;
    height: 60px;

    img {
      border-radius: 50%;
      height: 100%;
      width: 100%;
      border: 3px solid #fff;
      transition: all 0.3s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

      &:hover {
        transform: rotate(360deg);
      }
    }

  }

  .links {
    display: flex;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 50px;
    border: #18181b1a solid 1px;

    a {
      margin: 0 10px;
      display: flex;
      align-items: center;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-48%);
        // width: 95%;
        width: 0;
        height: 4px;
        background-color: #00000018;
        border-radius: 5px;
        
      }

      &::before.active {
        width: 95%;
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

<script setup>
import { useThemeConfig } from '../composables';

const themeConfig = useThemeConfig().value.Navbar;
</script>