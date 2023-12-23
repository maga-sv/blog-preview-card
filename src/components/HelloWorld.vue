<script setup>
import { useBlogStore } from '../stores/blog.js';

const blogStore = useBlogStore()

</script>

<template>

<section class="blog">

  <div class="container">

    <div class="blog__card">

      <img :src="blogStore?.blog?.backgroundImg ? blogStore?.blog?.backgroundImg : '../assets/images/no-image.jpg'" alt="illustration" class="blog__card-img">

      <a href="#!"  class="blog__card-tag">{{blogStore?.blog?.type}}</a>

      <span class="blog__card-date">Published {{blogStore?.blog?.date}}</span>

      <h3 class="blog__card-title">{{blogStore?.blog?.title}}</h3>

      <p class="blog__card-txt">{{blogStore?.blog?.text}}</p>

      <a href="#!" class="blog__card-user">
        <img :src="blogStore?.blog?.user?.ava" alt="avatar" class="blog__card-user-ava">
        <span class="blog__card-user-name">{{blogStore?.blog?.user?.name}}</span>
      </a>

    </div>

  </div>

</section>

</template>

<style lang="scss" scoped>

.blog {

  &__card {
    max-width: 400px;
    width: 100%;
    padding: 30px 25px;
    background: var(--secondaryColor);
    border-radius: 20px;
    display: grid;
    gap: 20px;
    border: 1px solid var(--secAccentColor);
    box-shadow: 10px 13px 0px -1px var(--secAccentColor);
    
    &-img {
      width: 100%;
      border-radius: 20px;
    }

    &-tag {
      font-weight: 800;
      color: var(--secAccentColor);
      padding: 10px 15px;
      background: var(--primaryColor);
      cursor: pointer;
      border-radius: 5px;
      display: inline-block;
      width: 100px;
      text-align: center;
    }

    &-title {
      font-weight: 800;
      font-size: 20px;
      color: var(--secAccentColor);
    }
    
    &-txt {
      font-weight: 600;
      color: var(--accentColor);
    }

    &-user {
      display: flex;
      align-items: center;
      gap: 15px;
      width: 200px;

      &-ava {
        height: 65px;
        width: 65px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
      }

      &-name  {
        font-weight: 800;
        color: var(--secAccentColor);
        text-transform: capitalize;
      }

    }
  }

}

</style>
