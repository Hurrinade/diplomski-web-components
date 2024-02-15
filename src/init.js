import { defineCustomElement } from "vue";
import DataPane from "./components/DataPane.ce.vue";
import ChartButtons from "./components/ChartButtons.ce.vue";
import RadarsPane from "./components/RadarsPane.ce.vue";
import ForecastPane from "./components/ForecastPane.ce.vue";
import EnsiPane from "./components/EnsiPane.ce.vue";
import ChartComponent from "./components/ChartComponent.ce.vue";

const DataPaneWebComponent = defineCustomElement(DataPane);
const ChartButtonsWebComponent = defineCustomElement(ChartButtons);
const RadarsPaneWebComponent = defineCustomElement(RadarsPane);
const ForecastPaneWebComponent = defineCustomElement(ForecastPane);
const EnsiPaneWebComponent = defineCustomElement(EnsiPane);
const ChartComponentWebComponent = defineCustomElement(ChartComponent);

export {
  DataPaneWebComponent,
  ChartButtonsWebComponent,
  RadarsPaneWebComponent,
  ForecastPaneWebComponent,
  EnsiPaneWebComponent,
  ChartComponentWebComponent,
};
