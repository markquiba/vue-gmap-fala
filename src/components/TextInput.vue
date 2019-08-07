<template>
  <div>
    <label><strong>{{ label }}</strong></label>
    <div class="input-group mb-3">
      <input :value="this.$store.state[inputName]" @input="updateInput($event, inputName)" type="text" class="form-control" aria-label="Starting Location" required>
      <div class="input-group-append">
        <button @click="clearInput(inputName)" class="btn btn-outline-secondary" type="button">X</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TextInput',
  props: {
    label: String,
    inputName: String
  },
  methods: {
    updateInput (e, textInput) {
      this.$store.commit('updateInput', { textInput, payload: e.target.value })
    },
    clearInput (textInput) {
      this.$store.commit('clearInput', textInput)
    }
  }
}
</script>
