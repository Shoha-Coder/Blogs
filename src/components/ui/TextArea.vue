<template>
  <div class="form-floating mb-3">
    <textarea
      :type="type"
      :id="label"
      class="form-control"
      :placeholder="label"
      @input="updateInput"
      :value="modelValue"
    ></textarea>
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    label: String,
    type: String,
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-floating {
  textarea {
    resize: vertical;
  }
}
</style>
