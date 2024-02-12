import { createApp, defineCustomElement } from "vue";
import DataPane from "./components/DataPane.ce.vue";
import ChartButtons from "./components/ChartButtons.ce.vue";
import RadarsPane from "./components/RadarsPane.ce.vue";
import ForecastPane from "./components/ForecastPane.ce.vue";
import EnsiPane from "./components/EnsiPane.ce.vue";
import App from "./App.vue";

const DataPaneWc = defineCustomElement(DataPane);
customElements.define("data-pane", DataPaneWc);
const ChartButtonsWc = defineCustomElement(ChartButtons);
customElements.define("chart-buttons", ChartButtonsWc);
const RadarsPaneWc = defineCustomElement(RadarsPane);
customElements.define("radars-pane", RadarsPaneWc);
const ForecastPaneWc = defineCustomElement(ForecastPane);
customElements.define("forecast-pane", ForecastPaneWc);
const EnsiPaneWc = defineCustomElement(EnsiPane);
customElements.define("ensi-pane", EnsiPaneWc);

const app = createApp(App);

app.mount("#app");
