<template>
  <div>
    <chart-buttons></chart-buttons>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ChartButtons from "../components/ChartButtons.ce.vue";

export default defineComponent({
  components: {
    ChartButtons,
  },
  setup() {
    return {};
  },
});
</script>
