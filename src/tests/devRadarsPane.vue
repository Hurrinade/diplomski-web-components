<template>
  <div>
    <radars-pane location="Vrapce"></radars-pane>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import RadarsPane from "../components/RadarsPane.ce.vue";

export default defineComponent({
  components: {
    RadarsPane,
  },
  setup() {
    return {};
  },
});
</script>
