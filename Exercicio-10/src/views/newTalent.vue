<template>
  <div class="container">
    <h2>Cadastro de talento</h2>

    <form @submit.prevent="handleSubmit" class="form">
      <div class="row">
        <label for="name">Nome completo</label>
        <input
          type="text"
          id="name"
          placeholder="Nome completo"
          v-model="name"
        />
      </div>
      {{ this.errors.name }}

      <div class="row">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email" v-model="email" />
      </div>
      {{ this.errors.email }}

      <div class="row">
        <label for="dataNascimento">Data de nascimento</label>
        <input
          type="dataNascimento"
          id="dataNascimento"
          placeholder="Data de Nascimento"
          v-model="date_birth"
        />
      </div>

      <div class="row">
        <label for="phone">WhatsApp</label>
        <input id="phone" placeholder="WhatsApp" v-model="phone" />
      </div>

      <div class="row">
        <label for="areaInteresse">Área de interesse</label>
        <select name="areaInteresse" id="areaIntesse" v-model="area">
          <option id="areaIntesse" value="frontEnd">Front end</option>
          <option id="areaIntesse" value="backEnd">Back end</option>
          <option id="areaIntesse" value="fullstack">Full end</option>
        </select>
      </div>
      {{ this.errors.area }}

      <div class="row">
        <label for="nivelProfissional">Nível profissional</label>
        <select name="nivelProfissional" id="nivelProfissional" v-model="nivel">
          <option id="nivelProfissional" value="trainee">Trainee</option>
          <option id="nivelProfissional" value="junior">Junior</option>
          <option id="nivelProfissional" value="pleno">Pleno</option>
          <option id="nivelProfissional" value="senior">Senior</option>
        </select>
      </div>

      <div class="row">
        <p>Suas habilidades</p>

        <div v-if="area === 'frontEnd' || area === 'fullstack'">
          <label
            ><input type="checkbox" v-model="skills" value="HTML" />HTML</label
          >
          <label
            ><input type="checkbox" v-model="skills" value="CSS" /> CSS</label
          >
          <label
            ><input type="checkbox" v-model="skills" value="JAVASCRIPT" />
            JAVASCRIPT</label
          >
          <label
            ><input type="checkbox" v-model="skills" value="VUE" /> VUE</label
          >
        </div>

        <div v-if="area === 'backEnd' || area === 'fullstack'">
          <label
            ><input type="checkbox" v-model="skills" value="Node" />Node</label
          >
          <label>
            <input type="checkbox" v-model="skills" value="Php" /> Php</label
          >
          <label
            ><input type="checkbox" v-model="skills" value="Laravel" />
            Laravel</label
          >
          <label
            ><input type="checkbox" v-model="skills" value="Java" /> Java</label
          >
        </div>
      </div>
      {{ skills.length }}

      <div class="row">
        <textarea
          name="cartaApresentacao"
          id="cartaApresentacao"
          cols="10"
          rows="5"
          placeholder="Digite aqui sua carta de apresentação"
          v-model="apresentation"
        ></textarea>
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import * as yup from "yup";
import { captureErrorYup } from "../utils/captureErroYup";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      date_birth: "",
      phone: "",
      area: "",
      nivel: "",
      skills: [],
      apresentation: "",
      errors: {},
    };
  },
  methods: {
    handleSubmit() {
      try {
        // montar o schema
        const schema = yup.object().shape({
          name: yup
            .string()
            .required("O nome é obrigatório")
          ,
          email: yup
            .string()
            .email("Email não inválido")
            .required("Email é obrigatório"),
          area: yup.string().required("A area é obrigatorio"),
        });

        // passa os dados para validacao
        schema.validateSync(
          {
            name: this.name,
            email: this.email,
            area: this.area,
          },
          { abortEarly: false }
        );

        axios({
          url: "http://localhost:5173/api/talent",
          method: "POST",
          data: {
            name: this.name,
            email: this.email,
            date_birth: this.date_birth,
            phone: this.phone,
            area: this.area,
            nivel: this.nivel,
            skills: this.skills,
            bio: this.apresentation,
          },
        })
          .then(() => {
            alert("CADASTRADO com sucesso");
          })
          .catch(() => {
            alert("houve um erro ao cadastrar");
          });
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          // certeza que foi um erro do yup
          this.errors = captureErrorYup(error);
        }
      }
    },
  },
  watch: {
    area(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.skills = [];
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
}

div{
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center; 
}

form,
input,
button,
select,
textarea {
  width: 60%;
  margin: 10px;
}
</style>
