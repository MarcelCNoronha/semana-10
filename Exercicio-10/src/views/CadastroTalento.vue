<template>
  <div class="container">
    <h2>Cadastro de talento</h2>

    <label for="nome">Nome completo</label>
    <input type="text" id="nome" placeholder="Nome completo" v-model="nome" />

    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Email" v-model="email" />

    <label for="dataNascimento">Data de nascimento</label>
    <input
      type="data"
      id="dataNascimento"
      placeholder="Data de Nascimento"
      v-model="dataNascimento"
    />

    <label for="whatsapp">WhatsApp</label>
    <input type="tel" id="whatsapp" placeholder="WhatsApp" v-model="whatsapp" />

    <label for="areaInteresse">Área de interesse</label>
    <select name="areaInteresse" id="areaIntesse" v-model="areaInteresse">
      <option id="areaIntesse" value="frontEnd">Front end</option>
      <option id="areaIntesse" value="backEnd">Back end</option>
      <option id="areaIntesse" value="fullstack">Full end</option>
    </select>

    <label for="nivelProfissional">Nível profissional</label>
    <select name="nivelProfissional" id="nivelProfissional" v-model="nivelProfissional">
      <option id="nivelProfissional" value="trainee">Trainee</option>
      <option id="nivelProfissional" value="junior">Junior</option>
      <option id="nivelProfissional" value="pleno">Pleno</option>
      <option id="nivelProfissional" value="senior">Senior</option>
    </select>

    <label for="habilidades">Suas habilidades</label>
    <div class="row">
      <div class="col-2 checkbox-container">
        <input type="checkbox" name="habilidades" value="html" v-model="habilidades" />
        <label>HTML</label>
      </div>

      <div class="col-2 checkbox-container">
        <input type="checkbox" name="habilidades" v-model="habilidades" value="css" />
        <label>CSS3</label>
      </div>

      <div class="col-2 checkbox-container">
        <input type="checkbox" name="habilidades" v-model="habilidades" value="js" />
        <label>JavaScript</label>
      </div>

      <div class="col-2 checkbox-container">
        <input type="checkbox" name="habilidades"  v-model="habilidades" value="react" />
        <label>React</label>
      </div>

      <div class="col-2 checkbox-container">
        <input type="checkbox" name="habilidades" v-model="habilidades" value="react-native" />
        <label>React Native</label>
      </div>

      <div class="col-2 checkbox-container">
        <input type="checkbox" name="habilidades" v-model="habilidades" value="node" />
        <label>Node</label>
      </div>
    </div>

    <textarea name="cartaApresentacao" id="cartaApresentacao" cols="10" rows="5" placeholder="Digite aqui sua carta de apresentação" v-model="cartaApresentacao"></textarea>

    <button @click= "adicionarTalento">
      Cadastrar
    </button>
  </div>
</template>

<script>

import {v4 as uuidv4} from 'uuid';



export default {
  data(){
    return {
      listaTalentos: [],
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
  methods:{
    
    adicionarTalento() {
      console.log("Clicou no botão Cadastrar");
      console.log("Nome:", this.nome);
      console.log("Email:", this.email);
      console.log("Data de Nascimento:", this.dataNascimento);
      console.log("WhatsApp:", this.whatsapp);
      console.log("Área de Interesse:", this.areaInteresse);
      console.log("Nível Profissional:", this.nivelProfissional);
      console.log("Habilidades:", this.habilidades);
      console.log("Carta de Apresentação:", this.cartaApresentacao);
      
      if (
        this.nome === "" ||
        this.email === "" ||
        this.dataNascimento === "" ||
        this.whatsapp === "" ||
        this.areaInteresse === "" ||
        this.nivelProfissional === "" ||
        this.habilidades.length === 0 ||
        this.cartaApresentacao === ""
      ) {
        alert("Preencha todos os campos");
        return;
      }

      const talento = {
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

    this.listaTalentos.push(talento);
    this.$emit('talentAdded', this.listaTalentos);

    // Limpar os campos após adicionar o talento
      this.nome = "";
      this.email = "";
      this.dataNascimento = "";
      this.whatsapp = "";
      this.areaInteresse = "";
      this.nivelProfissional = "";
      this.habilidades = [];
      this.cartaApresentacao = "";

    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

input,
button {
  width: 30%;
  margin: 10px;
}
</style>
