import { createRouter, createWebHistory } from "vue-router";

import devDataPane from "../tests/devDataPane.vue";
import devChartButtons from "../tests/devChartButtons.vue";
import devChartComponent from "../tests/devChartComponent.vue";
import devEnsiPane from "../tests/devEnsiPane.vue";
import devRadarsPane from "../tests/devRadarsPane.vue";
import devForecastPane from "../tests/devForecastPane.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Default
    { path: "/", redirect: { path: "/data-pane" } },
    // Components
    {
      path: "/data-pane",
      name: "devDataPane",
      component: devDataPane,
    },
    {
      path: "/chart-buttons",
      name: "devChartButtons",
      component: devChartButtons,
    },
    {
      path: "/chart-component",
      name: "devChartComponent",
      component: devChartComponent,
    },
    {
      path: "/ensi-pane",
      name: "devEnsiPane",
      component: devEnsiPane,
    },
    {
      path: "/radars-pane",
      name: "devRadarsPane",
      component: devRadarsPane,
    },
    {
      path: "/forecast-pane",
      name: "devForecastPane",
      component: devForecastPane,
    },
  ],
});

export default router;
