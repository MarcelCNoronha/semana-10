<template>

<div class="container">
  <div class="row">
    <h2 class="col-6">
      Banco de talentos
    </h2>
  </div>
    <cardTalent

    v-for="talento in listaTalentos"
    :key="talento.id"
    :nome = "talento.nome"
    :email = "talento.email"
    :dataNascimento = "talento.dataNascimento"
    :whatsapp = "talento.whatsapp"
    :areaInteresse = "talento.areaInteresse"
    :nivelProfissional = "talento.nivelProfissional"
    :habilidades = "talento.habilidades"
    :cartaApresentacao = "talento.cartaApresentacao"
    :id="talento.id" 
    @talentAdded="atualizarListaTalentos"
    />
  </div>
</template>

<script>
import cardTalent from "../components/cardTalent.vue"
import CadastroTalento from "./CadastroTalento.vue";

export default{
  components:{
    cardTalent,
    CadastroTalento
  },
  data() {
    return {
      listaTalentos: [],
    };
  },
  methods: {
    atualizarListaTalentos(novaListaTalentos) {
      this.listaTalentos = novaListaTalentos;
    },
  },
};
</script>

<style scoped></style>
