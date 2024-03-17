<template>
  <div>
    <ensi-pane location="Vrapce"></ensi-pane>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import EnsiPane from "../components/EnsiPane.ce.vue";

export default defineComponent({
  components: {
    EnsiPane,
  },
  setup() {
    return {};
  },
});
</script>
