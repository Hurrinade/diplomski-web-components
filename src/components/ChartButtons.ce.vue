<template>
  <div class="main-conatiner">
    <div class="chart-container">
      <button class="mini-chart" @click="$emit('chart', 'temperature')">
        <Line :data="tempChart.data" :options="tempChart.options" />
      </button>
      <button class="mini-chart" @click="$emit('chart', 'wind')">
        <Line :data="windChart.data" :options="windChart.options" />
      </button>
      <button class="mini-chart" @click="$emit('chart', 'precipation')">
        <Line :data="precipChart.data" :options="precipChart.options" />
      </button>
      <button class="mini-chart" @click="$emit('chart', 'humidity')">
        <Line :data="humidityChart.data" :options="humidityChart.options" />
      </button>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ref } from "vue";
import { Line } from "vue-chartjs";
import { setupChart } from "../config/chartConfig.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    Line,
  },
  emits: ["chart"],
  setup() {
    // Display data for last 5 days, while big chart will for last 10 days
    const tempChart = ref({});
    const windChart = ref({});
    const precipChart = ref({});
    const humidityChart = ref({});

    tempChart.value = setupChart(
      "Temperature chart",
      {
        vrapce: [40, 39, 10, 40, 39],
        mlinovi: [47, 65, 21, 89, 34],
      },
      ["January", "February", "March", "April", "May"]
    );

    windChart.value = setupChart(
      "Wind chart",
      {
        vrapce: [40, 39, 10, 40, 12],
        mlinovi: [47, 65, 21, 89, 34],
      },
      ["January", "February", "March", "April", "May"]
    );

    precipChart.value = setupChart(
      "Daily precipation chart",
      {
        vrapce: [40, 39, 10, 40, 39],
        mlinovi: [47, 65, 21, 20, 34],
      },
      ["January", "February", "March", "April", "May"]
    );

    humidityChart.value = setupChart(
      "Humidity chart",
      {
        vrapce: [40, 39, 10, 40, 39],
        mlinovi: [47, 65, 21, 89, 34],
      },
      ["January", "February", "March", "April", "May"]
    );

    const fetchChartData = () => {
      console.log("fetch chart data");
    };

    return {
      tempChart,
      windChart,
      precipChart,
      humidityChart,
    };
  },
};
</script>

<style>
@import "../../assets/css/chartButtons.css";
@import "../../assets/css/dataPane.css";
</style>
