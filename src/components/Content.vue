<template>
  <div id="content">
    <Configuration v-show="getContent() === 'configuration'"></Configuration>
  </div>
</template>

<script>
import Configuration from "./Configuration.vue";

export default {
  name: "Content",
  components: {
    Configuration
  },
  methods : {
    getContent() {
      return this.$parent.content;
    }
  }
};
</script>

<style scoped>
#content {
  flex: 1 1 auto;
  background-color: slategrey;
}
</style>
