<template>
  <div class="container">
    <h2>Banco de talentos</h2>
    <button @click="buscarTalentos">Recarregar Talentos</button>
    <cardTalent
      v-for="talento in listaTalentos"
      :key="talento.id"
      :nome="talento.nome"
      :email="talento.email"
      :dataNascimento="talento.dataNascimento"
      :whatsapp="talento.whatsapp"
      :areaInteresse="talento.areaInteresse"
      :nivelProfissional="talento.nivelProfissional"
      :habilidades="talento.habilidades"
      :cartaApresentacao="talento.cartaApresentacao"
      :id="talento.id"
    />
  </div>
</template>

<script>
import cardTalent from "../components/cardTalent.vue";
import axios from "axios";

export default {
  components: {
    cardTalent,
  },
  data() {
    return {
      listaTalentos: [], // Inicialize a lista de talentos como um array vazio
    };
  },
  mounted() {
    // Chame o método para buscar os talentos quando o componente for montado
    this.buscarTalentos();
  },
  methods: {
    async buscarTalentos() {
      try {
        // Faça a solicitação GET para buscar os talentos usando o Axios
        const response = await axios.get("http://localhost:5173/api/talent");
        this.listaTalentos = response.data; // Atualize a lista de talentos com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar talentos:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

button {
  width: 30%;
  margin: 10px;
}
</style>
