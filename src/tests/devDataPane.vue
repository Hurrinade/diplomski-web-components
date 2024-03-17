<template>
  <div>
    <data-pane location="Vrapce"></data-pane>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import DataPane from "../components/DataPane.ce.vue";

export default defineComponent({
  name: "devDataPane",
  components: {
    DataPane,
  },
  setup() {
    window.addEventListener("ping", (event) => {
      console.log(event.detail);
    });
    return {};
  },
});
</script>
