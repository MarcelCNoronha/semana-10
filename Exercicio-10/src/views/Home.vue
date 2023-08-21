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
import axios from 'axios'

export default{
  components:{
    cardTalent
  },
  data() {
    return {
      listaTalentos: [],
    };
  },
  methods: {
  },
mounted(){
      axios.get('http://localhost:50001/talentos')
      .then(res => this.listaTalentos = res.data)
      .catch(erro => console.log(erro))
    }
  }
</script>

<style scoped></style>
