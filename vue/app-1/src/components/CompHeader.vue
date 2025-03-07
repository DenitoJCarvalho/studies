<template>
  <header class="comp-header">
    Componente Header

    <div class="error" v-if="message === 'error'">Mensagem de erro</div>
    <div class="success" v-if="message === 'success'">Mensagem de sucesso.</div>

    <div 
      v-for="user in users"
      :key="user.id"  
    >
      {{ user.name }}
    </div>

    <h1 
    :class="{
      'title': false,
      'title-home': true
    }">
    Página inicial  
  </h1>

  <div>
    <label>Contrato</label><br>
    <input 
      v-model="contract"
      type="checkbox"
      value="checkbox"
    />Aceita nosso termos ...<br>
    {{ contract }}
  </div>
  </header>

  <h2>{{ fullName }}</h2>

  <button
    @click="onClick($event)"
  >Enviar</button>
</template>

<script>
export default {
  data: () => {
    return {
      message: 'success',
      users: [
        {
          "id": 1,
          "name": "Leanne",
          "lastname": "Graham",
        },
        {
          "id": 2,
          "name": "Ervin",
          "lastname": "Howell",
        },
        {
          "id": 3,
          "name": "Clementine",
          "lastname": "Bauch",
        }
      ],
      contract: true
    }
  },
  methods: {
    onClick($event) {
      console.log('click ...', $event)
    }
  },
  computed: {
    fullName() { 
      return `${this.users.name} ${this.users.lastname}`;
    }
  },
  watch: {}
}
</script>

<style>
  .comp-header {
    background-color: green;
    color: white;
  }

  .error {
    background-color: transparent;
    color: tomato;
  }

  .success {
    background-color: transparent;
    color: greenyellow;
  }

  .title {
    font-size: 2rem;
  }

  .title-home {
    font-size: 3rem;
    font-style: italic;
  }
</style>