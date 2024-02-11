import { createApp, defineCustomElement } from "vue";
import DataPane from "./components/DataPane.ce.vue";
import App from "./App.vue";

const DataPaneWc = defineCustomElement(DataPane);
customElements.define("data-pane", DataPaneWc);

const app = createApp(App);

app.mount("#app");
