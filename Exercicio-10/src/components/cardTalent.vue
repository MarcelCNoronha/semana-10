<template> 
    <div class="card">
      <span>Nome: {{ nome }}</span>
      <span>Email: {{ email }}</span>
      <span>Data de nascimento: {{ dataNascimento }}</span>
      <span>WhatsApp: {{ whatsapp }}</span>
      <span>Área de interesse: {{ areaInteresse }}</span>
      <span>Nível profissional: {{ nivelProfissional }}</span>
      <span>Suas habilidades: {{ habilidades }}</span>
      <span>Carta de Apresentação: {{ cartaApresentacao }}</span>
    </div>
  </template>
  <script>
  export default {
    props: ['nome', 'email', 'dataNascimento', 'whatsapp', 'areaInteresse', 'nivelProfissional', 'habilidades', 'cartaApresentacao', 'id']
  }
  </script>
  <style scoped>
  .card {
    display: flex;
    flex-direction: column;
    width: calc(100%/4 - 2em);
    margin: 1em;
    border: 1px solid black;
    align-items: center;
  }
    
  </style>