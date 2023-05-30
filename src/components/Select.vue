<template>
    <div class="form-group row">
      <label v-bind:for="id" class="col-sm-2 col-form-label">{{ label }}</label>
      <select class="col-sm-3 custom-select mr-sm-2" v-bind:id="id">
        <option v-for="value in values" v-bind:key="value" v-bind:value="value">{{ value }}</option>
      </select>
    </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    values: {
      type: Array,
      required: false
    }
  }
};
</script>

<style scoped></style>