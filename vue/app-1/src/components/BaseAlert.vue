<template>
  <div :class="baseClass">
    Seu formulário foi enviado com sucesso.

    <button @click="onClick()">X</button>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: ''
    },
  },
  computed: {
    baseClass() {
      return [
        'alert',
        this.variant ? `alert-${this.variant}` : '' 
      ]
     }
  },
  methods: {
    onClick() {
      this.$emit('close');
      console.log('clickou...');
    }
  }
}
</script>

<style scoped>
  .alert {
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background: #DDD;
  }

  .alert-success {
    background: #42b983;
    color: #DDD;
  }
</style>