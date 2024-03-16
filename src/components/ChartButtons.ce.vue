<template>
  <div class="main-conatiner">
    <div class="chart-container">
      <button
        v-if="tempChart.data"
        class="mini-chart"
        @click="$emit('chart', 'temperature')"
      >
        <Line
          :data="tempChart.data ? tempChart.data : {}"
          :options="tempChart.options"
        />
      </button>
      <button
        v-if="windChart.data"
        class="mini-chart"
        @click="$emit('chart', 'windspeed')"
      >
        <Line :data="windChart.data" :options="windChart.options" />
      </button>
      <button
        v-if="precipChart.data"
        class="mini-chart"
        @click="$emit('chart', 'precipation')"
      >
        <Line :data="precipChart.data" :options="precipChart.options" />
      </button>
      <button
        v-if="humidityChart.data"
        class="mini-chart"
        @click="$emit('chart', 'humidity')"
      >
        <Line :data="humidityChart.data" :options="humidityChart.options" />
      </button>
      <div
        v-if="
          !tempChart.data &&
          !windChart.data &&
          !precipChart.data &&
          !humidityChart.data
        "
      >
        No data
      </div>
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
import { ref, onUnmounted } from "vue";
import { Line } from "vue-chartjs";
import { setupChart } from "../config/chartConfig.js";
import { mapData } from "../helpers/chartMapping";

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
    const charts = ["temperature", "windspeed", "precipation", "humidity"];
    const tempChart = ref({});
    const windChart = ref({});
    const precipChart = ref({});
    const humidityChart = ref({});
    let eventSource;
    let pingInterval;

    const startSse = async () => {
      eventSource = new EventSource("http://localhost:8080/v1/chartData");

      eventSource.addEventListener("open", (data) => {
        console.debug("Event source opened for chart buttons");
      });

      eventSource.addEventListener("data", (event) => {
        const eventData = JSON.parse(event.data);
        if (eventData.error) {
          console.warn(eventData.notice);
          return;
        }

        const chartsData = [];
        for (const chartType of charts) {
          const chartData = mapData(chartType, eventData.data);
          chartsData.push(
            setupChart({
              titleText: `${chartType.charAt(0).toUpperCase()}${chartType.slice(
                1
              )} chart`,
              chartData: {
                vrapce: chartData.vrapce,
                mlinovi: chartData.mlinovi,
              },
              labels: chartData.dates,
              lineWidth: 1,
              pointRadius: 0,
              displayAxis: false,
            })
          );
        }

        tempChart.value = chartsData[0];
        windChart.value = chartsData[1];
        precipChart.value = chartsData[2];
        humidityChart.value = chartsData[3];
      });

      eventSource.addEventListener("error", (err) => {
        eventSource.close();
      });
    };

    const closeSse = () => {
      eventSource.close();
    };

    startSse();

    onUnmounted(() => {
      closeSse();
      clearInterval(pingInterval);
    });

    // Custom event to show component comunication
    const pingMsg = "ping from chart buttons component";
    const event = new CustomEvent("ping2", { detail: pingMsg });

    pingInterval = setInterval(() => {
      window.dispatchEvent(event);
    }, 3000);

    window.addEventListener("ping", (event) => {
      console.log(event.detail);
    });

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
