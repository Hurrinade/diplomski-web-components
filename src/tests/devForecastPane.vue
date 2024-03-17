<template>
  <div>
    <forecast-pane location="Vrapce"></forecast-pane>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ForecastPane from "../components/ForecastPane.ce.vue";

export default defineComponent({
  components: {
    ForecastPane,
  },
  setup() {
    return {};
  },
});
</script>
