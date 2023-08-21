<template> 
    <v-card elevation="5" class="ma-3">
      <span>Nome: {{ nome }}</span>
      <span>Email: {{ email }}</span>
      <span>Data de nascimento: {{ dataNascimento }}</span>
      <span>WhatsApp: {{ whatsapp }}</span>
      <span>Área de interesse: {{ areaInteresse }}</span>
      <span>Nível profissional: {{ nivelProfissional }}</span>
      <span>Suas habilidades: {{ habilidades }}</span>
      <span>Carta de Apresentação: {{ cartaApresentacao }}</span>
    </v-card>
  </template>
  <script>
  export default {
    props: ['nome', 'email', 'dataNascimento', 'whatsapp', 'areaInteresse', 'nivelProfissional', 'habilidades', 'cartaApresentacao', 'id'],
  };
  </script>
  <style scoped>
    
  </style>