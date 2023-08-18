<template>
  <div class="container">
    <header>
      <div class="row my-3">
        <img class="col-1" src="../assets/logo.svg" alt="" :width="50" />
        <h2 class="col-11">Exercicio Semana 10</h2>
      </div>

      <div class="row my-4">
        <div class="col-3 btn btn-lg btn-outline-secondary">
          <a href="./">Home
            <House class="mx-2" />
          </a>
          
        </div>

        <div class="col-3 btn btn-lg btn-outline-secondary">
          <a href="./cadastro">Talentos
            <Folder class="mx-2" />
          </a>
          
        </div>

        <div class="col-3 btn btn-lg btn-outline-secondary">
          <a href="./sobre">Sobre
            <Pin class="mx-2" />
          </a>
          
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import House from "./icons/House.vue";
import Folder from "./icons/Folder.vue";
import Pin from "./icons/Pin.vue";

export default {
  components: {
    House,
    Folder,
    Pin,
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
