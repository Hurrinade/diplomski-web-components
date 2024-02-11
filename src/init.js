import { defineCustomElement } from "vue";
import DataPane from "./components/DataPane.ce.vue";

const DataPaneWebComponent = defineCustomElement(DataPane);

export { DataPaneWebComponent };
