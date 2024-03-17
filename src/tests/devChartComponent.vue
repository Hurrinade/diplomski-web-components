<template>
  <div>
    <chart-component chartType="temperature"></chart-component>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ChartComponent from "../components/ChartComponent.ce.vue";

export default defineComponent({
  components: {
    ChartComponent,
  },
  setup() {
    return {};
  },
});
</script>
