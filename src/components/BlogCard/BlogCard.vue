<script setup>

const props = defineProps ({
    blog: null
})

</script>

<template>
  <div class="blog__card">
    <img
      :src="
        blog?.backgroundImg
          ? blog?.backgroundImg
          : '@/assets/images/no-image.jpg'
      "
      alt="illustration"
      class="blog__card-img"
    />

    <a href="#!" class="blog__card-tag">{{ blog?.type }}</a>

    <span class="blog__card-date">Published {{ blog?.date }}</span>

    <h3 class="blog__card-title">{{ blog?.title }}</h3>

    <p class="blog__card-txt">{{ blog?.text }}</p>

    <a href="#!" class="blog__card-user">
      <img
        :src="blog?.user?.ava"
        alt="avatar"
        class="blog__card-user-ava"
      />
      <span class="blog__card-user-name">{{
        blog?.user?.name
      }}</span>
    </a>
  </div>
</template>
