<template>
  <form id="config">
    <Select id="ecoles" label="École :" v-bind:values="ecoles"></Select>
  </form>
</template>

<script>
import { sortTable } from '@/assets/data.min'
import Select from "./Select.vue";

export default {
  name: "Configuration",
  components: {
    Select
  },
  data() {
    return {
      ecoles: this.initSchools(),
    }
  },
  methods: {
    getSchools() {
      let schools = []; // tableau qui contient les différentes écoles
      sortTable.forEach(sort => {
        if (!schools.includes(sort[2])) // évite les doublons
          schools.push(sort[2]);
      });
      return schools;
    },
    initSchools() {
      let schools = JSON.parse(localStorage.getItem("ecoles"));
      if (!schools) {
        schools = this.getSchools();
        localStorage.setItem("ecoles", JSON.stringify(schools));
      }
      return schools;
    },
  }
};
</script>

<style scoped>
#config {
  padding: 4em;
  font-size: 1.2em;
  color: darkred;
}
</style>
