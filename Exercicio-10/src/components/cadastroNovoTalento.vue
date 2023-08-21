<template>
  <v-form ref="form" class="d-flex flex-column align-center">
    <h2 class="ma-3 align-center">Cadastro de talento</h2>

    <v-text-field
      label="Nome completo"
      class="w-25 px-2"
      type="text"
      variant="outlined"
      placeholder="Nome completo"
      v-model="nome"
      :rules="[(v) => !!v || 'O nome é obrigatório!']"
      required
    />

    <v-text-field
      label="Email"
      class="w-25 px-2"
      type="email"
      variant="outlined"
      placeholder="Digite seu e-mail"
      v-model="email"
      :rules="[(v) => !!v || 'O e-mail é obrigatório!']"
      required
    />

    <v-text-field
      label="Data de nascimento"
      class="w-25 px-2"
      type="data"
      variant="outlined"
      placeholder="Digite sua data de nascimento"
      v-model="dataNascimento"
      :rules="[(v) => !!v || 'A data de nascimento é obrigatório!']"
      required
    />

    <v-text-field
      label="WhatsApp"
      class="w-25 px-2"
      type="tel"
      variant="outlined"
      placeholder="Digite seu WhatsApp"
      v-model="whatsapp"
      :rules="[(v) => !!v || 'O WhatsApp é obrigatório!']"
      required
    />

    <label for="areaInteresse">Área de interesse</label>
    <select name="areaInteresse" id="areaIntesse" v-model="areaInteresse">
      <option id="areaIntesse" value="frontEnd">Front end</option>
      <option id="areaIntesse" value="backEnd">Back end</option>
      <option id="areaIntesse" value="fullstack">Full end</option>
    </select>

    <label for="nivelProfissional">Nível profissional</label>
    <select
      name="nivelProfissional"
      id="nivelProfissional"
      v-model="nivelProfissional"
    >
      <option id="nivelProfissional" value="trainee">Trainee</option>
      <option id="nivelProfissional" value="junior">Junior</option>
      <option id="nivelProfissional" value="pleno">Pleno</option>
      <option id="nivelProfissional" value="senior">Senior</option>
    </select>

    <label for="habilidades">Suas habilidades</label>
    <div class="row">
      <div class="col-2 checkbox-container">
        <input
          type="checkbox"
          name="habilidades"
          value="html"
          v-model="habilidades"
        />
        <label>HTML</label>
      </div>

      <div class="col-2 checkbox-container">
        <input
          type="checkbox"
          name="habilidades"
          v-model="habilidades"
          value="css"
        />
        <label>CSS3</label>
      </div>

      <div class="col-2 checkbox-container">
        <input
          type="checkbox"
          name="habilidades"
          v-model="habilidades"
          value="js"
        />
        <label>JavaScript</label>
      </div>

      <div class="col-2 checkbox-container">
        <input
          type="checkbox"
          name="habilidades"
          v-model="habilidades"
          value="react"
        />
        <label>React</label>
      </div>

      <div class="col-2 checkbox-container">
        <input
          type="checkbox"
          name="habilidades"
          v-model="habilidades"
          value="react-native"
        />
        <label>React Native</label>
      </div>

      <div class="col-2 checkbox-container">
        <input
          type="checkbox"
          name="habilidades"
          v-model="habilidades"
          value="node"
        />
        <label>Node</label>
      </div>
    </div>

    <textarea
      name="cartaApresentacao"
      id="cartaApresentacao"
      cols="10"
      rows="5"
      placeholder="Digite aqui sua carta de apresentação"
      v-model="cartaApresentacao"
    ></textarea>

    <v-btn
      color="success"
      class="mt-1 me-2"
      size="large"
      @click="adicionarTalento"
      >Cadastrar</v-btn
    >
  </v-form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default {
  data() {
    return {
      nome: "",
      email: "",
      dataNascimento: "",
      whatsapp: "",
      areaInteresse: "",
      nivelProfissional: "",
      habilidades: [],
      cartaApresentacao: "",
    };
  },
  methods: {
    async adicionarTalento() {
      const { valid } = await this.$refs.form.validate();

      if (!valid) {
        alert("Preencha todos os campos");
        return;
      }

      const novoTalento = {
        id: uuidv4(),
        nome: this.nome,
        email: this.email,
        dataNascimento: this.dataNascimento,
        whatsapp: this.whatsapp,
        areaInteresse: this.areaInteresse,
        nivelProfissional: this.nivelProfissional,
        habilidades: this.habilidades,
        cartaApresentacao: this.cartaApresentacao,
      };

      try {
        await axios.post("http://localhost:50001/talentos", novoTalento);
      } catch (erro) {
        console.log(erro);
      }
    },
  },
};
</script>

<style scoped></style>
