import { createApp, defineCustomElement } from "vue";
import DataPane from "./components/DataPane.ce.vue";
import ChartButtons from "./components/ChartButtons.ce.vue";
import RadarsPane from "./components/RadarsPane.ce.vue";
import ForecastPane from "./components/ForecastPane.ce.vue";
import EnsiPane from "./components/EnsiPane.ce.vue";
import ChartComponent from "./components/ChartComponent.ce.vue";
import App from "./App.vue";

import router from "./router/index";

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
const ChartComponentWc = defineCustomElement(ChartComponent);
customElements.define("chart-component", ChartComponentWc);

const app = createApp(App).use(router).mount("#app");
