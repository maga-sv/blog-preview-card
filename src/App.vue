<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <main>
    <HelloWorld />
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="https://www.frontendmentor.io/profile/maga-sv" target="_blank">Maga</a>.
    </div>
  </main>
</template>

<style lang="scss" scoped>

main {  
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
}
.attribution {
  position: absolute;
  bottom: 30px;
  font-size: 11px;
  text-align: center;

  & a {
    color: hsl(228, 45%, 44%);
    
  }
}
</style>
